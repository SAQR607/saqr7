import { useState, useEffect, useContext, createContext } from "react";

export const translations = {
  en: {
    nav: {
      home: "Home",
      expertise: "Expertise",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Work With Me",
    },
    hero: {
      badge: "Available for new projects",
      name: "Ibrahim Ahmed",
      handle: "SAQR",
      title: "Software Engineer · Automation Architect · Technical Educator",
      headline: "I build, automate,\nand teach modern software.",
      valueProposition:
        "From scalable backend systems and end-to-end workflow automation to practical technical education — I deliver complete, production-ready solutions that actually work.",
      primaryCta: "Start a Conversation",
      secondaryCta: "View Projects",
      roles: ["Software Engineer", "Automation Architect", "Backend Developer", "Technical Educator", "Python Developer"],
    },
    stats: {
      heading: "Delivered Results",
      projects: "Projects Delivered",
      clients: "Clients Served",
      experience: "Years Experience",
      onTime: "On-Time Delivery",
      students: "Students Trained",
    },
    expertise: {
      heading: "Areas of Expertise",
      subheading:
        "Four core disciplines — software development, automation, education, and consulting — built through real project experience.",
      items: [
        {
          icon: "Code2",
          title: "Software Development",
          desc: "End-to-end backend systems, full-stack applications, REST and GraphQL APIs, database architecture, and performance-optimized system design.",
          tags: ["Python", "FastAPI", "PostgreSQL", "React", "System Design"],
        },
        {
          icon: "Zap",
          title: "Workflow Automation",
          desc: "Complete end-to-end automation with n8n, Activepieces, and custom pipelines. CRM, marketing, HR, lead generation, and business process automation.",
          tags: ["n8n", "Activepieces", "API Integration", "CRM Automation", "Webhooks"],
        },
        {
          icon: "GraduationCap",
          title: "Technical Education",
          desc: "Practical courses and team training on programming, automation, and backend development. 500+ students trained with real hands-on projects — not just theory.",
          tags: ["Python", "Automation", "Backend Dev", "APIs", "Live Coaching"],
        },
        {
          icon: "Building2",
          title: "Consulting",
          desc: "Technical strategy, architecture reviews, digital transformation roadmaps, workflow optimization, and startup technical advisory.",
          tags: ["Architecture Reviews", "Digital Transformation", "Workflow Optimization", "Strategy"],
        },
      ],
    },
    services: {
      heading: "Services",
      subheading: "Premium technical services built around your actual business needs — not generic packages.",
      items: [
        {
          icon: "Layers",
          title: "Custom Software Development",
          desc: "Full-stack web applications and internal tools engineered for scale, performance, and long-term maintainability.",
          tags: ["Python", "FastAPI", "React", "PostgreSQL"],
          cta: "Discuss Your Project",
        },
        {
          icon: "GitBranch",
          title: "Workflow Automation",
          desc: "n8n, Activepieces, and custom automation pipelines that eliminate manual work and connect your entire tech stack seamlessly.",
          tags: ["n8n", "Activepieces", "APIs", "Webhooks"],
          cta: "Automate Your Workflow",
        },
        {
          icon: "Network",
          title: "API Development",
          desc: "RESTful and GraphQL APIs with authentication, rate limiting, full documentation, and security built in from day one.",
          tags: ["FastAPI", "OpenAPI", "JWT", "Redis"],
          cta: "Build Your API",
        },
        {
          icon: "GraduationCap",
          title: "Technical Training",
          desc: "Practical team training programs on programming, automation, and backend development. Hands-on with real enterprise scenarios.",
          tags: ["Python", "Automation", "Backend", "APIs"],
          cta: "Plan Your Training",
        },
        {
          icon: "Building2",
          title: "Enterprise Architecture",
          desc: "System design consulting, microservices planning, and digital transformation strategy for growing engineering teams.",
          tags: ["System Design", "Microservices", "Cloud", "Strategy"],
          cta: "Get Architecture Review",
        },
        {
          icon: "ClipboardCheck",
          title: "Technical Audits",
          desc: "Code quality audits, performance optimization, and system health reviews for existing applications before they become production problems.",
          tags: ["Code Review", "Performance", "Optimization", "Documentation"],
          cta: "Request an Audit",
        },
      ],
    },
    projects: {
      heading: "Featured Projects",
      subheading: "Real-world solutions engineered for real business challenges.",
      filterAll: "All",
      filterAutomation: "Automation",
      filterBackend: "Backend",
      filterEducation: "Education",
      viewBtn: "Build Something Similar",
      items: [
        {
          title: "Automated Customer Support System",
          description:
            "Production-grade support automation system for a SaaS company — connecting helpdesk, Slack, and a knowledge base. Handles 80% of support tickets automatically with accurate, context-aware responses.",
          tags: ["n8n", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Redis"],
          category: "Automation",
          outcome: "80% ticket deflection · 24/7 availability",
        },
        {
          title: "Enterprise HR Automation Pipeline",
          description:
            "Complete n8n-based automation connecting HR software, Slack, Google Workspace, and payroll — eliminating 12+ hours of manual admin work every single week.",
          tags: ["n8n", "Python", "Slack API", "Google Workspace", "REST APIs"],
          category: "Automation",
          outcome: "12+ hrs/week saved · Zero manual errors",
        },
        {
          title: "Multi-tenant SaaS Backend",
          description:
            "Scalable multi-tenant inventory platform with role-based access control, real-time stock tracking, automated reporting, and a full admin dashboard.",
          tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
          category: "Backend",
          outcome: "99.9% uptime · Scales to 500+ tenants",
        },
        {
          title: "Programming & Automation Bootcamp",
          description:
            "Designed and delivered a comprehensive curriculum covering Python, backend development, API integration, and workflow automation. 500+ students trained with real project assessments and live coaching sessions.",
          tags: ["Python", "FastAPI", "n8n", "Curriculum Design", "Live Coaching"],
          category: "Education",
          outcome: "500+ students trained · 95% completion rate",
        },
      ],
    },
    skills: {
      heading: "Technical Skills",
      subheading: "Categorized expertise across the full engineering stack.",
      categories: [
        { name: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash", "HTML/CSS"] },
        { name: "Backend", items: ["FastAPI", "Django", "Node.js", "Express", "REST APIs", "GraphQL"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase"] },
        { name: "Automation", items: ["n8n", "Activepieces", "Selenium", "Playwright", "Webhooks", "Custom Pipelines"] },
        { name: "APIs & Integrations", items: ["OpenAI API", "Hugging Face", "Stripe", "Google APIs", "Slack API", "Telegram Bot"] },
        { name: "DevOps & Infra", items: ["Docker", "Linux", "Nginx", "GitHub Actions", "VPS", "Cloudflare"] },
        { name: "Frontend", items: ["React", "Vue.js", "Tailwind CSS", "Vite", "Framer Motion", "Chart.js"] },
        { name: "Libraries", items: ["LangChain", "Pydantic", "SQLAlchemy", "Pandas", "BeautifulSoup", "Requests"] },
      ],
    },
    testimonials: {
      heading: "Client Feedback",
      items: [
        {
          name: "Alex Morrison",
          role: "CTO · SaaS Startup",
          avatar: "A",
          text: "The automated support system Ibrahim built has been transformative. We handle 3× the ticket volume without adding headcount. The architecture is clean and he was proactive every step of the way.",
        },
        {
          name: "Sarah Okafor",
          role: "Director of Operations · Enterprise",
          avatar: "S",
          text: "Ibrahim's n8n automation pipeline gave our HR team back three full days every week. It connects everything seamlessly and handles edge cases we hadn't even thought of. Outstanding execution.",
        },
        {
          name: "Khalid Al-Rashidi",
          role: "Course Student · Bootcamp Graduate",
          avatar: "K",
          text: "Ibrahim's teaching style is completely different — everything is practical, real projects, real problems. I went from zero to building and deploying my first backend API in 8 weeks. Best investment I've made.",
        },
      ],
    },
    cta: {
      badge: "Let's Work Together",
      heading: "Ready to Build Something That Works?",
      subheading:
        "Whether it's a backend system, an automation pipeline, technical training, or a consulting session — let's talk about your project.",
      primaryBtn: "Start on WhatsApp",
      secondaryBtn: "Send Project Details",
      note: "Free initial consultation · Response within 1 business hour",
    },
    contact: {
      heading: "Get in Touch",
      subheading: "Tell me about your project and I'll respond within 24 hours.",
      nameLabel: "Full Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email Address",
      emailPlaceholder: "you@company.com",
      whatsappLabel: "WhatsApp Number (optional)",
      whatsappPlaceholder: "+1 XXX XXX XXXX",
      projectTypeLabel: "Project Type",
      projectTypePlaceholder: "Select project type...",
      projectTypes: [
        "💻 Custom Software Development",
        "⚡ Workflow Automation",
        "🌐 API Development",
        "🎓 Technical Training",
        "🏢 Enterprise Architecture",
        "🔍 Technical Audit",
        "💡 General Consulting",
        "🔄 Other",
      ],
      descLabel: "Project Description",
      descPlaceholder:
        "Briefly describe your project — the problem you're solving, expected outcome, and timeline if known.",
      budgetLabel: "Budget Range (optional)",
      budgetPlaceholder: "Select range...",
      budgets: [
        "Prefer not to say",
        "Under $500",
        "$500 – $2,000",
        "$2,000 – $5,000",
        "$5,000 – $15,000",
        "$15,000+",
      ],
      startTimeLabel: "When to start? (optional)",
      startTimePlaceholder: "Select...",
      startTimes: ["ASAP", "Within 2 weeks", "Next month", "Not decided yet"],
      submitBtn: "Send Request",
      loadingBtn: "Sending...",
      successMsg: "✅ Received! I'll be in touch within 24 hours.",
      errorMsg: "❌ Something went wrong. Please try again or reach out on WhatsApp.",
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
      supportLabel: "Need support?",
      supportLink: "Email me",
    },
    about: {
      heading: "",
      paragraph: "",
      cards: {
        builder:    { title: "", desc: "" },
        automation: { title: "", desc: "" },
        results:    { title: "", desc: "" },
        partner:    { title: "", desc: "" },
      },
    },
    problems: { heading: "", subheading: "", items: [] as Array<{ problem: string; solution: string }> },
    faq:      { heading: "", items: [] as Array<{ q: string; a: string }> },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      expertise: "خبراتي",
      services: "خدماتي",
      projects: "مشاريعي",
      contact: "تواصل",
      hireMe: "ابدأ مشروعك",
    },
    hero: {
      badge: "متاح لمشاريع جديدة",
      name: "إبراهيم أحمد",
      handle: "SAQR",
      title: "مهندس برمجيات · مهندس أتمتة · مدرّب تقني",
      headline: "أبني، أُؤتمت،\nوأُعلّم البرمجيات الحديثة.",
      valueProposition:
        "من أنظمة الخلفية القابلة للتوسع وأتمتة العمليات الشاملة إلى التدريب التقني العملي — أقدم حلولاً متكاملة وجاهزة للإنتاج.",
      primaryCta: "ابدأ محادثة",
      secondaryCta: "عرض المشاريع",
      roles: ["مهندس برمجيات", "مهندس أتمتة", "مطوّر خلفي", "مدرّب تقني", "مطوّر Python"],
    },
    stats: {
      heading: "أرقام تتحدث",
      projects: "مشروع منجز",
      clients: "عميل راضٍ",
      experience: "سنوات خبرة",
      onTime: "التزام بالمواعيد",
      students: "طالب مدرَّب",
    },
    expertise: {
      heading: "مجالات الخبرة",
      subheading:
        "أربعة تخصصات أساسية — تطوير البرمجيات والأتمتة والتعليم والاستشارات — مبنية من خلال تجربة مشاريع حقيقية.",
      items: [
        {
          icon: "Code2",
          title: "تطوير البرمجيات",
          desc: "أنظمة خلفية متكاملة، تطبيقات Full Stack، واجهات برمجية عالية الأداء، تصميم قواعد بيانات، وبنى معمارية محسّنة.",
          tags: ["Python", "FastAPI", "PostgreSQL", "React", "System Design"],
        },
        {
          icon: "Zap",
          title: "أتمتة العمليات",
          desc: "أتمتة شاملة بـ n8n وActivepieces وخطوط مخصصة. أتمتة CRM والتسويق والموارد البشرية وتوليد العملاء وعمليات الأعمال.",
          tags: ["n8n", "Activepieces", "API Integration", "CRM Automation", "Webhooks"],
        },
        {
          icon: "GraduationCap",
          title: "التعليم التقني",
          desc: "دورات عملية وبرامج تدريبية في البرمجة والأتمتة والتطوير الخلفي. 500+ طالب مدرَّب بمشاريع حقيقية — لا نظرية فقط.",
          tags: ["Python", "Automation", "Backend Dev", "APIs", "Live Coaching"],
        },
        {
          icon: "Building2",
          title: "الاستشارات",
          desc: "استراتيجية تقنية، مراجعة بنى الأنظمة، خارطة التحول الرقمي، تحسين العمليات، واستشارات الشركات الناشئة.",
          tags: ["Architecture Reviews", "Digital Transformation", "Workflow Optimization", "Strategy"],
        },
      ],
    },
    services: {
      heading: "الخدمات",
      subheading: "خدمات تقنية متميزة مبنية حول احتياجات عملك الفعلية.",
      items: [
        {
          icon: "Layers",
          title: "تطوير البرمجيات المخصصة",
          desc: "تطبيقات ويب متكاملة وأدوات داخلية مصممة للتوسع والأداء العالي والصيانة طويلة الأمد.",
          tags: ["Python", "FastAPI", "React", "PostgreSQL"],
          cta: "ناقش مشروعك",
        },
        {
          icon: "GitBranch",
          title: "أتمتة العمليات",
          desc: "n8n وActivepieces وخطوط مخصصة تقضي على العمل اليدوي وتوصّل مكدّسك التقني بالكامل.",
          tags: ["n8n", "Activepieces", "APIs", "Webhooks"],
          cta: "أتمت عملياتك",
        },
        {
          icon: "Network",
          title: "تطوير الـ API",
          desc: "واجهات RESTful وGraphQL مع مصادقة وتحديد معدل وتوثيق كامل وأمان مدمج من اليوم الأول.",
          tags: ["FastAPI", "OpenAPI", "JWT", "Redis"],
          cta: "ابنِ الـ API",
        },
        {
          icon: "GraduationCap",
          title: "التدريب التقني",
          desc: "برامج تدريبية عملية للفرق في البرمجة والأتمتة والتطوير الخلفي بسيناريوهات مؤسسية حقيقية.",
          tags: ["Python", "Automation", "Backend", "APIs"],
          cta: "خطط التدريب",
        },
        {
          icon: "Building2",
          title: "بنية الأنظمة",
          desc: "استشارات تصميم الأنظمة والخدمات المصغرة واستراتيجية التحول الرقمي لفرق الهندسة المتنامية.",
          tags: ["System Design", "Microservices", "Cloud", "Strategy"],
          cta: "احصل على مراجعة",
        },
        {
          icon: "ClipboardCheck",
          title: "التدقيق التقني",
          desc: "مراجعات جودة الكود وتحسين الأداء ومراجعات صحة الأنظمة للتطبيقات القائمة قبل أن تصبح مشاكل في الإنتاج.",
          tags: ["Code Review", "Performance", "Optimization", "Documentation"],
          cta: "اطلب تدقيقاً",
        },
      ],
    },
    projects: {
      heading: "أبرز المشاريع",
      subheading: "حلول حقيقية لتحديات أعمال حقيقية.",
      filterAll: "الكل",
      filterAutomation: "أتمتة",
      filterBackend: "خلفي",
      filterEducation: "تعليم",
      viewBtn: "ابنِ شيئاً مشابهاً",
      items: [
        {
          title: "نظام أتمتة دعم العملاء",
          description:
            "نظام أتمتة دعم في بيئة إنتاج لشركة SaaS — يربط نظام التذاكر وSlack وقاعدة المعرفة. يعالج 80% من التذاكر تلقائياً باستجابات دقيقة وذات سياق.",
          tags: ["n8n", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Redis"],
          category: "Automation",
          outcome: "80% تحويل تذاكر · متاح 24/7",
        },
        {
          title: "خط أتمتة HR للمؤسسات",
          description:
            "أتمتة شاملة بـ n8n تربط نظام HR وSlack وGoogle Workspace وكشوف الرواتب — يلغي 12+ ساعة من العمل الإداري اليدوي أسبوعياً.",
          tags: ["n8n", "Python", "Slack API", "Google Workspace", "REST APIs"],
          category: "Automation",
          outcome: "توفير 12+ ساعة أسبوعياً · صفر أخطاء يدوية",
        },
        {
          title: "منصة SaaS متعددة المستأجرين",
          description:
            "منصة إدارة مخزون قابلة للتوسع مع صلاحيات متدرجة وتتبع مخزون لحظي وتقارير تلقائية ولوحة تحكم إدارية كاملة.",
          tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
          category: "Backend",
          outcome: "99.9% uptime · يدعم 500+ مستأجر",
        },
        {
          title: "بوتكامب البرمجة والأتمتة",
          description:
            "صميم وتسليم منهج شامل يغطي Python والتطوير الخلفي وتكامل API وأتمتة العمليات. 500+ طالب مدرَّب بتقييمات مشاريع حقيقية وجلسات إرشاد مباشرة.",
          tags: ["Python", "FastAPI", "n8n", "Curriculum Design", "Live Coaching"],
          category: "Education",
          outcome: "500+ طالب مدرَّب · 95% معدل إتمام",
        },
      ],
    },
    skills: {
      heading: "المهارات التقنية",
      subheading: "خبرات مُصنّفة عبر المكدّس الهندسي الكامل.",
      categories: [
        { name: "لغات البرمجة", items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash", "HTML/CSS"] },
        { name: "الخلفي", items: ["FastAPI", "Django", "Node.js", "Express", "REST APIs", "GraphQL"] },
        { name: "قواعد البيانات", items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Supabase"] },
        { name: "الأتمتة", items: ["n8n", "Activepieces", "Selenium", "Playwright", "Webhooks", "Custom Pipelines"] },
        { name: "APIs والتكاملات", items: ["OpenAI API", "Hugging Face", "Stripe", "Google APIs", "Slack API", "Telegram Bot"] },
        { name: "البنية التحتية", items: ["Docker", "Linux", "Nginx", "GitHub Actions", "VPS", "Cloudflare"] },
        { name: "الواجهة الأمامية", items: ["React", "Vue.js", "Tailwind CSS", "Vite", "Framer Motion", "Chart.js"] },
        { name: "المكتبات", items: ["LangChain", "Pydantic", "SQLAlchemy", "Pandas", "BeautifulSoup", "Requests"] },
      ],
    },
    testimonials: {
      heading: "آراء العملاء",
      items: [
        {
          name: "Alex Morrison",
          role: "CTO · شركة SaaS ناشئة",
          avatar: "A",
          text: "نظام أتمتة الدعم الذي بناه إبراهيم كان تحويلياً. نعالج الآن 3× حجم التذاكر دون إضافة موظفين. البنية نظيفة والجودة استثنائية.",
        },
        {
          name: "Sarah Okafor",
          role: "مديرة العمليات · شركة مؤسسية",
          avatar: "S",
          text: "خط أتمتة n8n الذي بناه إبراهيم أعاد لفريق الموارد البشرية 3 أيام كل أسبوع. يربط كل شيء بسلاسة ويعالج حالات لم نفكر بها.",
        },
        {
          name: "خالد الراشدي",
          role: "طالب · خريج البوتكامب",
          avatar: "K",
          text: "أسلوب إبراهيم في التدريس مختلف تماماً — كل شيء عملي، مشاريع حقيقية، مشاكل حقيقية. انتقلت من الصفر إلى بناء ونشر أول API خلفي لي في 8 أسابيع.",
        },
      ],
    },
    cta: {
      badge: "لنعمل معاً",
      heading: "مستعد لبناء شيء يعمل فعلاً؟",
      subheading:
        "سواء كان نظاماً خلفياً أو خط أتمتة أو تدريباً تقنياً أو استشارة — لنتحدث عن مشروعك.",
      primaryBtn: "ابدأ على واتساب",
      secondaryBtn: "أرسل تفاصيل المشروع",
      note: "استشارة أولى مجانية · رد خلال ساعة عمل",
    },
    contact: {
      heading: "تواصل معي",
      subheading: "أخبرني بمشروعك وسأرد عليك خلال 24 ساعة.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك الكامل",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      whatsappLabel: "رقم الواتساب (اختياري)",
      whatsappPlaceholder: "+966 5X XXX XXXX",
      projectTypeLabel: "نوع المشروع",
      projectTypePlaceholder: "اختر نوع المشروع...",
      projectTypes: [
        "💻 تطوير برمجيات مخصصة",
        "⚡ أتمتة عمليات",
        "🌐 تطوير API",
        "🎓 تدريب تقني",
        "🏢 بنية أنظمة",
        "🔍 تدقيق تقني",
        "💡 استشارة تقنية",
        "🔄 أخرى",
      ],
      descLabel: "وصف المشروع",
      descPlaceholder: "صف مشروعك باختصار — المشكلة التي تريد حلها والنتيجة المتوقعة والجدول الزمني إن علمت.",
      budgetLabel: "الميزانية التقريبية (اختياري)",
      budgetPlaceholder: "اختر النطاق...",
      budgets: [
        "أفضل عدم الذكر",
        "أقل من 500$",
        "500$ – 2,000$",
        "2,000$ – 5,000$",
        "5,000$ – 15,000$",
        "أكثر من 15,000$",
      ],
      startTimeLabel: "متى تريد البدء؟ (اختياري)",
      startTimePlaceholder: "اختر...",
      startTimes: ["في أقرب وقت", "خلال أسبوعين", "الشهر القادم", "لم أحدد بعد"],
      submitBtn: "إرسال الطلب",
      loadingBtn: "جاري الإرسال...",
      successMsg: "✅ تم الاستلام! سأتواصل معك خلال 24 ساعة.",
      errorMsg: "❌ حدث خطأ. حاول مرة أخرى أو تواصل عبر واتساب.",
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
      supportLabel: "تحتاج دعماً؟",
      supportLink: "راسلني",
    },
    about: {
      heading: "",
      paragraph: "",
      cards: {
        builder:    { title: "", desc: "" },
        automation: { title: "", desc: "" },
        results:    { title: "", desc: "" },
        partner:    { title: "", desc: "" },
      },
    },
    problems: { heading: "", subheading: "", items: [] as Array<{ problem: string; solution: string }> },
    faq:      { heading: "", items: [] as Array<{ q: string; a: string }> },
  },
};

export type Language = "ar" | "en";
export type Translations = typeof translations.en;

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

  const setLang = (newLang: Language) => setLangState(newLang);
  const t = translations[lang] as Translations;

  return { lang, setLang, t };
}
