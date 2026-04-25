import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    "Networking (LAN/WAN)",
    "Windows Server",
    "Linux Administration",
    "Active Directory",
    "VPN",
    "Nagios / Zabbix",
    "Python",
    "Bash Scripting",
    "Microsoft 365",
    "Google Workspace",
    "ITIL Foundations",
    "Virtualization (VMware/Proxmox)"
  ];

  return (
    <section className="py-24 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.skills.heading}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: Math.random() * 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)", borderColor: "hsl(var(--primary) / 0.5)" }}
              className="px-6 py-3 rounded-full glass-card border border-white/10 text-sm font-medium cursor-default transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
