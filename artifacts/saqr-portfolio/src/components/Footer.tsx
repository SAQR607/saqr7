import { useLanguage } from "@/i18n";
import { siteConfig } from "@/config/siteConfig";
import { TerminalSquare, Linkedin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <TerminalSquare className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-widest text-gradient uppercase">SAQR</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            &copy; {year} Saqr. {t.footer.copyright}.
          </div>

          {/* Secondary links — IT support moved here */}
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <span className="hidden md:inline">{t.footer.supportLabel}</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary transition-colors"
            >
              {t.footer.supportLink}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
