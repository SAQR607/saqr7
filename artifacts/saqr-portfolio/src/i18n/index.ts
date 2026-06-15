import { useState, useEffect, useContext, createContext } from "react";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      projects: "المشاريع",
      about: "عن صقر",
      contact: "تواصل معي",
      hireMe: "ابدأ مشروعك",
    },
    hero: {
      name: "إبراهيم أحمد",
      badge: "متاح لمشاريع جديدة",
      headline: "مواقع تُحوّل الزوار.\nأنظمة تُنجز العمل.",
      title: "مطوّر ويب ومهندس أتمتة",
      valueProposition:
        "نصمم ونطوّر مواقع ويب احترافية وأنظمة أتمتة مخصصة — تحل مشاكل حقيقية، وتحقق نتائج قابلة للقياس، بلا تعقيد.",
      primaryCta: "ابدأ مشروعك",
      secondaryCta: "عرض المشاريع",
    },
    stats: {
      projects: "مشروع منجز",
      satisfaction: "رضا العملاء",
      timeSaved: "تقليل الوقت اليدوي",
      uptime: "استمرارية التشغيل",
    },
    about: {
      heading: "عن صقر",
      paragraph:
        "أنا مطوّر ويب ومهندس أتمتة أؤمن بأن التكنولوجيا يجب أن تحل مشاكل حقيقية لا أن تضيف تعقيداً جديداً. أبني أنظمة تعمل بشكل موثوق، مواقع تُحوّل الزوار إلى عملاء، وأنظمة أتمتة تستعيد لفريقك ساعات العمل اليومية.",
      cards: {
        builder: { title: "بناء الأنظمة", desc: "هندسة برمجية نظيفة قابلة للتوسع والصيانة." },
        automation: { title: "أتمتة العمليات", desc: "تحويل المهام اليدوية إلى أنظمة تلقائية بالبايثون." },
        results: { title: "نتائج قابلة للقياس", desc: "كل مشروع له أهداف محددة وأرقام واضحة." },
        partner: { title: "شراكة حقيقية", desc: "حلول مستدامة لا تنتهي بتسليم المشروع." },
      },
    },
    services: {
      heading: "ماذا نبني لك",
      subheading:
        "من الصفحة البسيطة إلى المنصة المتكاملة — كل خدمة مصممة لحل مشكلة تجارية حقيقية.",
      items: [
        {
          title: "تطوير المواقع",
          desc: "مواقع سريعة وجاهزة للنشر على الإنترنت.",
          list: ["React / Next.js / Flask", "واجهات سريعة ومتجاوبة", "تكاملات API وقواعد البيانات"],
        },
        {
          title: "أنظمة الأتمتة",
          desc: "نُحوّل المهام المتكررة إلى أنظمة تلقائية.",
          list: ["سكريبتات Python المتقدمة", "جدولة العمليات", "ربط الأدوات والمنصات"],
        },
        {
          title: "لوحات التحكم",
          desc: "رؤية كاملة لعملياتك في مكان واحد.",
          list: ["لوحات بيانات مخصصة", "تقارير في الوقت الفعلي", "إدارة المستخدمين والصلاحيات"],
        },
        {
          title: "صفحات الهبوط",
          desc: "صفحات محسّنة لتحويل الزوار إلى عملاء.",
          list: ["تصميم يركز على التحويل", "تحميل فائق السرعة", "متوافقة مع محركات البحث"],
        },
        {
          title: "تكاملات API",
          desc: "ربط أنظمتك ببعضها بدون احتكاك.",
          list: ["REST و Webhook", "ربط الخدمات الخارجية", "نقل وتزامن البيانات"],
        },
        {
          title: "الأداء وتجربة المستخدم",
          desc: "تحسين مواقعك القائمة بشكل ملموس.",
          list: ["تحسين سرعة التحميل", "مراجعة UX وتجربة المستخدم", "تحليل وإصلاح نقاط الاختناق"],
        },
      ],
    },
    problems: {
      heading: "هل تواجه هذه المشاكل؟",
      subheading: "معظم الشركات لديها نفس التحديات. لدينا أنظمة جاهزة لحلها.",
      items: [
        {
          problem: "فريقك يضيع ساعات في مهام يدوية متكررة كل يوم",
          solution: "نبني أنظمة أتمتة تُنجز هذه المهام تلقائياً — بدون أخطاء، بدون توقف.",
        },
        {
          problem: "موقعك لا يُحوّل الزوار إلى عملاء",
          solution: "نعيد هيكلة الموقع وصفحات الهبوط لتحسين معدلات التحويل بشكل مباشر.",
        },
        {
          problem: "بياناتك موزعة في أدوات مختلفة ولا توجد رؤية واضحة",
          solution: "نبني لوحة تحكم مركزية تجمع كل المؤشرات في مكان واحد.",
        },
        {
          problem: "المشاريع تُسلَّم بدون توثيق أو نظام واضح للصيانة",
          solution: "كل ما نسلّمه موثق ومنظم بحيث يمكنك الاعتماد عليه لسنوات.",
        },
      ],
    },
    projects: {
      heading: "حالات دراسية",
      subheading: "مشاريع حقيقية. مشاكل حقيقية. نتائج قابلة للقياس.",
      labels: { problem: "المشكلة", solution: "الحل", result: "النتيجة" },
      items: [
        {
          title: "منظومة أتمتة تقارير المبيعات",
          badge: "أتمتة",
          problem: "فريق يُمضي 3+ ساعات يومياً في إدخال البيانات وتجميع التقارير يدوياً.",
          solution: "سكريبت Python يجمع البيانات تلقائياً ويولّد التقارير ويُرسلها بجدولة مضبوطة.",
          result: "توفير 3 ساعات يومياً، تقليل الأخطاء إلى الصفر، تقرير جاهز كل صباح.",
        },
        {
          title: "تطبيق ويب لإدارة العمليات",
          badge: "تطوير ويب",
          problem: "عمليات تجارية معقدة تُدار عبر جداول بيانات وواتساب — بلا نظام واضح.",
          solution: "تطبيق ويب بـ Flask + قاعدة بيانات مع لوحة تحكم ونظام صلاحيات كامل.",
          result: "عمليات موحدة، تتبع فوري للطلبات، وانتهاء نهائي للفوضى الرقمية.",
        },
        {
          title: "بنية تحتية موثوقة لمنصة SaaS",
          badge: "بنية تحتية",
          problem: "أعطال متكررة وعدم استقرار في خوادم منصة تعليمية بحجم آلاف المستخدمين.",
          solution: "إعادة هيكلة البنية التحتية، إضافة نظام مراقبة وتنبيهات فورية.",
          result: "99.8% uptime خلال شهرين متواصلين، صفر أعطال غير مخطط لها.",
        },
      ],
    },
    testimonials: {
      heading: "ماذا يقول العملاء",
      items: [
        {
          name: "أحمد المنصوري",
          role: "مدير عمليات — شركة لوجستية",
          avatar: "أ",
          text: "صقر طوّر لنا سكريبت Python أزال تقريباً كل الإدخال اليدوي في نظام التقارير. وفّرنا 3 ساعات يومياً بشكل حرفي من اليوم الأول.",
        },
        {
          name: "نورة الشمري",
          role: "مؤسسة — منصة تعليمية",
          avatar: "ن",
          text: "كنا نعاني من أعطال متكررة في السيرفرات. بعد تدخّله ظبط البنية التحتية بالكامل ووضع نظام مراقبة. من شهرين ما صحّينا على مشكلة.",
        },
        {
          name: "خالد العتيبي",
          role: "صاحب مشروع — تجارة إلكترونية",
          avatar: "خ",
          text: "طلبت صفحة هبوط تبيع فعلاً لا مجرد تبدو جميلة. الصفحة اللي سلّمها رفعت معدل التحويل بشكل ملحوظ خلال الأسبوع الأول.",
        },
        {
          name: "سارة القحطاني",
          role: "مديرة مشاريع — وكالة رقمية",
          avatar: "س",
          text: "طلبنا موقع ديناميكي بـ Flask في وقت ضيق. سلّم بنية نظيفة، API واضح، وتوثيق كامل. ما احتجنا ندور على أحد ثاني لنكمل عليه.",
        },
      ],
    },
    faq: {
      heading: "أسئلة شائعة",
      items: [
        {
          q: "كم يستغرق تسليم المشروع؟",
          a: "يعتمد على حجم المشروع. صفحة هبوط: 3–7 أيام. تطبيق ويب متكامل: 3–8 أسابيع. نحدد الجدول الزمني بالتفصيل قبل البدء.",
        },
        {
          q: "ما هو أسلوب العمل معك؟",
          a: "نبدأ بجلسة تحليل متطلبات مجانية، ثم تصميم ومراجعة، ثم تطوير وتسليم. أنت مطّلع على التقدم في كل مرحلة بلا مفاجآت.",
        },
        {
          q: "هل تقدم دعماً وصيانة بعد التسليم؟",
          a: "نعم. كل مشروع يشمل فترة دعم مجانية للتأكد من الاستقرار. يمكن الاتفاق على صيانة دورية مستمرة حسب الاحتياج.",
        },
        {
          q: "كيف تُحدَّد تكلفة المشروع؟",
          a: "التكلفة تتحدد بعد فهم المتطلبات بالتفصيل. نوفر عرضاً مفصلاً ومجانياً يشمل النطاق والتكلفة والجدول الزمني — بلا أرقام مبهمة.",
        },
        {
          q: "هل تعمل مع العملاء خارج المنطقة؟",
          a: "نعم. نعمل عن بُعد مع عملاء في السعودية ومصر والإمارات وغيرها. التواصل يتم عبر الواتساب أو اجتماعات الفيديو حسب تفضيلك.",
        },
      ],
    },
    contact: {
      heading: "ابدأ مشروعك اليوم",
      subheading: "أخبرنا بمشكلتك — سنقترح الحل المناسب خلال 24 ساعة.",
      whatsappBtn: "واتساب",
      linkedinBtn: "لينكدإن",
      emailBtn: "البريد الإلكتروني",
      emailCopied: "تم النسخ!",
    },
    footer: {
      copyright: "جميع الحقوق محفوظة",
      supportLabel: "دعم فني ؟",
      supportLink: "تواصل عبر البريد",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      hireMe: "Start a Project",
    },
    hero: {
      name: "Ibrahim Ahmed",
      badge: "Open for new projects",
      headline: "Websites That Convert.\nSystems That Scale.",
      title: "Web Developer & Automation Engineer",
      valueProposition:
        "We design and build professional websites and custom automation systems — solving real business problems and delivering measurable results, without the complexity.",
      primaryCta: "Start a Project",
      secondaryCta: "View Projects",
    },
    stats: {
      projects: "Projects Delivered",
      satisfaction: "Client Satisfaction",
      timeSaved: "Manual Work Reduced",
      uptime: "System Uptime",
    },
    about: {
      heading: "About Saqr",
      paragraph:
        "I'm a web developer and automation engineer who believes technology should simplify work, not add complexity. I build systems that run reliably, websites that convert visitors into customers, and automation tools that give your team back hours of their day.",
      cards: {
        builder: { title: "Systems Builder", desc: "Clean, scalable architecture built to last." },
        automation: { title: "Automation First", desc: "Turning manual tasks into automatic systems with Python." },
        results: { title: "Measurable Results", desc: "Every project has defined goals and clear numbers." },
        partner: { title: "Real Partnership", desc: "Sustainable solutions — not just code delivered and forgotten." },
      },
    },
    services: {
      heading: "What We Build",
      subheading:
        "From a simple landing page to a full-stack platform — every service is designed to solve a real business problem.",
      items: [
        {
          title: "Web Development",
          desc: "Fast, production-ready websites and web apps.",
          list: ["React / Next.js / Flask", "Responsive, performant UI", "API & database integrations"],
        },
        {
          title: "Automation Systems",
          desc: "Turn repetitive tasks into automated workflows.",
          list: ["Advanced Python scripts", "Scheduled job pipelines", "Cross-tool integrations"],
        },
        {
          title: "Dashboards & Admin Panels",
          desc: "Full visibility into your operations in one place.",
          list: ["Custom data dashboards", "Real-time reporting", "User & permission management"],
        },
        {
          title: "Landing Pages",
          desc: "Pages engineered to convert visitors into clients.",
          list: ["Conversion-focused design", "Ultra-fast load times", "SEO-ready structure"],
        },
        {
          title: "API Integrations",
          desc: "Connect your systems without friction.",
          list: ["REST & Webhook support", "Third-party service linking", "Data sync & migration"],
        },
        {
          title: "Performance & UX",
          desc: "Improve your existing site — measurably.",
          list: ["Load speed optimization", "UX audit & redesign", "Bottleneck analysis & fixes"],
        },
      ],
    },
    problems: {
      heading: "Do These Sound Familiar?",
      subheading: "Most businesses face the same challenges. We have systems built to fix them.",
      items: [
        {
          problem: "Your team spends hours on manual, repetitive tasks every single day",
          solution: "We build automation systems that handle those tasks automatically — no errors, no delays.",
        },
        {
          problem: "Your website looks good but doesn't convert visitors into paying customers",
          solution: "We restructure your site and landing pages to directly improve conversion rates.",
        },
        {
          problem: "Your data is scattered across tools and there's no clear picture",
          solution: "We build a centralized dashboard that pulls everything into one clean view.",
        },
        {
          problem: "Projects get delivered without documentation or a clear maintenance plan",
          solution: "Everything we ship is fully documented and structured so you can rely on it for years.",
        },
      ],
    },
    projects: {
      heading: "Case Studies",
      subheading: "Real projects. Real problems. Measurable results.",
      labels: { problem: "Problem", solution: "Solution", result: "Result" },
      items: [
        {
          title: "Sales Reporting Automation",
          badge: "Automation",
          problem: "A team spending 3+ hours daily manually compiling and sending sales reports.",
          solution: "Python script that pulls data, generates reports, and delivers them on a scheduled pipeline.",
          result: "3 hours saved daily, zero reporting errors, report ready every morning automatically.",
        },
        {
          title: "Operations Management Web App",
          badge: "Web Dev",
          problem: "Complex business operations managed through spreadsheets and WhatsApp — no system.",
          solution: "Flask web app with database, control panel, and full user permission system.",
          result: "Unified operations, instant order tracking, and an end to digital chaos.",
        },
        {
          title: "SaaS Platform Infrastructure",
          badge: "Infrastructure",
          problem: "Recurring crashes and instability on an educational platform serving thousands of users.",
          solution: "Full infrastructure restructuring, monitoring system, and real-time alerting.",
          result: "99.8% uptime over two consecutive months. Zero unplanned outages.",
        },
      ],
    },
    testimonials: {
      heading: "Client Feedback",
      items: [
        {
          name: "Ahmed Al-Mansouri",
          role: "Operations Manager — Logistics Company",
          avatar: "A",
          text: "Saqr built a Python script that nearly eliminated all manual data entry in our reporting system. We saved 3 hours a day, literally from day one.",
        },
        {
          name: "Noura Al-Shamri",
          role: "Founder — EdTech Platform",
          avatar: "N",
          text: "We had recurring server crashes we couldn't diagnose. He restructured the infrastructure and set up monitoring. Two months in — not a single unplanned outage.",
        },
        {
          name: "Khalid Al-Otaibi",
          role: "Business Owner — E-commerce",
          avatar: "K",
          text: "I needed a landing page that actually sells, not just looks good. The page he delivered lifted our conversion rate noticeably in the first week.",
        },
        {
          name: "Sarah Al-Qahtani",
          role: "Project Manager — Digital Agency",
          avatar: "S",
          text: "We needed a Flask app delivered fast. He shipped clean architecture, a well-documented API, and a handover guide. No one else needed to touch it after.",
        },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "How long does a project take?",
          a: "Depends on scope. A landing page: 3–7 days. A full web app: 3–8 weeks. We define the timeline in detail before starting — no surprises.",
        },
        {
          q: "What does the process look like?",
          a: "We start with a free requirements session, then design and review, then development and delivery. You're updated at every stage with no ambiguity.",
        },
        {
          q: "Do you offer support and maintenance after delivery?",
          a: "Yes. Every project includes a free post-delivery support period. Ongoing maintenance can be arranged based on your needs.",
        },
        {
          q: "How is project cost determined?",
          a: "Cost is determined after fully understanding your requirements. We provide a free, detailed proposal covering scope, cost, and timeline — no vague numbers.",
        },
        {
          q: "Do you work with clients outside the region?",
          a: "Yes. We work remotely with clients across the GCC and beyond. Communication is via WhatsApp or video calls — whatever works best for you.",
        },
      ],
    },
    contact: {
      heading: "Start Your Project Today",
      subheading: "Tell us your problem — we'll propose the right solution within 24 hours.",
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
