import { readFileSync } from "node:fs";
import { join } from "node:path";

export type Waveform = { peaks: number[]; seconds: number };

// Loudness of a 16-bit PCM WAV in public/, read on the server at build time,
// so the page ships numbers, not audio decoding.
export function readWaveform(src: string, bars: number): Waveform {
  return parseWaveform(readFileSync(join(process.cwd(), "public", src)), bars, src);
}

// Loudness (RMS, scaled so the loudest bar is 1) of `bars` equal slices of the WAV in `buf`.
export function parseWaveform(buf: Buffer, bars: number, src = "audio"): Waveform {
  if (buf.length < 12 || buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WAVE") {
    throw new Error(`${src}: not a RIFF/WAVE file`);
  }

  let format = 0;
  let channels = 0;
  let rate = 0;
  let bits = 0;
  // Walk the chunks: some files carry a LIST chunk between "fmt " and "data"
  for (let offset = 12; offset + 8 <= buf.length; ) {
    const id = buf.toString("ascii", offset, offset + 4);
    const size = buf.readUInt32LE(offset + 4);
    const body = offset + 8;
    if (id === "fmt ") {
      format = buf.readUInt16LE(body);
      channels = buf.readUInt16LE(body + 2);
      rate = buf.readUInt32LE(body + 4);
      bits = buf.readUInt16LE(body + 14);
    } else if (id === "data") {
      if (format !== 1 || bits !== 16 || channels < 1 || rate < 1) {
        throw new Error(`${src}: expected 16-bit PCM, got format ${format}, ${bits}-bit, ${channels} channel(s)`);
      }
      const frames = Math.floor(Math.min(size, buf.length - body) / (2 * channels));
      if (frames < bars) throw new Error(`${src}: ${frames} frames is too short for ${bars} bars`);

      const rms: number[] = [];
      for (let b = 0; b < bars; b++) {
        const start = Math.floor((b * frames) / bars);
        const end = Math.floor(((b + 1) * frames) / bars);
        let sum = 0;
        // First channel only; the samples are mono
        for (let f = start; f < end; f++) sum += buf.readInt16LE(body + f * 2 * channels) ** 2;
        rms.push(Math.sqrt(sum / (end - start)));
      }
      const loudest = Math.max(...rms) || 1;
      return {
        peaks: rms.map((v) => Math.round((v / loudest) * 1000) / 1000),
        seconds: Math.round((frames / rate) * 10) / 10,
      };
    }
    offset = body + size + (size % 2);
  }
  throw new Error(`${src}: no data chunk`);
}
