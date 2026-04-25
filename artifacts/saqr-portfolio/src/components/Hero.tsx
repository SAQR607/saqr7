import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Download } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";
  const Icon = isRtl ? ChevronRight : ArrowRight;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-primary/30 bg-primary/10 w-fit">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-sm font-medium text-primary tracking-wide">Available for work</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              <span className="block">{t.hero.name}</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient">
              {t.hero.title}
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t.hero.valueProposition}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-14" asChild>
                <a href="#contact">
                  {t.hero.hireMeBtn}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full glass-card hover:bg-white/5 text-base px-8 h-14 border-white/10" asChild>
                <a href="#about" className="flex items-center gap-2">
                  {t.hero.contactBtn}
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex justify-center items-center perspective-1000"
          >
            {/* Image container with tilt effect */}
            <motion.div 
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-2 border-primary/30 p-2 glass-card group cursor-pointer"
              whileHover={{ 
                rotateX: 5, 
                rotateY: -5,
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 212, 255, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <img 
                src="/profile.png" 
                alt={t.hero.name} 
                className="w-full h-full object-cover rounded-full filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Saqr&background=0B0F19&color=00D4FF&size=512";
                }}
              />
            </motion.div>
            
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass-card px-4 py-2 rounded-xl text-primary font-mono text-sm border-primary/30"
            >
              import automation
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 glass-card px-4 py-2 rounded-xl text-secondary font-mono text-sm border-secondary/30"
            >
              system.optimize()
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
