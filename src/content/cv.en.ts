import type { CvData } from "../types/cv";

export const cvEn: CvData = {
  locale: "en",

  labels: {
    summary: "Professional summary",
    highlights: "Key strengths",
    experience: "Professional experience",
    projects: "Selected projects",
    skills: "Technical skills",
    education: "Education",
    certifications: "Training and certifications",
    languages: "Languages",
    interests: "Interests",
    print: "Save as PDF",
    language: "Language",
    projectFeatures: "Key features",
    projectTechnologies: "Technologies",
    projectRole: "My role",
  },

  name: "János Balogh",
  title: "Full-Stack Developer",

  tagline:
    "Modern web applications · SaaS products · digital solutions for real business needs",

  initials: "JB",

  contacts: [
    {
      label: "Email",
      value: "janosbalogh@webdevs.hu",
      href: "mailto:janosbalogh@webdevs.hu",
      kind: "email",
    },
    {
      label: "Phone",
      value: "+36 50 134 5572",
      href: "tel:+36501345572",
      kind: "phone",
    },
    {
      label: "Location",
      value: "Budapest, Hungary",
      kind: "location",
    },
    {
      label: "Website",
      value: "webdevs.hu",
      href: "https://www.webdevs.hu",
      kind: "web",
    },
    {
      label: "LinkedIn",
      value: "LinkedIn profile",
      href: "https://www.linkedin.com/in/janos-balogh-412657257/",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      value: "GitHub profile",
      href: "https://github.com/CodeByJanos",
      kind: "github",
    },
  ],

  summary:
    "Self-taught full-stack developer focused on building modern web applications, SaaS platforms and business-oriented digital products. I manage the complete development lifecycle across personal and client projects, from defining requirements and planning the architecture to database design, implementation, deployment and maintenance. My primary technologies include Next.js, React, TypeScript, Laravel, Supabase and PostgreSQL. I place strong emphasis on usable interfaces, reliable functionality, maintainable code and solving real business problems.",

  highlights: [
    "Independent delivery of complete software products from planning to production",
    "Development of SaaS, community and business management systems for real users",
    "Integrated implementation of frontend, backend, database and cloud-based solutions",
    "Use of AI-assisted development workflows for planning, debugging, testing and documentation",
  ],

  experience: [
    {
      company: "webdevs",
      role: "Full-Stack Developer",
      location: "Budapest, Hungary",
      period: "2023 – present",

      summary:
        "End-to-end development of SaaS platforms, web applications and business systems for personal and client projects, from the initial idea to production operation.",

      achievements: [
        "Developed modern and responsive user interfaces using Next.js, React, TypeScript and Tailwind CSS.",
        "Designed backend services, REST APIs and database structures using Laravel, Django, Supabase, PostgreSQL and MongoDB.",
        "Managed the complete software development lifecycle, including planning, implementation, testing, deployment, troubleshooting and maintenance.",
        "Implemented authentication, role-based access control, administration, notifications and multilingual functionality.",
        "Deployed and maintained cloud-hosted applications using Vercel, Laravel Cloud and related services.",
        "Translated client requirements and business needs into practical and usable software solutions.",
        "Used AI-assisted development tools for architecture planning, code generation, debugging, documentation and rapid prototyping.",
      ],

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Laravel",
        "Django",
        "Supabase",
        "PostgreSQL",
        "MongoDB",
        "Docker",
      ],
    },
    {
      company: "WEBMND Technologies SRL",
      role: "Frontend Developer — Contractor",
      location: "Highlighty v2",
      period: "June 2022 – December 2022",

      summary:
        "Contributed to the frontend development of Highlighty v2, a browser extension that enables users to highlight multiple search terms simultaneously using different colors, save reusable keyword lists, and navigate between matches.",

      achievements: [
        "Developed React and TypeScript based interface functionality using Redux Toolkit for state management and Chakra UI components.",
        "Worked on frontend functionality involving the extension popup and communication between webpage content scripts and background processes.",
        "Handled searching and highlighting within dynamically changing webpage content.",
      ],

      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Chakra UI",
        "Chrome Extension APIs",
        "Manifest V3",
        "mark.js",
      ],
    },
  ],

  projects: [
    {
      name: "AroundYou – Community Events Platform",

      description:
        "A community events platform for discovering local activities, organising events and joining other participants. The PWA supports real-world social connections and manages the complete event lifecycle through a single mobile-friendly interface.",
      features: [
        "Interactive map-based discovery and event management",
        "User profiles, comments and waiting lists",
        "Notifications and multilingual support",
        "Moderation tools and post-event experience posts",
        "Installable, responsive PWA",
      ],
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
        Backend: ["Supabase"],
        Database: ["PostgreSQL"],
        Cloud: ["Vercel", "Brevo"],
      },
      role: [
        "System architecture and database design",
        "UI/UX and frontend implementation",
        "Backend features and access control",
        "Deployment, operations and maintenance",
      ],
      href: "https://aroundyou.hu",
    },
    {
      name: "CsanadiDent – Dental Website and Appointment System",

      description:
        "A responsive practice website and online appointment booking system developed for a dental clinic. It simplifies patient requests and provides a central administration interface for managing appointments and patient information.",
      features: [
        "Online appointment booking and approval workflow",
        "Administration interface",
        "Patient and appointment management",
        "Blocked dates and unavailable time-slot management",
        "Automated email notifications",
        "Responsive practice website",
      ],
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        Database: ["PostgreSQL"],
        Services: ["Brevo"],
      },
      role: [
        "Requirements analysis and system design",
        "UI/UX and full application development",
        "Database design and administration features",
        "Deployment and maintenance",
      ],
      href: "https://csanadident.hu",
    },
    {
      name: "DeliveryTracker – Courier Performance Analytics Platform",

      description:
        "A courier performance and income analytics SaaS that calculates business metrics from shift, revenue and expense data. Its statistics and reports help couriers monitor profitability and plan their work more effectively.",
      features: [
        "Shift, income and order-count management",
        "Expense, fuel-cost and travelled-distance tracking",
        "Profit, hourly earnings and per-kilometre profitability calculations",
        "Monthly statistics and performance reports",
        "Subscription-based access",
      ],
      technologies: {
        Frontend: ["Tailwind CSS", "PWA"],
        Backend: ["Laravel", "PHP", "REST API"],
        Database: ["PostgreSQL"],
        Infrastructure: ["Docker", "Laravel Cloud", "Brevo"],
        Payments: ["Paddle"],
      },
      role: [
        "Product planning and system architecture",
        "Backend and frontend development",
        "Data modelling and analytics calculations",
        "Subscription integration, deployment and maintenance",
      ],
      href: "https://deliverytracker.hu",
    },
    {
      name: "DRM Tyres – Tyre Service and Online Management System",

      description:
        "A complete web platform developed to digitise customer service and daily operations for a tyre service business. The responsive business website provides online appointment booking, while the administration dashboard centralises customer, appointment and promotion management.",
      features: [
        "Responsive business website and mobile-friendly interface",
        "Online booking and administrative appointment management",
        "Customer and promotion management through an administration dashboard",
        "Authentication and role-based permissions",
        "Contact forms and automated email notifications",
        "Google Reviews integration",
      ],
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        Backend: ["Supabase", "Supabase Auth", "REST API", "Row Level Security"],
        Database: ["PostgreSQL"],
        Services: ["Google Reviews API", "Brevo", "Vercel"],
      },
      role: [
        "System architecture and database design",
        "UI/UX design and implementation",
        "End-to-end full-stack development",
        "Authentication and permission management",
        "Administration dashboard development",
        "Deployment and maintenance",
      ],
    },
  ],

  skills: {
    Frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive web design",
      "PWA",
    ],

    Backend: [
      "Laravel",
      "PHP",
      "Django",
      "Python",
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Role-based access control",
    ],

    "Databases & Services": [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Row Level Security",
      "Database design",
    ],

    "DevOps & Tools": [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel",
      "Laravel Cloud",
      "GitHub Actions",
      "Supabase CLI",
    ],

    "Development Practices": [
      "System design",
      "Debugging",
      "API integration",
      "Data modelling",
      "Responsive development",
      "Performance optimisation",
      "AI-assisted development",
      "Continuous learning",
    ],
  },

  education: [
    {
      institution: "Salonta Technological High School",
      degree: "Technological High School Diploma",
      period: "",
      details: "Salonta, Romania",
    },
  ],

  certifications: [
    {
      name: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "IBM · Coursera",
      year: "",

      details:
        "Practice-oriented professional training covering modern frontend and backend development, including React, Node.js, Express, Python, Flask, Django, databases, REST APIs, Git, GitHub, Docker and cloud deployment.",
    },
  ],

  languages: [
    {
      name: "Hungarian",
      level: "native",
    },
    {
      name: "Romanian",
      level: "professional working proficiency",
    },
    {
      name: "English",
      level: "intermediate, actively improving professional proficiency (B1)",
    },
  ],

  interests: [
    "Web and software development",
    "SaaS products",
    "Artificial intelligence",
    "Emerging technologies",
    "Cycling and bike touring",
    "Travel",
    "Outdoor activities",
  ],
};
