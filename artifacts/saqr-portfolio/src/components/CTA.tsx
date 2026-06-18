import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";

export default function CTA() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Distinct background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-background to-secondary/8 border-y border-white/5" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-semibold">
            <span className="text-base">🚀</span>
            {t.cta.badge}
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {t.cta.heading}
          </h2>

          {/* Subheadline */}
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            {t.cta.subheading}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center">
            <Button
              size="lg"
              className="rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white h-14 px-8 text-base font-bold shadow-[0_0_24px_rgba(37,211,102,0.35)] hover:shadow-[0_0_32px_rgba(37,211,102,0.5)] transition-all"
              asChild
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5" />
                {t.cta.primaryBtn}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 hover:border-primary hover:text-primary h-14 px-8 text-base transition-all"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                {t.cta.secondaryBtn}
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </Button>
          </div>

          {/* Trust note */}
          <p className="text-xs text-muted-foreground mt-2">{t.cta.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
