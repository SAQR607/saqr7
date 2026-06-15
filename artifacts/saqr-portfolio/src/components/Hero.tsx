import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft } from "lucide-react";

export default function Hero() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";

  const headlineLines = t.hero.headline.split("\n");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[45%] h-[55%] rounded-full bg-primary/20 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[40%] h-[50%] rounded-full bg-secondary/15 blur-[130px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[50%] w-[25%] h-[30%] rounded-full bg-accent/10 blur-[100px] animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-sm font-medium text-primary tracking-wide">{t.hero.badge}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {headlineLines.map((line, i) => (
                <span key={i} className={i === 0 ? "" : "text-gradient block"}>
                  {line}
                  {i < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Name + role */}
            <p className="text-base font-semibold text-muted-foreground tracking-wide uppercase">
              {t.hero.name} &mdash; {t.hero.title}
            </p>

            {/* Value proposition */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t.hero.valueProposition}
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 mt-2 ${isRtl ? "flex-row-reverse" : ""}`}>
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
                <a href="#projects" className={`flex items-center gap-2 ${isRtl ? "flex-row-reverse" : ""}`}>
                  {t.hero.secondaryCta}
                  {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <motion.div
              className="relative"
              whileHover={{ rotateY: isRtl ? 3 : -3, rotateX: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 via-blue-500/20 to-cyan-400/20 blur-2xl opacity-70" />

              {/* Portrait container */}
              <div className="relative w-64 sm:w-72 lg:w-80 overflow-hidden rounded-3xl border border-white/10 shadow-2xl" style={{ aspectRatio: "3/4" }}>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none rounded-3xl" />
                <img
                  src="/profile.png"
                  alt={t.hero.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Saqr&background=0B0F19&color=D4A84B&size=512";
                  }}
                />
              </div>
            </motion.div>

            {/* Floating code badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 right-0 lg:-right-4 glass-card px-4 py-2 rounded-xl text-primary font-mono text-sm border border-primary/30 shadow-lg"
            >
              build.deploy()
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-0 lg:-left-4 glass-card px-4 py-2 rounded-xl text-secondary font-mono text-sm border border-secondary/30 shadow-lg"
            >
              automate.system()
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
