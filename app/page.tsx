import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publication from "@/components/Publication";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Publication />
      <Projects />
      <Achievements />
      <Skills />
      <Footer />
    </main>
  );
}
