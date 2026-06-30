import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import {
  Layers, Sparkles, GitBranch, Shield, Network,
  GraduationCap, Building2, ClipboardCheck, ArrowRight, ArrowLeft,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers, Sparkles, GitBranch, Shield, Network,
  GraduationCap, Building2, ClipboardCheck,
};

const iconStyles = [
  "text-primary bg-primary/10",
  "text-accent bg-accent/10",
  "text-secondary bg-secondary/10",
  "text-primary bg-primary/10",
  "text-secondary bg-secondary/10",
  "text-accent bg-accent/10",
  "text-primary bg-primary/10",
  "text-secondary bg-secondary/10",
];

export default function Services() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";

  return (
    <section id="services" className="py-24 bg-white/[0.015] border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-3 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            {t.services.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Layers;
            const iconStyle = iconStyles[i] ?? iconStyles[0];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-5 border border-white/6 hover:border-primary/20 transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconStyle}`}>
                  <Icon className="w-[18px] h-[18px]" />
                </div>

                <div className="flex-1 flex flex-col gap-1.5">
                  <h3 className="text-sm font-bold text-foreground leading-snug">{service.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/4 text-muted-foreground/55 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary/60 hover:text-primary transition-all duration-200 group-hover:gap-2.5"
                >
                  {service.cta}
                  {isRtl ? <ArrowLeft className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
