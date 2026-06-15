import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Zap, Globe, Server } from "lucide-react";

const icons = [Zap, Globe, Server];
const badgeColors = [
  "bg-primary/15 text-primary border-primary/25",
  "bg-secondary/15 text-secondary border-secondary/25",
  "bg-white/10 text-foreground/70 border-white/15",
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.heading}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.projects.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-14">
          {t.projects.items.map((project, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="glass-card rounded-3xl border border-white/8 hover:border-primary/25 transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${badgeColors[index % badgeColors.length]}`}>
                      {project.badge}
                    </span>
                    <h3 className="text-lg font-bold text-foreground leading-snug">{project.title}</h3>
                  </div>
                </div>

                {/* Case study rows */}
                <div className="flex flex-col flex-1 divide-y divide-white/5">
                  <div className="p-5">
                    <p className="text-xs font-semibold text-red-400/80 uppercase tracking-widest mb-1.5">
                      {t.projects.labels.problem}
                    </p>
                    <p className="text-sm text-foreground/65 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1.5">
                      {t.projects.labels.solution}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="p-5 bg-primary/5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">
                      {t.projects.labels.result}
                    </p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
