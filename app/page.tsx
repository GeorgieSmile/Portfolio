import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
    <>
      <Nav />
      <main>
        <Hero />
        <AudioSamples />
        <Experience />
        <Publication />
        <Projects />
        <Achievements />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
