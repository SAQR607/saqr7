import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  projectType: string;
  description: string;
  budget: string;
  startTime: string;
};

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [form, setForm] = useState<FormData>({
    name: "", email: "", whatsapp: "",
    projectType: "", description: "", budget: "", startTime: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: "" }));
  };

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim())        errs.name        = t.contact.requiredError;
    if (!form.email.trim())       errs.email       = t.contact.requiredError;
    else if (!isValidEmail(form.email)) errs.email = t.contact.emailError;
    if (!form.projectType)        errs.projectType = t.contact.requiredError;
    if (!form.description.trim()) errs.description = t.contact.requiredError;
    return errs;
  };

  const sendToTelegram = async () => {
    if (!siteConfig.telegramBotToken || !siteConfig.telegramChatId) {
      console.warn("Telegram credentials not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID.");
      return false;
    }

    const message = `
🔔 *طلب عميل جديد!*
━━━━━━━━━━━━━━━
👤 *الاسم:* ${form.name}
📧 *البريد:* ${form.email}
📱 *واتساب:* ${form.whatsapp || "لم يُذكر"}
🗂️ *نوع المشروع:* ${form.projectType}
📝 *الوصف:* ${form.description}
💰 *الميزانية:* ${form.budget || "لم تُحدد"}
⏰ *موعد البدء:* ${form.startTime || "لم يُحدد"}
━━━━━━━━━━━━━━━
🕐 ${new Date().toLocaleString("ar-SA")}
    `.trim();

    const res = await fetch(
      `https://api.telegram.org/bot${siteConfig.telegramBotToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: siteConfig.telegramChatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );
    return res.ok;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const ok = await sendToTelegram();
      setStatus(ok !== false ? "success" : "error");
      if (ok !== false) {
        setForm({ name: "", email: "", whatsapp: "", projectType: "", description: "", budget: "", startTime: "" });
      }
    } catch {
      setStatus("error");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    toast({ title: t.contact.emailCopied, duration: 2000 });
  };

  const inputCls = (field: keyof FormData) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
      errors[field] ? "border-red-500/60" : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.heading}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">{t.contact.subheading}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Success / Error banners */}
          {status === "success" && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center font-medium">
              {t.contact.successMsg}
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center font-medium">
              {t.contact.errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-5">
            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  {t.contact.nameLabel} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  placeholder={t.contact.namePlaceholder}
                  className={inputCls("name")}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  {t.contact.emailLabel} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder={t.contact.emailPlaceholder}
                  className={inputCls("email")}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Row: WhatsApp + Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  {t.contact.whatsappLabel}
                </label>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                  placeholder={t.contact.whatsappPlaceholder}
                  className={inputCls("whatsapp")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  {t.contact.projectTypeLabel} <span className="text-red-400">*</span>
                </label>
                <select
                  value={form.projectType}
                  onChange={set("projectType")}
                  className={inputCls("projectType")}
                >
                  <option value="" disabled>{t.contact.projectTypePlaceholder}</option>
                  {t.contact.projectTypes.map((opt) => (
                    <option key={opt} value={opt} className="bg-background">{opt}</option>
                  ))}
                </select>
                {errors.projectType && <p className="text-xs text-red-400 mt-1">{errors.projectType}</p>}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground/80">
                {t.contact.descLabel} <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.description}
                onChange={set("description")}
                placeholder={t.contact.descPlaceholder}
                rows={4}
                className={`${inputCls("description")} resize-none`}
              />
              {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
            </div>

            {/* Row: Budget + Start Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  {t.contact.budgetLabel}
                </label>
                <select
                  value={form.budget}
                  onChange={set("budget")}
                  className={inputCls("budget")}
                >
                  <option value="" disabled>{t.contact.budgetPlaceholder}</option>
                  {t.contact.budgets.map((opt) => (
                    <option key={opt} value={opt} className="bg-background">{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground/80">
                  {t.contact.startTimeLabel}
                </label>
                <select
                  value={form.startTime}
                  onChange={set("startTime")}
                  className={inputCls("startTime")}
                >
                  <option value="" disabled>{t.contact.startTimePlaceholder}</option>
                  {t.contact.startTimes.map((opt) => (
                    <option key={opt} value={opt} className="bg-background">{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base mt-2 w-full"
            >
              {status === "loading" ? t.contact.loadingBtn : t.contact.submitBtn}
            </Button>

            {/* Direct contact links */}
            <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
              <span className="text-xs text-muted-foreground">{t.contact.directContact}</span>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t.contact.whatsappBtn}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                {t.contact.linkedinBtn}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {t.contact.emailBtn}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
