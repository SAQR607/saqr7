export const siteConfig = {
  whatsapp: "https://wa.me/201015671326",
  linkedin: "https://www.linkedin.com/in/ibrahim-saqr",
  email: "ibrahimsaqr607@gmail.com",
  name: { ar: "صقر", en: "SAQR" },
  realName: { ar: "إبراهيم أحمد", en: "Ibrahim Ahmed" },

  // ─── Telegram Bot (Contact Form) ───────────────────────────────────────────
  // Set these in your Vercel / Replit environment variables:
  //   VITE_TELEGRAM_BOT_TOKEN=7xxxxxxxxx:AAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //   VITE_TELEGRAM_CHAT_ID=123456789
  telegramBotToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN ?? "",
  telegramChatId: import.meta.env.VITE_TELEGRAM_CHAT_ID ?? "",
};
