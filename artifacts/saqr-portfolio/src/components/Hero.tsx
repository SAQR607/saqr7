import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Hero() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const headlineLines = t.hero.headline.split("\n");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Lighter background — single soft orb */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] end-[-5%] w-[50%] h-[60%] rounded-full bg-primary/12 blur-[90px]" />
        <div className="absolute bottom-[-10%] start-[-5%] w-[40%] h-[45%] rounded-full bg-secondary/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2]">
              {headlineLines[0]}
              {headlineLines[1] && (
                <>
                  <br />
                  <span className="text-gradient">{headlineLines[1]}</span>
                </>
              )}
            </h1>

            <p className="text-base font-semibold text-muted-foreground tracking-wide">
              {t.hero.name} &mdash; {t.hero.title}
            </p>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t.hero.valueProposition}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-14"
                asChild
              >
                <a href="#contact">{t.hero.primaryCta}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-base px-8 h-14"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  {t.hero.secondaryCta}
                  {isRtl ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/10 blur-xl opacity-60" />

              <div
                className="relative w-64 sm:w-72 lg:w-80 overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D1018]/60 via-transparent to-transparent pointer-events-none rounded-3xl" />
                <img
                  src="/profile.png"
                  alt={t.hero.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=Saqr&background=141821&color=D4A84B&size=512`;
                  }}
                />
              </div>

              {/* Floating badges — static, no loop animation for lighter feel */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-4 end-0 lg:-end-4 glass-card px-4 py-2 rounded-xl text-primary font-mono text-sm border border-primary/30"
              >
                build.app()
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 start-0 lg:-start-4 glass-card px-4 py-2 rounded-xl text-secondary font-mono text-sm border border-secondary/30"
              >
                automate.now()
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
