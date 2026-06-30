import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % t.hero.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  const headlineLines = t.hero.headline.split("\n");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Subtle glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] end-[-10%] w-[55%] h-[55%] rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute bottom-[-10%] start-[-5%] w-[40%] h-[45%] rounded-full bg-secondary/6 blur-[90px]" />
        <div className="absolute top-[40%] end-[30%] w-[20%] h-[20%] rounded-full bg-accent/5 blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-7 order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 w-fit">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary text-xs font-semibold tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {t.hero.badge}
              </div>
            </div>

            {/* Name + animated role */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-3">
                {t.hero.handle}
              </h1>
              <div className="h-8 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-base font-semibold text-gradient"
                  >
                    {t.hero.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Headline */}
            <div className="text-2xl sm:text-3xl font-bold text-foreground/90 leading-snug">
              {headlineLines[0]}
              {headlineLines[1] && (
                <>
                  <br />
                  <span className="text-gradient">{headlineLines[1]}</span>
                </>
              )}
            </div>

            {/* Value proposition */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.valueProposition}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-1">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-white text-sm px-7 h-12 font-semibold shadow-[0_0_24px_rgba(59,130,246,0.3)]"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  {t.hero.primaryCta}
                  {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/12 bg-white/4 hover:bg-white/8 text-sm px-7 h-12 font-semibold"
                asChild
              >
                <a href="#projects">{t.hero.secondaryCta}</a>
              </Button>
            </div>

            {/* Quick expertise strip */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Security", "AI", "Automation", "Backend", "Education", "Consulting"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-muted-foreground/60 border border-white/6 px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-secondary/8 to-accent/10 blur-2xl opacity-70" />

              {/* Image frame */}
              <div
                className="relative overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
                style={{ width: "280px", aspectRatio: "3/4" }}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                <img
                  src="/profile.png"
                  alt={t.hero.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=IА&background=0A1224&color=3B82F6&size=512`;
                  }}
                />
              </div>

              {/* Floating credential cards */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-3 -end-4 glass-card px-3.5 py-2 rounded-xl border border-primary/20 text-xs font-mono text-primary"
              >
                Security · AI · Automation
              </motion.div>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-3 -start-4 glass-card px-3.5 py-2 rounded-xl border border-secondary/20 text-xs font-mono text-secondary flex items-center gap-1.5"
              >
                <ChevronRight className="h-3 w-3" />
                50+ Projects Delivered
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
