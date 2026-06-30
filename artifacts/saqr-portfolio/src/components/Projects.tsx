import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Server, Shield, type LucideIcon } from "lucide-react";

type CategoryKey = "AI" | "Automation" | "Backend" | "Security";

const categoryConfig: Record<CategoryKey, {
  gradient: string;
  dot: string;
  icon: LucideIcon;
  badgeClass: string;
}> = {
  AI:         { gradient: "from-violet-900/60 to-purple-800/20",  dot: "bg-violet-400",  icon: Brain,  badgeClass: "bg-violet-500/15 text-violet-300 border-violet-500/30" },
  Automation: { gradient: "from-sky-900/60 to-cyan-800/20",       dot: "bg-sky-400",     icon: Zap,    badgeClass: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
  Backend:    { gradient: "from-emerald-900/60 to-teal-800/20",   dot: "bg-emerald-400", icon: Server, badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  Security:   { gradient: "from-amber-900/60 to-orange-800/20",   dot: "bg-amber-400",   icon: Shield, badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
};

export default function Projects() {
  const { t } = useLanguage();

  const getCategoryLabel = (cat: string) => {
    if (cat === "AI") return t.projects.filterAI;
    if (cat === "Automation") return t.projects.filterAutomation;
    if (cat === "Security") return t.projects.filterSecurity;
    if (cat === "Backend") return t.projects.filterBackend;
    return cat;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            {t.projects.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => {
            const cat = (project.category as CategoryKey) in categoryConfig
              ? (project.category as CategoryKey)
              : "Backend";
            const visual = categoryConfig[cat];
            const Icon = visual.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl border border-white/6 hover:border-white/12 transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual header */}
                <div className={`relative h-32 bg-gradient-to-br ${visual.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Browser dots */}
                  <div className="absolute top-3.5 start-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/12" />
                    <div className="w-2 h-2 rounded-full bg-white/12" />
                    <div className="w-2 h-2 rounded-full bg-white/12" />
                  </div>

                  <Icon className="w-14 h-14 text-white/15" strokeWidth={1} />

                  {/* Faint content lines */}
                  <div className="absolute bottom-3.5 start-4 end-4 space-y-1.5">
                    <div className="h-1 bg-white/8 rounded-full w-3/4" />
                    <div className="h-1 bg-white/8 rounded-full w-1/2" />
                  </div>

                  {/* Live dot + category */}
                  <div className="absolute top-3 end-4">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${visual.badgeClass}`}>
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Outcome metric */}
                  {"outcome" in project && project.outcome && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/6">
                      <div className={`w-1.5 h-1.5 rounded-full ${visual.dot}`} />
                      <span className="text-xs font-semibold text-foreground/70">{project.outcome as string}</span>
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/4 text-muted-foreground/60 border border-white/6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full border-white/10 hover:border-primary/40 hover:text-primary transition-all mt-auto text-xs"
                  >
                    <a href="#contact">{t.projects.viewBtn}</a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
