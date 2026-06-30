import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const categoryColors = [
  "text-foreground/80 border-white/10 bg-white/3",
  "text-primary/80 border-primary/20 bg-primary/5",
  "text-secondary/80 border-secondary/20 bg-secondary/5",
  "text-accent/80 border-accent/20 bg-accent/5",
  "text-secondary/80 border-secondary/20 bg-secondary/5",
  "text-primary/80 border-primary/20 bg-primary/5",
  "text-foreground/80 border-white/10 bg-white/3",
  "text-accent/80 border-accent/20 bg-accent/5",
];

const headingColors = [
  "text-foreground/60",
  "text-primary/80",
  "text-secondary/80",
  "text-accent/80",
  "text-secondary/80",
  "text-primary/80",
  "text-foreground/60",
  "text-accent/80",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-white/[0.015] border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.heading}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">{t.skills.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 border border-white/6"
            >
              <h3 className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${headingColors[i] ?? "text-foreground/60"}`}>
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${categoryColors[i] ?? categoryColors[0]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
