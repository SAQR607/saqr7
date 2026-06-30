import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
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
          <Expertise />
          <Services />
          <Projects />
          <Skills />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </LanguageContext.Provider>
  );
}
