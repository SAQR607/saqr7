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
      title: "Software Engineer · Security Researcher · AI Builder · Automation Architect",
      headline: "I build, secure, automate,\nand teach modern software systems.",
      valueProposition:
        "From secure backend architectures and AI-powered applications to end-to-end workflow automation and technical education — I deliver complete, production-ready solutions.",
      primaryCta: "Start a Conversation",
      secondaryCta: "View Projects",
      roles: ["Software Engineer", "Security Researcher", "AI Builder", "Automation Architect", "Technical Educator"],
    },
    stats: {
      heading: "Delivered Results",
      projects: "Projects Delivered",
      clients: "Clients Served",
      experience: "Years Experience",
      onTime: "On-Time Delivery",
    },
    expertise: {
      heading: "Areas of Expertise",
      subheading:
        "A full-spectrum engineering background spanning security, software development, AI, automation, education, and consulting.",
      items: [
        {
          icon: "Shield",
          title: "Cyber Security",
          desc: "Application security auditing, secure architecture design, API hardening, penetration testing, and security consulting for modern web systems.",
          tags: ["OWASP Top 10", "Pen Testing", "API Security", "JWT/OAuth", "TLS/SSL"],
        },
        {
          icon: "Code2",
          title: "Software Development",
          desc: "End-to-end backend systems, full-stack applications, REST and GraphQL APIs, database architecture, and performance-optimized system design.",
          tags: ["Python", "FastAPI", "PostgreSQL", "React", "System Design"],
        },
        {
          icon: "Brain",
          title: "AI Engineering",
          desc: "Custom LLM applications, AI agents, RAG pipelines, AI-powered automation, and intelligent solutions that deliver measurable business outcomes.",
          tags: ["LangChain", "OpenAI", "RAG", "AI Agents", "Prompt Engineering"],
        },
        {
          icon: "Zap",
          title: "Workflow Automation",
          desc: "End-to-end automation with n8n, Activepieces, and custom pipelines. CRM, marketing, HR, lead generation, and business process automation.",
          tags: ["n8n", "Activepieces", "API Integration", "CRM Automation", "Webhooks"],
        },
        {
          icon: "GraduationCap",
          title: "Technical Education",
          desc: "Practical courses and team training on programming, security, AI, automation, and backend development. Real projects, not just theory.",
          tags: ["Python", "Security", "AI & ML", "Automation", "Backend Dev"],
        },
        {
          icon: "Building2",
          title: "Consulting",
          desc: "Technical strategy, architecture reviews, digital transformation roadmaps, AI adoption guidance, and startup technical advisory.",
          tags: ["Architecture Reviews", "Digital Transformation", "AI Adoption", "Startup Strategy"],
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
          icon: "Sparkles",
          title: "AI Solutions & Agents",
          desc: "Custom LLM applications, AI agents, RAG pipelines, and intelligent automation that delivers measurable business outcomes.",
          tags: ["LangChain", "OpenAI", "RAG", "Python"],
          cta: "Explore AI Solutions",
        },
        {
          icon: "GitBranch",
          title: "Workflow Automation",
          desc: "n8n, Activepieces, and custom automation pipelines that eliminate manual work and connect your entire tech stack seamlessly.",
          tags: ["n8n", "Activepieces", "APIs", "Webhooks"],
          cta: "Automate Your Workflow",
        },
        {
          icon: "Shield",
          title: "Security Consulting",
          desc: "Application security audits, API hardening, penetration testing, and secure architecture design for production systems.",
          tags: ["OWASP", "Pen Testing", "JWT", "TLS"],
          cta: "Schedule an Audit",
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
          desc: "Practical team training programs on programming, security, AI, and automation. Hands-on with real enterprise scenarios.",
          tags: ["Programming", "Security", "AI", "Automation"],
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
          desc: "Security reviews, code quality audits, and performance optimization for existing systems before they become production problems.",
          tags: ["Code Review", "Security", "Performance", "Documentation"],
          cta: "Request an Audit",
        },
      ],
    },
    projects: {
      heading: "Featured Projects",
      subheading: "Real-world solutions engineered for real business challenges.",
      filterAll: "All",
      filterAI: "AI",
      filterAutomation: "Automation",
      filterSecurity: "Security",
      filterBackend: "Backend",
      viewBtn: "Build Something Similar",
      items: [
        {
          title: "AI Customer Support Agent",
          description:
            "Production-grade AI support agent using RAG architecture for a SaaS company. Handles 80% of support tickets autonomously with context-aware, accurate responses — running 24/7.",
          tags: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL", "Redis"],
          category: "AI",
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
          title: "API Security Audit & Hardening",
          description:
            "Comprehensive security audit of a fintech REST API. Identified 14 critical vulnerabilities and led full remediation — achieving OWASP Top 10 compliance.",
          tags: ["Python", "Burp Suite", "OWASP ZAP", "JWT", "TLS"],
          category: "Security",
          outcome: "14 critical vulns resolved · OWASP compliant",
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
        { name: "AI & ML", items: ["LangChain", "OpenAI API", "Hugging Face", "RAG Systems", "LLM Fine-tuning", "Prompt Eng."] },
        { name: "Automation", items: ["n8n", "Activepieces", "Selenium", "Playwright", "Webhooks", "Custom Pipelines"] },
        { name: "Security", items: ["OWASP Top 10", "JWT/OAuth 2.0", "Burp Suite", "OWASP ZAP", "Pen Testing", "TLS/SSL"] },
        { name: "DevOps & Infra", items: ["Docker", "Linux", "Nginx", "GitHub Actions", "VPS", "Cloudflare"] },
        { name: "Frontend", items: ["React", "Vue.js", "Tailwind CSS", "Vite", "Framer Motion", "Chart.js"] },
      ],
    },
    testimonials: {
      heading: "Client Feedback",
      items: [
        {
          name: "Alex Morrison",
          role: "CTO · SaaS Startup",
          avatar: "A",
          text: "The AI support agent Ibrahim built has been transformative. We handle 3× the ticket volume without adding headcount. The architecture is clean, quality is exceptional, and he was proactive every step of the way.",
        },
        {
          name: "Sarah Okafor",
          role: "Director of Operations · Enterprise",
          avatar: "S",
          text: "Ibrahim's n8n automation pipeline gave our HR team back three full days every week. It connects everything seamlessly and handles edge cases we hadn't even thought of. Outstanding execution.",
        },
        {
          name: "James Whitfield",
          role: "Head of Security · Fintech",
          avatar: "J",
          text: "The security audit was thorough and professional beyond expectations. Ibrahim found critical vulnerabilities two other reviewers missed. His remediation recommendations were precise and immediately actionable.",
        },
      ],
    },
    cta: {
      badge: "Let's Work Together",
      heading: "Ready to Build Something Exceptional?",
      subheading:
        "Whether it's a backend system, an AI agent, an automation pipeline, or a security review — let's discuss your project.",
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
        "🤖 AI Integration & Agents",
        "⚡ Workflow Automation",
        "🔒 Security Consulting",
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
      title: "مهندس برمجيات · باحث أمن · مطوّر ذكاء اصطناعي · مهندس أتمتة",
      headline: "أبني، أؤمّن، أُؤتمت،\nوأُعلّم أنظمة البرمجيات الحديثة.",
      valueProposition:
        "من البنى الخلفية الآمنة والتطبيقات المدعومة بالذكاء الاصطناعي إلى أتمتة العمليات الشاملة والتدريب التقني — أقدم حلولاً تقنية متكاملة وجاهزة للإنتاج.",
      primaryCta: "ابدأ محادثة",
      secondaryCta: "عرض المشاريع",
      roles: ["مهندس برمجيات", "باحث أمن معلومات", "مطوّر ذكاء اصطناعي", "مهندس أتمتة", "مدرّب تقني"],
    },
    stats: {
      heading: "أرقام تتحدث",
      projects: "مشروع منجز",
      clients: "عميل راضٍ",
      experience: "سنوات خبرة",
      onTime: "التزام بالمواعيد",
    },
    expertise: {
      heading: "مجالات الخبرة",
      subheading:
        "خلفية هندسية شاملة تغطي الأمن والتطوير والذكاء الاصطناعي والأتمتة والتعليم والاستشارات.",
      items: [
        {
          icon: "Shield",
          title: "الأمن السيبراني",
          desc: "تدقيق أمن التطبيقات، تصميم البنى الآمنة، تصلّب الـ API، اختبار الاختراق، والاستشارات الأمنية للأنظمة الحديثة.",
          tags: ["OWASP Top 10", "Pen Testing", "API Security", "JWT/OAuth", "TLS/SSL"],
        },
        {
          icon: "Code2",
          title: "تطوير البرمجيات",
          desc: "أنظمة خلفية متكاملة، تطبيقات Full Stack، واجهات برمجية عالية الأداء، تصميم قواعد بيانات، وبنى معمارية محسّنة.",
          tags: ["Python", "FastAPI", "PostgreSQL", "React", "System Design"],
        },
        {
          icon: "Brain",
          title: "هندسة الذكاء الاصطناعي",
          desc: "تطبيقات LLM مخصصة، وكلاء AI، أنظمة RAG، وأتمتة مدعومة بالذكاء الاصطناعي تحقق نتائج أعمال قابلة للقياس.",
          tags: ["LangChain", "OpenAI", "RAG", "AI Agents", "Prompt Engineering"],
        },
        {
          icon: "Zap",
          title: "أتمتة العمليات",
          desc: "أتمتة شاملة بـ n8n وActivepieces وخطوط مخصصة. أتمتة CRM والتسويق والموارد البشرية وعمليات الأعمال.",
          tags: ["n8n", "Activepieces", "API Integration", "CRM Automation", "Webhooks"],
        },
        {
          icon: "GraduationCap",
          title: "التعليم التقني",
          desc: "دورات عملية وبرامج تدريبية في البرمجة والأمن والذكاء الاصطناعي والأتمتة والتطوير الخلفي. مشاريع حقيقية لا نظرية.",
          tags: ["Python", "Security", "AI & ML", "Automation", "Backend Dev"],
        },
        {
          icon: "Building2",
          title: "الاستشارات",
          desc: "استراتيجية تقنية، مراجعة بنى الأنظمة، خارطة التحول الرقمي، تبني الذكاء الاصطناعي، واستشارات الشركات الناشئة.",
          tags: ["Architecture Reviews", "Digital Transformation", "AI Adoption", "Startup Strategy"],
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
          icon: "Sparkles",
          title: "حلول ووكلاء الذكاء الاصطناعي",
          desc: "تطبيقات LLM مخصصة، وكلاء ذكاء اصطناعي، وأنابيب RAG تحقق نتائج أعمال قابلة للقياس.",
          tags: ["LangChain", "OpenAI", "RAG", "Python"],
          cta: "استكشف حلول AI",
        },
        {
          icon: "GitBranch",
          title: "أتمتة العمليات",
          desc: "n8n وActivepieces وخطوط مخصصة تقضي على العمل اليدوي وتوصّل مكدّسك التقني بالكامل.",
          tags: ["n8n", "Activepieces", "APIs", "Webhooks"],
          cta: "أتمت عملياتك",
        },
        {
          icon: "Shield",
          title: "استشارات الأمن",
          desc: "تدقيق أمن التطبيقات، تصلّب الـ API، اختبار الاختراق، وتصميم بنى آمنة لأنظمة الإنتاج.",
          tags: ["OWASP", "Pen Testing", "JWT", "TLS"],
          cta: "احجز تدقيقاً",
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
          desc: "برامج تدريبية عملية للفرق في البرمجة والأمن والذكاء الاصطناعي والأتمتة بسيناريوهات مؤسسية حقيقية.",
          tags: ["Programming", "Security", "AI", "Automation"],
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
          desc: "مراجعات أمنية وتدقيق جودة الكود وتحسين الأداء للأنظمة القائمة قبل أن تصبح مشاكل في الإنتاج.",
          tags: ["Code Review", "Security", "Performance", "Documentation"],
          cta: "اطلب تدقيقاً",
        },
      ],
    },
    projects: {
      heading: "أبرز المشاريع",
      subheading: "حلول حقيقية لتحديات أعمال حقيقية.",
      filterAll: "الكل",
      filterAI: "ذكاء اصطناعي",
      filterAutomation: "أتمتة",
      filterSecurity: "أمن",
      filterBackend: "خلفي",
      viewBtn: "ابنِ شيئاً مشابهاً",
      items: [
        {
          title: "وكيل دعم عملاء بالذكاء الاصطناعي",
          description:
            "وكيل دعم AI في بيئة إنتاج يستخدم بنية RAG لشركة SaaS. يعالج 80% من تذاكر الدعم بشكل مستقل باستجابات دقيقة وذات سياق — متاح 24/7.",
          tags: ["Python", "LangChain", "OpenAI", "FastAPI", "PostgreSQL", "Redis"],
          category: "AI",
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
          title: "تدقيق أمن API وتصليبه",
          description:
            "تدقيق أمني شامل لـ API مالية. رُصدت 14 ثغرة حرجة وقُيدت المعالجة الكاملة — لتحقيق امتثال OWASP Top 10.",
          tags: ["Python", "Burp Suite", "OWASP ZAP", "JWT", "TLS"],
          category: "Security",
          outcome: "14 ثغرة حرجة معالجة · OWASP Compliant",
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
        { name: "AI وML", items: ["LangChain", "OpenAI API", "Hugging Face", "RAG Systems", "LLM Fine-tuning", "Prompt Eng."] },
        { name: "الأتمتة", items: ["n8n", "Activepieces", "Selenium", "Playwright", "Webhooks", "Custom Pipelines"] },
        { name: "الأمن", items: ["OWASP Top 10", "JWT/OAuth 2.0", "Burp Suite", "OWASP ZAP", "Pen Testing", "TLS/SSL"] },
        { name: "البنية التحتية", items: ["Docker", "Linux", "Nginx", "GitHub Actions", "VPS", "Cloudflare"] },
        { name: "الواجهة الأمامية", items: ["React", "Vue.js", "Tailwind CSS", "Vite", "Framer Motion", "Chart.js"] },
      ],
    },
    testimonials: {
      heading: "آراء العملاء",
      items: [
        {
          name: "Alex Morrison",
          role: "CTO · شركة SaaS ناشئة",
          avatar: "A",
          text: "وكيل الدعم بالذكاء الاصطناعي الذي بناه إبراهيم كان تحويلياً. نعالج الآن 3× حجم التذاكر دون إضافة موظفين. البنية نظيفة والجودة استثنائية.",
        },
        {
          name: "Sarah Okafor",
          role: "مديرة العمليات · شركة مؤسسية",
          avatar: "S",
          text: "خط أتمتة n8n الذي بناه إبراهيم أعاد لفريق الموارد البشرية 3 أيام كل أسبوع. يربط كل شيء بسلاسة ويعالج حالات لم نفكر بها.",
        },
        {
          name: "James Whitfield",
          role: "رئيس الأمن · شركة مالية",
          avatar: "J",
          text: "التدقيق الأمني كان شاملاً ومحترفاً بشكل يفوق التوقعات. إبراهيم وجد ثغرات حرجة فاتت مراجعَين آخرَين. توصيات المعالجة كانت دقيقة وقابلة للتنفيذ فوراً.",
        },
      ],
    },
    cta: {
      badge: "لنعمل معاً",
      heading: "مستعد لبناء شيء استثنائي؟",
      subheading:
        "سواء كان نظاماً خلفياً أو وكيل ذكاء اصطناعي أو خط أتمتة أو مراجعة أمنية — لنتحدث عن مشروعك.",
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
        "🤖 حلول ذكاء اصطناعي",
        "⚡ أتمتة عمليات",
        "🔒 استشارات أمن",
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
