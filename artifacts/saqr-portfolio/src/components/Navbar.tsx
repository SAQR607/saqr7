import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/ChatGPT_Image_Apr_26,_2026,_01_49_42_AM_1782822582781.png";

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
      if (currentY < 80) {
        setVisible(true);
      } else if (diff > 6) {
        setVisible(false);
        setIsMobileMenuOpen(false);
      } else if (diff < -4) {
        setVisible(true);
      }
      setScrolled(currentY > 20);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home",      label: t.nav.home },
    { href: "#expertise", label: t.nav.expertise },
    { href: "#services",  label: t.nav.services },
    { href: "#projects",  label: t.nav.projects },
    { href: "#contact",   label: t.nav.contact },
  ];

  return (
    <motion.header
      animate={{ y: visible ? 0 : "-110%" }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5, 11, 22, 0.92)" : "rgba(5, 11, 22, 0.65)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand — logo + wordmark */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="h-9 w-9 rounded-lg overflow-hidden">
              <img
                src={logoImg}
                alt="SAQR Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-bold text-lg tracking-widest text-gradient uppercase">SAQR</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-5 font-semibold"
            >
              <a href="#contact">{t.nav.hireMe}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground px-2 py-1"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === "ar" ? "EN" : "ع"}
            </button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="h-8 w-8">
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
              background: "rgba(5, 11, 22, 0.97)",
              backdropFilter: "blur(14px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5">
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
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
