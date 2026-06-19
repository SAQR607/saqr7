import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, TerminalSquare } from "lucide-react";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // Always show within first 80px
      if (currentY < 80) {
        setVisible(true);
      } else if (diff > 6) {
        // Scrolling down → hide
        setVisible(false);
        setIsMobileMenuOpen(false);
      } else if (diff < -4) {
        // Scrolling up → show
        setVisible(true);
      }

      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home",     label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact",  label: t.nav.contact },
  ];

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-110%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 rounded-none transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 shadow-xl"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "rgba(13, 16, 24, 0.88)"
          : "rgba(13, 16, 24, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <TerminalSquare className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl tracking-widest text-gradient uppercase">SAQR</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="rounded-full text-muted-foreground hover:text-primary gap-1.5 px-3"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wide">{lang === "ar" ? "EN" : "عربي"}</span>
            </Button>
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-5 h-9">
              <a href="#contact">{t.nav.hireMe}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="rounded-full text-muted-foreground px-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold ms-1">{lang === "ar" ? "EN" : "ع"}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(13, 16, 24, 0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t.nav.hireMe}</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
