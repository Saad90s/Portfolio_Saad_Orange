import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { AIInterest } from "@/components/AIInterest";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Journey />
      <AIInterest />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  );
}
