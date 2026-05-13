import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publication from "@/components/Publication";
import AudioSamples from "@/components/AudioSamples";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Publication />
      <AudioSamples />
      <Projects />
      <Achievements />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
