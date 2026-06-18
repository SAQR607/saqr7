import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  appDev: "bg-primary/15 text-primary border-primary/30",
  automation: "bg-secondary/15 text-secondary border-secondary/30",
};

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "appDev" | "automation">("all");

  const filters = [
    { key: "all" as const,       label: t.projects.filterAll },
    { key: "appDev" as const,    label: t.projects.filterAppDev },
    { key: "automation" as const, label: t.projects.filterAutomation },
  ];

  const visible = t.projects.items.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.heading}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{t.projects.subheading}</p>
        </motion.div>

        {/* Filter bar */}
        <div className="flex justify-center gap-3 mt-10 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                filter === f.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-white/15 text-muted-foreground hover:text-foreground hover:border-white/30 glass-card"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card rounded-3xl border border-white/8 hover:border-primary/25 transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="p-6 border-b border-white/5">
                  <span
                    className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-3 ${
                      categoryColors[project.category] ?? "bg-white/10 text-foreground/70 border-white/15"
                    }`}
                  >
                    {project.category === "appDev" ? t.projects.filterAppDev : t.projects.filterAutomation}
                  </span>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{project.title}</h3>
                </div>

                {/* Description */}
                <div className="p-6 flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-foreground/60 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-white/15 hover:border-primary/40 hover:text-primary glass-card transition-all"
                  >
                    <a href="#contact">{t.projects.viewBtn}</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
