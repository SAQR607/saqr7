import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/i18n";

function AnimatedCounter({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * to));
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
    { value: 15, prefix: "+", suffix: "",  label: t.stats.projects },
    { value: 10, prefix: "+", suffix: "",  label: t.stats.clients },
    { value: 3,  prefix: "+", suffix: "",  label: t.stats.experience },
    { value: 100, prefix: "",  suffix: "%", label: t.stats.onTime },
  ];

  return (
    <section className="py-14 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10"
        >
          {t.stats.heading}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center ${
                i !== 0 ? (isRtl ? "md:border-r" : "md:border-l") + " border-white/5" : ""
              } px-4`}
            >
              <div className="text-4xl font-bold text-gradient mb-2 flex items-center gap-0.5">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter to={stat.value} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
