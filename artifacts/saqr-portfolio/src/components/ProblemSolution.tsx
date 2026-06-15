import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.problems.heading}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.problems.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
          {t.problems.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/8 overflow-hidden"
            >
              {/* Problem row */}
              <div className="flex items-start gap-3 p-5 border-b border-white/5 bg-red-500/5">
                <AlertCircle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/75 leading-relaxed">{item.problem}</p>
              </div>
              {/* Solution row */}
              <div className="flex items-start gap-3 p-5 bg-primary/5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90 leading-relaxed font-medium">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
