import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    toast({
      title: t.contact.emailCopied,
      duration: 2000,
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card p-8 md:p-16 rounded-3xl border border-white/10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.contact.heading}</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12">
            <Button 
              size="lg" 
              className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white h-14 px-8 text-lg w-full sm:w-auto"
              asChild
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                {t.contact.whatsappBtn}
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="rounded-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white h-14 px-8 text-lg w-full sm:w-auto"
              asChild
            >
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="w-6 h-6" />
                {t.contact.telegramBtn}
              </a>
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full glass-card hover:bg-white/10 h-14 px-8 text-lg border-white/20 w-full sm:w-auto"
              onClick={handleCopyEmail}
            >
              <Mail className="w-6 h-6 mr-2" />
              {t.contact.emailBtn}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
