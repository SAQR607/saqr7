import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Server, Terminal, Presentation } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Server,
      title: t.services.it.title,
      items: t.services.it.items,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "hover:border-cyan-500/50"
    },
    {
      icon: Terminal,
      title: t.services.automation.title,
      items: t.services.automation.items,
      gradient: "from-cyan-500/20 to-teal-500/20",
      border: "hover:border-teal-500/50"
    },
    {
      icon: Presentation,
      title: t.services.training.title,
      items: t.services.training.items,
      gradient: "from-orange-500/20 to-red-500/20",
      border: "hover:border-orange-500/50"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.heading}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 rounded-3xl border border-white/10 ${service.border} transition-all duration-300 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
