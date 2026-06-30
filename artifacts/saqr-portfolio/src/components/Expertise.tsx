import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import {
  Shield, Code2, Brain, Zap, GraduationCap, Building2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield, Code2, Brain, Zap, GraduationCap, Building2,
};

const cardStyles = [
  { border: "hover:border-primary/40",   icon: "text-primary bg-primary/10",   tag: "bg-primary/8 text-primary/80" },
  { border: "hover:border-secondary/40", icon: "text-secondary bg-secondary/10", tag: "bg-secondary/8 text-secondary/80" },
  { border: "hover:border-accent/40",    icon: "text-accent bg-accent/10",     tag: "bg-accent/8 text-accent/80" },
  { border: "hover:border-secondary/40", icon: "text-secondary bg-secondary/10", tag: "bg-secondary/8 text-secondary/80" },
  { border: "hover:border-primary/40",   icon: "text-primary bg-primary/10",   tag: "bg-primary/8 text-primary/80" },
  { border: "hover:border-accent/40",    icon: "text-accent bg-accent/10",     tag: "bg-accent/8 text-accent/80" },
];

export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Full-Spectrum Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.expertise.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            {t.expertise.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.expertise.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Shield;
            const style = cardStyles[i] ?? cardStyles[0];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`glass-card rounded-2xl p-6 border border-white/6 ${style.border} transition-colors duration-300 flex flex-col gap-4`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${style.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${style.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
