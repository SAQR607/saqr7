import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Brain, Cpu, Users, Briefcase } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const cards = [
    { icon: Brain, title: t.about.cards.problemSolving.title, desc: t.about.cards.problemSolving.desc, color: "text-primary" },
    { icon: Cpu, title: t.about.cards.automationThinking.title, desc: t.about.cards.automationThinking.desc, color: "text-secondary" },
    { icon: Users, title: t.about.cards.trainer.title, desc: t.about.cards.trainer.desc, color: "text-accent" },
    { icon: Briefcase, title: t.about.cards.freelancer.title, desc: t.about.cards.freelancer.desc, color: "text-primary" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.about.paragraph}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
