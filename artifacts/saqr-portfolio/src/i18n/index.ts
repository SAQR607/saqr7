import { useState, useEffect, useContext, createContext } from "react";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن صقر",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل معي",
      hireMe: "وظفني",
    },
    hero: {
      name: "إبراهيم أحمد",
      title: "أخصائي دعم فني | خبير أتمتة | مدرب تقني",
      valueProposition: "أساعد الشركات على تقليل وقت التوقف، أتمتة سير العمل، والتوسع بكفاءة.",
      hireMeBtn: "وظفني الآن",
      contactBtn: "تواصل معي",
    },
    stats: {
      students: "طالب",
      satisfaction: "رضا العملاء",
      downtime: "تقليل التوقف",
      responseSpeed: "سرعة الاستجابة",
      adsPerformance: "أداء الإعلانات",
    },
    about: {
      heading: "عن صقر",
      paragraph: "أنا صقر، أؤمن بأن التكنولوجيا يجب أن تحل المشاكل وليس أن تخلقها. بعقلية الأتمتة، أبحث دائماً عن طرق لتقليل الجهد اليدوي وتوفير الوقت والمال. خبرتي كمستقل ومدرب تتيح لي تقديم حلول تقنية متكاملة ومشاركة المعرفة بكفاءة.",
      cards: {
        problemSolving: { title: "حل المشكلات", desc: "تحديد الجذور وتقديم حلول مستدامة." },
        automationThinking: { title: "عقلية الأتمتة", desc: "بناء سكريبتات بايثون لتسريع المهام." },
        trainer: { title: "مدرب وموجه", desc: "نقل الخبرة العملية لآلاف الطلاب." },
        freelancer: { title: "عمل حر", desc: "خبرة في التعامل مع متطلبات السوق." }
      }
    },
    services: {
      heading: "خدماتي",
      it: {
        title: "الدعم الفني (IT Support)",
        items: ["دعم فني عن بعد", "إدارة الشبكات والأنظمة", "تقليل وقت التوقف"]
      },
      automation: {
        title: "الأتمتة (Python)",
        items: ["سكريبتات بايثون", "أتمتة سير العمل", "توفير الوقت والتكلفة"]
      },
      training: {
        title: "التدريب التقني",
        items: ["جلسات مباشرة", "توجيه مهني", "تعليم عملي تطبيقي"]
      }
    },
    skills: {
      heading: "المهارات التقنية",
    },
    projects: {
      heading: "أبرز المشاريع",
      items: [
        { title: "سكريبتات الأتمتة", description: "تقليل العمل اليدوي بنسبة 25٪ باستخدام بايثون." },
        { title: "تحسين إعلانات جوجل", description: "تحسين معدل النقر: 2.1٪ → 4.7٪، تقليل التكلفة بنسبة 32٪." },
        { title: "إدارة البنية التحتية", description: "إدارة وصيانة أنظمة لعدة عملاء بشكل مستقر وآمن." }
      ]
    },
    testimonials: {
      heading: "ماذا يقول العملاء",
      placeholder: {
        name: "عميل",
        role: "مدير تقني",
        text: "صقر حول طريقة عملنا. حلول الأتمتة التي قدمها وفرت لنا ساعات من العمل اليومي."
      }
    },
    contact: {
      heading: "جاهز للعمل معاً؟",
      whatsappBtn: "واتساب",
      telegramBtn: "تيليجرام",
      emailBtn: "البريد الإلكتروني",
      emailCopied: "تم النسخ!",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة",
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      name: "Ibrahim Ahmed",
      title: "IT Support Specialist | Automation Expert | Tech Instructor",
      valueProposition: "I help businesses reduce downtime, automate workflows, and scale efficiently.",
      hireMeBtn: "Hire Me",
      contactBtn: "Contact Me",
    },
    stats: {
      students: "Students",
      satisfaction: "Client Satisfaction",
      downtime: "Downtime Reduction",
      responseSpeed: "Response Speed",
      adsPerformance: "Ads Performance",
    },
    about: {
      heading: "About Saqr",
      paragraph: "I'm a problem solver with an automation mindset. I believe technology should simplify work, not complicate it. Through Python and system administration, I find ways to eliminate manual effort. As a freelancer and mentor, I deliver solutions and share practical knowledge.",
      cards: {
        problemSolving: { title: "Problem Solving", desc: "Identifying roots and delivering sustainable solutions." },
        automationThinking: { title: "Automation Mindset", desc: "Building Python scripts to accelerate tasks." },
        trainer: { title: "Trainer & Mentor", desc: "Transferring practical experience to thousands." },
        freelancer: { title: "Freelancer", desc: "Market-ready expertise and adaptable execution." }
      }
    },
    services: {
      heading: "Services",
      it: {
        title: "IT Support",
        items: ["Remote support", "Network & systems", "Reduce downtime"]
      },
      automation: {
        title: "Automation (Python)",
        items: ["Python scripts", "Workflow automation", "Save time & cost"]
      },
      training: {
        title: "Tech Training",
        items: ["Live sessions", "Mentorship", "Practical teaching"]
      }
    },
    skills: {
      heading: "Technical Skills",
    },
    projects: {
      heading: "Featured Projects",
      items: [
        { title: "Automation Scripts", description: "Reduced manual work by 25%." },
        { title: "Google Ads Optimization", description: "CTR: 2.1% → 4.7%, CPA reduced by 32%." },
        { title: "IT Infrastructure Management", description: "Managed multi-client systems stably and securely." }
      ]
    },
    testimonials: {
      heading: "Client Feedback",
      placeholder: {
        name: "Client",
        role: "Technical Director",
        text: "Saqr transformed how we operate. His automation solutions saved us countless hours of daily manual work."
      }
    },
    contact: {
      heading: "Ready to work together?",
      whatsappBtn: "WhatsApp",
      telegramBtn: "Telegram",
      emailBtn: "Email",
      emailCopied: "Copied!",
    },
    footer: {
      copyright: "All rights reserved",
    }
  }
};

export type Language = "ar" | "en";
export type Translations = typeof translations.ar;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageState() {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = translations[lang];

  return { lang, setLang, t };
}
