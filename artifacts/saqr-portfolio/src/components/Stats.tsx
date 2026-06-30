import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { FolderOpen, Users, Award, CalendarCheck, GraduationCap } from "lucide-react";

function AnimatedCounter({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";

  const stats = [
    { icon: FolderOpen,    value: 50,  prefix: "+", suffix: "", label: t.stats.projects,   color: "text-primary",   highlight: false },
    { icon: GraduationCap, value: 500, prefix: "+", suffix: "", label: t.stats.students,   color: "text-primary",   highlight: true  },
    { icon: Users,         value: 35,  prefix: "+", suffix: "", label: t.stats.clients,    color: "text-secondary", highlight: false },
    { icon: Award,         value: 3,   prefix: "+", suffix: "", label: t.stats.experience, color: "text-secondary", highlight: false },
    { icon: CalendarCheck, value: 100, prefix: "",  suffix: "%", label: t.stats.onTime,   color: "text-secondary", highlight: false },
  ];

  return (
    <section className="py-14 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10"
        >
          {t.stats.heading}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`flex flex-col items-center text-center py-2 ${
                i !== 0 ? (isRtl ? "sm:border-r" : "sm:border-l") + " border-white/5" : ""
              } ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-3 opacity-70`} />
              <div
                className={`font-extrabold mb-1 flex items-baseline gap-0.5 leading-none ${
                  stat.highlight
                    ? "text-5xl text-gradient"
                    : "text-5xl text-gradient"
                }`}
              >
                {stat.prefix && <span className="text-3xl">{stat.prefix}</span>}
                <AnimatedCounter to={stat.value} />
                {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
              </div>
              <p className={`text-xs font-semibold uppercase tracking-wider mt-1.5 ${
                stat.highlight ? "text-primary" : "text-muted-foreground"
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
