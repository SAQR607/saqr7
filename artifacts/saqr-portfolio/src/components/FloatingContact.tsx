import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useLanguage } from "@/i18n";

export default function FloatingContact() {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltip = lang === "ar" ? "تواصل الآن" : "Chat now";

  useEffect(() => {
    const handle = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="glass-card px-3 py-1.5 rounded-full text-xs font-semibold text-foreground border border-white/10 whitespace-nowrap shadow-lg"
              >
                {tooltip}
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp button */}
          <motion.a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] text-white"
            aria-label={tooltip}
          >
            <MessageCircle className="w-7 h-7" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
