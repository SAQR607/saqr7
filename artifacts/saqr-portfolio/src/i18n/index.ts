import { useState, useEffect, useContext, createContext } from "react";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتي",
      projects: "مشاريعي",
      contact: "تواصل معي",
      hireMe: "ابدأ مشروعك",
    },
    hero: {
      name: "إبراهيم أحمد",
      badge: "متاح لمشاريع جديدة",
      headline: "أحوّل أفكارك إلى تطبيقات\nوأنظمة تعمل بشكل تلقائي",
      title: "مطوّر تطبيقات وأتمتة",
      valueProposition:
        "أبني لك الحلول التقنية التي توفر وقتك وترفع كفاءتك — من تطبيقات الويب إلى أنظمة الأتمتة المتكاملة.",
      primaryCta: "ابدأ مشروعك",
      secondaryCta: "عرض مشاريعي",
    },
    stats: {
      heading: "أرقام تتحدث",
      projects: "مشروع منجز",
      clients: "عميل",
      experience: "سنوات خبرة",
      onTime: "التزام بالمواعيد",
    },
    services: {
      heading: "خدماتي",
      subheading: "أتخصص في مجالين أتقنهما بعمق — التطوير والأتمتة.",
      app: {
        icon: "📱",
        title: "تطوير التطبيقات",
        desc: "أبني تطبيقات ويب احترافية مخصصة لعملك — من لوحات التحكم إلى المتاجر والمنصات الكاملة.",
        stack: "Python · Django · FastAPI · React · Vue",
        cta: "اطلب تطبيقك",
      },
      bot: {
        icon: "🤖",
        title: "الأتمتة والبوتات",
        desc: "أحوّل المهام المتكررة إلى عمليات تلقائية — بوتات تلجرام، سكريبتات، وتكامل أنظمة.",
        stack: "Python · Telegram Bot API · Selenium · APIs",
        cta: "اطلب نظام أتمتة",
      },
    },
    projects: {
      heading: "مشاريعي",
      subheading: "مشاريع حقيقية نفّذتها لعملاء حقيقيين.",
      filterAll: "الكل",
      filterAppDev: "تطوير تطبيقات",
      filterAutomation: "أتمتة",
      viewBtn: "عرض المشروع",
      items: [
        {
          title: "تطبيق إدارة المخزون",
          titleEn: "Inventory Management App",
          description:
            "بنيت تطبيق ويب متكامل لمتجر بيع بالتجزئة لتتبع المخزون في الوقت الفعلي، مع تنبيهات تلقائية عند انخفاض المخزون وتقارير شهرية — بديلاً كاملاً عن ملفات Excel.",
          tags: ["Python", "Django", "PostgreSQL", "React", "REST API"],
          category: "appDev",
        },
        {
          title: "بوت تلجرام لإدارة الطلبات",
          titleEn: "Telegram Order Management Bot",
          description:
            "طوّرت بوت تلجرام لمطعم يستقبل الطلبات، يُنبّه الفريق، يتتبع الحالة، ويرسل تحديثات التوصيل للعملاء تلقائياً — يعالج أكثر من 200 طلب يومياً.",
          tags: ["Python", "Telegram Bot API", "SQLite", "Async"],
          category: "automation",
        },
        {
          title: "تطبيق حجز مواعيد مع لوحة تحكم",
          titleEn: "Appointment Booking App + Dashboard",
          description:
            "بنيت تطبيق ويب لعيادة يتيح للمرضى الحجز أونلاين، مع لوحة تحكم إدارية تعرض الجداول اليومية وتاريخ المرضى وتذكيرات SMS.",
          tags: ["Python", "FastAPI", "Vue.js", "Twilio SMS", "MySQL"],
          category: "appDev",
        },
        {
          title: "نظام أتمتة التقارير الأسبوعية",
          titleEn: "Weekly Reports Automation System",
          description:
            "أتمتة توليد وإرسال تقارير الأداء الأسبوعية لشركة لوجستية — يسحب البيانات من 3 مصادر، يولّد ملفات PDF/Excel بالهوية البصرية، ويرسلها كل أحد الساعة 8 صباحاً.",
          tags: ["Python", "Pandas", "OpenPyXL", "ReportLab", "SMTP", "Cron"],
          category: "automation",
        },
        {
          title: "تطبيق تتبع مصاريف الفريق",
          titleEn: "Team Expense Tracker App",
          description:
            "طوّرت تطبيق ويب لشركة ناشئة لتسجيل ومراجعة مصاريف الفريق مع صلاحيات متعددة (موظف / مدير / CFO) وتصدير شهري إلى Excel.",
          tags: ["Python", "Flask", "Bootstrap", "Chart.js", "SQLAlchemy"],
          category: "appDev",
        },
        {
          title: "سكريبت أتمتة سوشيال ميديا",
          titleEn: "Social Media Automation Script",
          description:
            "بنيت أداة Python تجدول وتنشر المحتوى على انستجرام وتويتر/X من ملف Excel بسيط، مع تغيير أحجام الصور وتنسيق التسميات التوضيحية تلقائياً.",
          tags: ["Python", "Selenium", "Instagrapi", "Tweepy", "Pillow"],
          category: "automation",
        },
      ],
    },
    testimonials: {
      heading: "ماذا يقول العملاء",
      items: [
        {
          name: "محمد الغامدي",
          role: "صاحب مطعم — الرياض",
          avatar: "م",
          text: "الحل اللي بناه صقر لإدارة الطلبات على تلجرام غيّر شكل شغلنا كلياً. كنا نتلقى الطلبات يدوياً وكانت تضيع وتتداخل — الحين الطلب يوصل وينتهي تلقائياً. وفّر علينا وقت وأخطاء ما تحتسب.",
        },
        {
          name: "ريم العمري",
          role: "مديرة عيادة أسنان — جدة",
          avatar: "ر",
          text: "قبل التطبيق كنا نعتمد على الهاتف والدفتر وكانت الأغلاط تسبب إحراجات مع المرضى. الحين عندنا نظام واضح، التذكيرات تنزل تلقائياً، واللوحة تعطيني صورة كاملة عن اليوم من أول دقيقة.",
        },
        {
          name: "سعد الحربي",
          role: "مدير عمليات — شركة لوجستية",
          avatar: "س",
          text: "الموظف اللي كان يصرف يومه في تجميع التقارير الأسبوعية انصرف لشغل أهم. صقر بنى نظام يجمع البيانات من أنظمتنا الثلاثة، يولّد التقرير PDF، ويرسله كل أحد الساعة 8. دقيق وما يخطئ.",
        },
      ],
    },
    contact: {
      heading: "تواصل معي",
      subheading: "أخبرني بمشروعك وسأرد عليك خلال 24 ساعة.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك الكامل",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "example@email.com",
      whatsappLabel: "رقم الواتساب (اختياري)",
      whatsappPlaceholder: "+966 5X XXX XXXX",
      projectTypeLabel: "نوع المشروع",
      projectTypePlaceholder: "اختر نوع المشروع...",
      projectTypes: [
        "📱 تطوير تطبيق ويب",
        "🤖 أتمتة وسكريبتات",
        "🛒 متجر إلكتروني",
        "🤖 بوت تلجرام أو واتساب",
        "📊 تحليل بيانات وتقارير تلقائية",
        "🔗 تكامل API وربط أنظمة",
        "💡 استشارة تقنية",
        "🔄 أخرى",
      ],
      descLabel: "وصف المشروع",
      descPlaceholder: "اشرح مشروعك باختصار — ما المشكلة التي تريد حلها، وما الذي تتوقع الحصول عليه؟",
      budgetLabel: "الميزانية التقريبية (اختياري)",
      budgetPlaceholder: "اختر الميزانية...",
      budgets: [
        "أفضل عدم ذكر الميزانية",
        "أقل من 500 ريال",
        "500 – 1,500 ريال",
        "1,500 – 5,000 ريال",
        "5,000 – 15,000 ريال",
        "أكثر من 15,000 ريال",
      ],
      startTimeLabel: "متى تريد البدء؟ (اختياري)",
      startTimePlaceholder: "اختر...",
      startTimes: ["في أقرب وقت", "خلال أسبوعين", "الشهر القادم", "لم أحدد بعد"],
      submitBtn: "إرسال الطلب",
      loadingBtn: "جاري الإرسال...",
      successMsg: "✅ تم الإرسال! سأتواصل معك خلال 24 ساعة.",
      errorMsg: "❌ حدث خطأ، حاول مرة أخرى أو تواصل عبر واتساب.",
      requiredError: "هذا الحقل مطلوب",
      emailError: "البريد الإلكتروني غير صحيح",
      directContact: "أو تواصل مباشرة:",
      whatsappBtn: "واتساب",
      linkedinBtn: "لينكدإن",
      emailBtn: "البريد الإلكتروني",
      emailCopied: "تم النسخ!",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة",
      supportLabel: "دعم فني؟",
      supportLink: "تواصل عبر البريد",
    },
    // Stubs for unused sections (kept for TypeScript compatibility)
    about: {
      heading: "عن صقر",
      paragraph: "",
      cards: {
        builder: { title: "", desc: "" },
        automation: { title: "", desc: "" },
        results: { title: "", desc: "" },
        partner: { title: "", desc: "" },
      },
    },
    skills: { heading: "المهارات" },
    problems: {
      heading: "",
      subheading: "",
      items: [] as Array<{ problem: string; solution: string }>,
    },
    faq: {
      heading: "",
      items: [] as Array<{ q: string; a: string }>,
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Start a Project",
    },
    hero: {
      name: "Ibrahim Ahmed",
      badge: "Open for new projects",
      headline: "I Turn Your Ideas Into Apps\nand Automated Systems",
      title: "App Developer & Automation Engineer",
      valueProposition:
        "I build technical solutions that save your time and boost your efficiency — from web apps to full automation systems.",
      primaryCta: "Start a Project",
      secondaryCta: "View Projects",
    },
    stats: {
      heading: "Numbers That Speak",
      projects: "Projects Delivered",
      clients: "Clients",
      experience: "Years Experience",
      onTime: "On-time Delivery",
    },
    services: {
      heading: "Services",
      subheading: "Two focused specializations — done deeply, not broadly.",
      app: {
        icon: "📱",
        title: "App Development",
        desc: "I build professional, custom web applications for your business — from dashboards to full e-commerce platforms.",
        stack: "Python · Django · FastAPI · React · Vue",
        cta: "Request an App",
      },
      bot: {
        icon: "🤖",
        title: "Automation & Bots",
        desc: "I turn repetitive tasks into automated systems — Telegram bots, scripts, and API integrations.",
        stack: "Python · Telegram Bot API · Selenium · APIs",
        cta: "Request Automation",
      },
    },
    projects: {
      heading: "Projects",
      subheading: "Real projects, delivered for real clients.",
      filterAll: "All",
      filterAppDev: "App Development",
      filterAutomation: "Automation",
      viewBtn: "View Project",
      items: [
        {
          title: "Inventory Management App",
          titleEn: "Inventory Management App",
          description:
            "Built a full-stack web app for a retail store to track stock in real time, auto-generate low-stock alerts, and produce monthly reports — fully replacing their Excel process.",
          tags: ["Python", "Django", "PostgreSQL", "React", "REST API"],
          category: "appDev",
        },
        {
          title: "Telegram Order Management Bot",
          titleEn: "Telegram Order Management Bot",
          description:
            "Developed a Telegram bot for a food business that receives orders, notifies the team, tracks status, and sends automated delivery updates — handling 200+ orders/day.",
          tags: ["Python", "Telegram Bot API", "SQLite", "Async"],
          category: "automation",
        },
        {
          title: "Appointment Booking App + Dashboard",
          titleEn: "Appointment Booking App + Dashboard",
          description:
            "Built a web app for a clinic allowing patients to book online, with a full admin dashboard showing daily schedules, patient history, and SMS reminders.",
          tags: ["Python", "FastAPI", "Vue.js", "Twilio SMS", "MySQL"],
          category: "appDev",
        },
        {
          title: "Weekly Reports Automation System",
          titleEn: "Weekly Reports Automation System",
          description:
            "Automated weekly performance report generation for a logistics company — pulling from 3 data sources, generating branded PDF/Excel, emailing every Sunday at 8 AM.",
          tags: ["Python", "Pandas", "OpenPyXL", "ReportLab", "SMTP", "Cron"],
          category: "automation",
        },
        {
          title: "Team Expense Tracker App",
          titleEn: "Team Expense Tracker App",
          description:
            "Developed a mobile-friendly web app for a startup to log, categorize, and approve team expenses with role-based access (employee / manager / CFO) and monthly Excel export.",
          tags: ["Python", "Flask", "Bootstrap", "Chart.js", "SQLAlchemy"],
          category: "appDev",
        },
        {
          title: "Social Media Automation Script",
          titleEn: "Social Media Automation Script",
          description:
            "Built a Python tool that schedules and publishes posts to Instagram and Twitter/X from a simple Excel sheet, with auto-resizing images and caption formatting.",
          tags: ["Python", "Selenium", "Instagrapi", "Tweepy", "Pillow"],
          category: "automation",
        },
      ],
    },
    testimonials: {
      heading: "Client Feedback",
      items: [
        {
          name: "Mohammed Al-Ghamdi",
          role: "Restaurant Owner — Riyadh",
          avatar: "M",
          text: "The Telegram order management system Saqr built completely changed how we operate. Orders used to get lost or overlap — now everything runs automatically. Saved us countless hours and errors.",
        },
        {
          name: "Reem Al-Omari",
          role: "Dental Clinic Manager — Jeddah",
          avatar: "R",
          text: "Before the app we relied on phone calls and a paper book — mistakes caused embarrassing situations with patients. Now we have a clear booking system, automatic reminders, and a full daily overview from the first minute.",
        },
        {
          name: "Saad Al-Harbi",
          role: "Operations Manager — Logistics Company",
          avatar: "S",
          text: "The employee who used to spend his whole day compiling weekly reports now focuses on real work. Saqr built a system that pulls data from our three sources, generates a branded PDF, and sends it every Sunday at 8 AM. Accurate every time.",
        },
      ],
    },
    contact: {
      heading: "Contact Me",
      subheading: "Tell me about your project and I'll reply within 24 hours.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "example@email.com",
      whatsappLabel: "WhatsApp Number (optional)",
      whatsappPlaceholder: "+966 5X XXX XXXX",
      projectTypeLabel: "Project Type",
      projectTypePlaceholder: "Select project type...",
      projectTypes: [
        "📱 Web App Development",
        "🤖 Automation & Scripts",
        "🛒 E-Commerce App",
        "🤖 Telegram / WhatsApp Bot",
        "📊 Data Analysis & Automated Reports",
        "🔗 API Integration & System Linking",
        "💡 Tech Consultation",
        "🔄 Other",
      ],
      descLabel: "Project Description",
      descPlaceholder: "Briefly describe your project — what problem do you want to solve, and what outcome do you expect?",
      budgetLabel: "Approximate Budget (optional)",
      budgetPlaceholder: "Select budget...",
      budgets: [
        "Prefer not to say",
        "Under 500 SAR",
        "500 – 1,500 SAR",
        "1,500 – 5,000 SAR",
        "5,000 – 15,000 SAR",
        "Over 15,000 SAR",
      ],
      startTimeLabel: "When do you want to start? (optional)",
      startTimePlaceholder: "Select...",
      startTimes: ["ASAP", "Within two weeks", "Next month", "Not decided yet"],
      submitBtn: "Send Request",
      loadingBtn: "Sending...",
      successMsg: "✅ Sent! I'll get back to you within 24 hours.",
      errorMsg: "❌ An error occurred. Please try again or contact me on WhatsApp.",
      requiredError: "This field is required",
      emailError: "Invalid email address",
      directContact: "Or reach me directly:",
      whatsappBtn: "WhatsApp",
      linkedinBtn: "LinkedIn",
      emailBtn: "Email",
      emailCopied: "Copied!",
    },
    footer: {
      copyright: "All rights reserved",
      supportLabel: "Need IT support?",
      supportLink: "Contact via email",
    },
    about: {
      heading: "About Saqr",
      paragraph: "",
      cards: {
        builder: { title: "", desc: "" },
        automation: { title: "", desc: "" },
        results: { title: "", desc: "" },
        partner: { title: "", desc: "" },
      },
    },
    skills: { heading: "Skills" },
    problems: {
      heading: "",
      subheading: "",
      items: [] as Array<{ problem: string; solution: string }>,
    },
    faq: {
      heading: "",
      items: [] as Array<{ q: string; a: string }>,
    },
  },
};

export type Language = "ar" | "en";
export type Translations = typeof translations.ar;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  t: translations.ar,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageState() {
  const [lang, setLangState] = useState<Language>("ar");

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
