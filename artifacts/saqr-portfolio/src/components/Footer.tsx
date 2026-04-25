import { useLanguage } from "@/i18n";
import { TerminalSquare } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TerminalSquare className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-widest text-gradient uppercase">SAQR</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {year} Saqr. {t.footer.copyright}.
          </div>
        </div>
      </div>
    </footer>
  );
}
