import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

function AnimatedCounter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "ar";

  const stats = [
    { value: 30, suffix: "+", label: t.stats.projects },
    { value: 95, suffix: "%", label: t.stats.satisfaction },
    { value: 25, prefix: "-", suffix: "%", label: t.stats.timeSaved },
    { value: 99, suffix: "%", prefix: "+", label: t.stats.uptime },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center ${
                index !== 0 && (!isRtl ? "md:border-l" : "md:border-r") + " border-white/5"
              } px-4`}
            >
              <div className="text-4xl font-bold text-gradient mb-2 flex items-center gap-0.5">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter from={0} to={stat.value} />
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
