import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LanguageContext, useLanguageState } from "@/i18n";

/* Below-fold sections are lazy-loaded so the initial JS bundle is smaller
   and the browser only parses / renders each section when needed. */
const Stats       = lazy(() => import("@/components/Stats"));
const Expertise   = lazy(() => import("@/components/Expertise"));
const Services    = lazy(() => import("@/components/Services"));
const Projects    = lazy(() => import("@/components/Projects"));
const Skills      = lazy(() => import("@/components/Skills"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CTA         = lazy(() => import("@/components/CTA"));
const Contact     = lazy(() => import("@/components/Contact"));
const Footer      = lazy(() => import("@/components/Footer"));
const FloatingContact = lazy(() => import("@/components/FloatingContact"));

export default function Home() {
  const languageState = useLanguageState();

  return (
    <LanguageContext.Provider value={languageState}>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        {/* Navbar and Hero are eagerly loaded — they are above the fold */}
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <Suspense fallback={<div className="h-32" />}>
            <Stats />
            <Expertise />
            <Services />
            <Projects />
            <Skills />
            <Testimonials />
            <CTA />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingContact />
        </Suspense>
      </div>
    </LanguageContext.Provider>
  );
}
