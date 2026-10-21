// Run with `npm test`. Builds WAV files in memory, so it needs no fixtures.
import assert from "node:assert/strict";
import { test } from "node:test";
import { parseWaveform, readWaveform } from "./waveform.ts";

// A mono 16-bit PCM WAV; `extra` chunks go between "fmt " and "data", like the LIST chunk real files carry
function wav(samples, { rate = 16000, bits = 16, format = 1, extra = [] } = {}) {
  const chunk = (id, body) => {
    const head = Buffer.alloc(8);
    head.write(id, 0, "ascii");
    head.writeUInt32LE(body.length, 4);
    return Buffer.concat([head, body, body.length % 2 ? Buffer.alloc(1) : Buffer.alloc(0)]);
  };
  const fmt = Buffer.alloc(16);
  fmt.writeUInt16LE(format, 0);
  fmt.writeUInt16LE(1, 2);
  fmt.writeUInt32LE(rate, 4);
  fmt.writeUInt32LE(rate * 2, 8);
  fmt.writeUInt16LE(2, 12);
  fmt.writeUInt16LE(bits, 14);
  const data = Buffer.alloc(samples.length * 2);
  samples.forEach((v, i) => data.writeInt16LE(v, i * 2));
  const body = Buffer.concat([Buffer.from("WAVE"), chunk("fmt ", fmt), ...extra.map(([id, b]) => chunk(id, b)), chunk("data", data)]);
  const riff = Buffer.alloc(8);
  riff.write("RIFF", 0, "ascii");
  riff.writeUInt32LE(body.length, 4);
  return Buffer.concat([riff, body]);
}

test("loud slices score higher, the loudest is 1, and the length is in seconds", () => {
  const quiet = Array(800).fill(1000);
  const loud = Array(800).fill(8000);
  const w = parseWaveform(wav([...quiet, ...loud], { rate: 1600 }), 2);
  assert.deepEqual(w.peaks, [0.125, 1]);
  assert.equal(w.seconds, 1);
});

test("silence gives all-zero bars instead of dividing by zero", () => {
  assert.deepEqual(parseWaveform(wav(Array(100).fill(0)), 4).peaks, [0, 0, 0, 0]);
});

test("skips metadata chunks, including odd-length ones with their pad byte", () => {
  const w = parseWaveform(wav(Array(64).fill(3000), { extra: [["LIST", Buffer.from("odd")]] }), 8);
  assert.deepEqual(w.peaks, Array(8).fill(1));
});

test("rejects files it cannot read", () => {
  assert.throws(() => parseWaveform(Buffer.from("not a wav file"), 4), /not a RIFF\/WAVE/);
  assert.throws(() => parseWaveform(Buffer.alloc(4), 4), /not a RIFF\/WAVE/);
  assert.throws(() => parseWaveform(wav(Array(64).fill(1), { bits: 8 }), 4), /expected 16-bit PCM/);
  assert.throws(() => parseWaveform(wav(Array(64).fill(1), { format: 3 }), 4), /expected 16-bit PCM/);
  assert.throws(() => parseWaveform(wav(Array(3).fill(1)), 8), /too short/);
  // Truncated after the header: no data chunk left to find
  assert.throws(() => parseWaveform(wav(Array(64).fill(1)).subarray(0, 36), 4), /no data chunk/);
});

test("the site's own samples parse", () => {
  for (const src of ["/audio/prompt.wav", "/audio/prompt_gen1.wav", "/audio/prompt_gen2.wav"]) {
    const w = readWaveform(src, 96);
    assert.equal(w.peaks.length, 96);
    assert.equal(Math.max(...w.peaks), 1);
    assert.ok(w.seconds > 1);
  }
});
