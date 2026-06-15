import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ProblemSolution from "@/components/ProblemSolution";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { LanguageContext, useLanguageState } from "@/i18n";

export default function Home() {
  const languageState = useLanguageState();

  return (
    <LanguageContext.Provider value={languageState}>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <Stats />
          <Services />
          <ProblemSolution />
          <Projects />
          <About />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </LanguageContext.Provider>
  );
}
