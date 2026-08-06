import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { ProofBar } from "@/components/sections/proof-bar";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { OffTheClock } from "@/components/sections/off-the-clock";
import { Contact, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <OffTheClock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
