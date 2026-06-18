import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Package, CalendarDays, DollarSign, Bot } from "lucide-react";

// Visual config per project (matches the 4 items in i18n)
const cardVisuals = [
  {
    gradient: "from-blue-700/40 via-blue-600/20 to-cyan-600/10",
    icon: Package,
    dot: "bg-blue-400",
  },
  {
    gradient: "from-emerald-700/40 via-emerald-600/20 to-teal-600/10",
    icon: CalendarDays,
    dot: "bg-emerald-400",
  },
  {
    gradient: "from-violet-700/40 via-violet-600/20 to-purple-600/10",
    icon: DollarSign,
    dot: "bg-violet-400",
  },
  {
    gradient: "from-sky-700/40 via-sky-600/20 to-indigo-600/10",
    icon: Bot,
    dot: "bg-sky-400",
  },
];

const categoryColors: Record<string, string> = {
  appDev:     "bg-primary/15 text-primary border-primary/30",
  automation: "bg-secondary/15 text-secondary border-secondary/30",
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.heading}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{t.projects.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
          {t.projects.items.map((project, i) => {
            const visual = cardVisuals[i] ?? cardVisuals[0];
            const Icon = visual.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="glass-card rounded-3xl border border-white/8 hover:border-primary/20 transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Visual header — app preview mockup */}
                <div className={`relative h-36 bg-gradient-to-br ${visual.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Browser chrome dots */}
                  <div className="absolute top-3.5 start-4 flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>

                  {/* Center icon — large, faint */}
                  <Icon className="w-16 h-16 text-white/20" strokeWidth={1} />

                  {/* Fake content lines at bottom */}
                  <div className="absolute bottom-3.5 start-4 end-4 space-y-1.5">
                    <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
                    <div className="h-1.5 bg-white/10 rounded-full w-1/2" />
                    <div className="h-1.5 bg-white/8 rounded-full w-2/3" />
                  </div>

                  {/* Live dot */}
                  <div className={`absolute top-3.5 end-4 flex items-center gap-1.5`}>
                    <div className={`w-2 h-2 rounded-full ${visual.dot}`} />
                    <span className="text-[10px] text-white/40 font-mono">live</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground leading-snug flex-1">{project.title}</h3>
                    <span className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[project.category] ?? "bg-white/10 text-foreground/60 border-white/15"}`}>
                      {project.category === "appDev" ? t.projects.filterAppDev : t.projects.filterAutomation}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-foreground/55 border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-white/12 hover:border-primary/40 hover:text-primary glass-card transition-all mt-auto"
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
