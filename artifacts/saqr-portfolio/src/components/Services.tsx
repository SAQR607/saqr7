import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Globe, Zap, LayoutDashboard, Rocket, Plug, Gauge } from "lucide-react";

const icons = [Globe, Zap, LayoutDashboard, Rocket, Plug, Gauge];
const accents = [
  { gradient: "from-primary/20 to-secondary/10", border: "hover:border-primary/40" },
  { gradient: "from-secondary/20 to-primary/10", border: "hover:border-secondary/40" },
  { gradient: "from-primary/15 to-secondary/15", border: "hover:border-primary/30" },
  { gradient: "from-secondary/15 to-primary/15", border: "hover:border-secondary/30" },
  { gradient: "from-primary/20 to-transparent", border: "hover:border-primary/40" },
  { gradient: "from-secondary/20 to-transparent", border: "hover:border-secondary/40" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.heading}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.services.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            const accent = accents[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className={`glass-card p-7 rounded-3xl border border-white/8 ${accent.border} transition-all duration-300 relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.desc}</p>

                  <ul className="space-y-2.5">
                    {service.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
