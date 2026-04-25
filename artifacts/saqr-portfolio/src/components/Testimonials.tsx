import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { ...t.testimonials.placeholder, id: 1 },
    { ...t.testimonials.placeholder, id: 2 },
  ];

  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/5 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-xl font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-foreground/80 italic">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
