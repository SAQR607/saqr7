import { useState, useEffect, useContext, createContext } from "react";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن صقر",
      services: "الخدمات",
      projects: "المشاريع",
      feedback: "آراء العملاء",
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
        {
          title: "منظومة الأتمتة بالبايثون",
          description: "بناء سكريبتات Python لأتمتة المهام اليومية المتكررة — تقليل العمل اليدوي بنسبة 25٪ وتوفير ساعات عمل أسبوعياً."
        },
        {
          title: "بناء مواقع ويب بالبايثون",
          description: "تطوير تطبيقات ويب ديناميكية باستخدام Flask وDjango — من قاعدة البيانات إلى الـ API إلى الواجهة، بنية نظيفة وأداء موثوق."
        },
        {
          title: "إدارة البنية التحتية",
          description: "إدارة وصيانة أنظمة متعددة لعدة عملاء بشكل مستقر وآمن — استمرارية تشغيل تفوق 99٪."
        }
      ]
    },
    testimonials: {
      heading: "ماذا يقول العملاء",
      items: [
        {
          name: "أحمد المنصوري",
          role: "مدير عمليات — شركة لوجستية",
          avatar: "أ",
          text: "صقر طوّر لنا سكريبت Python أزال تقريباً كل الإدخال اليدوي في نظام التقارير. وفّرنا 3 ساعات يومياً بشكل حرفي من اليوم الأول."
        },
        {
          name: "نورة الشمري",
          role: "مؤسسة — منصة تعليمية",
          avatar: "ن",
          text: "كنا نعاني من أعطال متكررة في السيرفرات. بعد تدخّله ظبط البنية التحتية بالكامل ووضع نظام مراقبة. من شهرين ما صحّينا على مشكلة."
        },
        {
          name: "خالد العتيبي",
          role: "طالب — برنامج تدريبي",
          avatar: "خ",
          text: "التدريب مع صقر فرّق معي كثير. أسلوبه عملي ومباشر، وما تحس إنك تحفظ بل تفهم. الأدوات اللي تعلمتها استخدمتها في أول أسبوع."
        },
        {
          name: "سارة القحطاني",
          role: "مديرة مشاريع — وكالة رقمية",
          avatar: "س",
          text: "طلبنا موقع ديناميكي بـ Flask في وقت ضيق. سلّم بنية نظيفة، API واضح، وتوثيق كامل. ما احتجنا ندور على أحد ثاني لنكمل عليه."
        }
      ]
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
      feedback: "Feedback",
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
        {
          title: "Python Automation Suite",
          description: "Built Python scripts to eliminate repetitive daily tasks — 25% less manual work, hours saved every week from day one."
        },
        {
          title: "Web Development with Python",
          description: "Full-stack web apps built with Flask & Django — from database schema to REST API to frontend. Clean architecture, production-ready deployment."
        },
        {
          title: "IT Infrastructure Management",
          description: "Managed and maintained multi-client server environments — 99%+ uptime, proactive monitoring, zero unplanned outages over two months."
        }
      ]
    },
    testimonials: {
      heading: "Client Feedback",
      items: [
        {
          name: "Ahmed Al-Mansouri",
          role: "Operations Manager — Logistics Company",
          avatar: "A",
          text: "Saqr built a Python script that nearly eliminated all manual data entry in our reporting system. We saved 3 hours a day, literally from day one."
        },
        {
          name: "Noura Al-Shamri",
          role: "Founder — EdTech Platform",
          avatar: "N",
          text: "We had recurring server crashes we couldn't diagnose. He restructured the infrastructure and set up monitoring. Two months in — not a single unplanned outage."
        },
        {
          name: "Khalid Al-Otaibi",
          role: "Student — Tech Training Program",
          avatar: "K",
          text: "Training with Saqr genuinely changed how I approach problems. No memorising — you understand. I used the tools he taught me in the first week on a real project."
        },
        {
          name: "Sarah Al-Qahtani",
          role: "Project Manager — Digital Agency",
          avatar: "S",
          text: "We needed a Flask app delivered fast. He shipped clean architecture, a well-documented API, and a handover guide. No one else needed to touch it after."
        }
      ]
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
