import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";

export default function Services() {
  const { t } = useLanguage();
  const cards = [t.services.app, t.services.bot];
  const gradients = [
    "from-primary/25 via-primary/5 to-transparent",
    "from-secondary/25 via-secondary/5 to-transparent",
  ];
  const borders = ["hover:border-primary/40", "hover:border-secondary/40"];

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
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{t.services.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-8 rounded-3xl border border-white/10 ${borders[i]} transition-all duration-300 relative overflow-hidden group flex flex-col gap-6`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col gap-5 flex-1">
                <div className="text-5xl">{card.icon}</div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>

                <div className="glass-card rounded-xl px-4 py-3 border border-white/5">
                  <p className="text-xs font-mono text-primary/80 tracking-wide">{card.stack}</p>
                </div>

                <Button
                  asChild
                  className="w-full rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300 mt-auto"
                >
                  <a href="#contact">{card.cta}</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
