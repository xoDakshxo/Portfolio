import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { PromptEngineering } from "@/components/PromptEngineering";
import { Projects } from "@/components/Projects";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { NoiseBackground } from "@/components/ui/noise-background";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <NoiseBackground intensity="medium">
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="prompt-engineering">
            <PromptEngineering />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="clients">
            <Clients />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </NoiseBackground>
      </main>
    </>
  );
};

export default Index;
