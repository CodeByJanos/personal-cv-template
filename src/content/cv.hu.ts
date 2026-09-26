import type { CvData } from "../types/cv";

export const cvHu: CvData = {
  locale: "hu",

  labels: {
    summary: "Szakmai profil",
    highlights: "Főbb erősségek",
    experience: "Szakmai tapasztalat",
    projects: "Kiemelt projektek",
    skills: "Technológiai ismeretek",
    education: "Tanulmányok",
    certifications: "Képzések és tanúsítványok",
    languages: "Nyelvek",
    interests: "Érdeklődés",
    print: "Mentés PDF-ként",
    language: "Nyelv",
    projectFeatures: "Főbb funkciók",
    projectTechnologies: "Technológiák",
    projectRole: "Saját szerepem",
  },

  name: "Balogh János",
  title: "Full-Stack Developer",

  tagline:
    "Modern webalkalmazások · SaaS-termékek · üzleti problémákra épített digitális megoldások",

  initials: "BJ",

  contacts: [
    {
      label: "E-mail",
      value: "janosbalogh@webdevs.hu",
      href: "mailto:janosbalogh@webdevs.hu",
      kind: "email",
    },
    {
      label: "Telefon",
      value: "+36 50 134 5572",
      href: "tel:+36501345572",
      kind: "phone",
    },
    {
      label: "Hely",
      value: "Budapest, Magyarország",
      kind: "location",
    },
    {
      label: "Weboldal",
      value: "webdevs.hu",
      href: "https://www.webdevs.hu",
      kind: "web",
    },
    {
      label: "LinkedIn",
      value: "LinkedIn-profil",
      href: "https://www.linkedin.com/in/janos-balogh-412657257/",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      value: "GitHub-profil",
      href: "https://github.com/CodeByJanos",
      kind: "github",
    },
  ],

  summary:
    "Önállóan tanult Full-Stack Developer vagyok, modern webalkalmazások, SaaS-platformok és üzleti célú digitális termékek fejlesztésére fókuszálva. Saját és ügyfélprojektekben a teljes fejlesztési folyamatot kezelem az ötlet és a követelmények meghatározásától az adatbázis-tervezésen és implementáción át a telepítésig és karbantartásig. Elsődleges technológiáim a Next.js, React, TypeScript, Laravel, Supabase és PostgreSQL. Munkám során kiemelten figyelek a használható felületekre, a stabil működésre, az átlátható kódra és a valós üzleti problémák megoldására.",

  highlights: [
    "Teljes termékfejlesztési folyamat önálló kezelése a tervezéstől az éles üzemeltetésig",
    "Valós felhasználóknak készült SaaS-, közösségi és ügyviteli rendszerek fejlesztése",
    "Frontend-, backend-, adatbázis- és felhőalapú megoldások integrált megvalósítása",
    "AI-támogatott fejlesztési munkafolyamatok alkalmazása tervezéshez, hibakereséshez és teszteléshez",
  ],

  experience: [
    {
      company: "webdevs",
      role: "Full-Stack Developer",
      location: "Budapest",
      period: "2023 – jelenleg",

      summary:
        "Saját és ügyfélprojektekhez készülő SaaS-platformok, webalkalmazások és üzleti rendszerek teljes körű fejlesztése az ötlettől az éles működésig.",

      achievements: [
        "Modern és reszponzív felhasználói felületek fejlesztése Next.js, React, TypeScript és Tailwind CSS használatával.",
        "Backend szolgáltatások, REST API-k és adatbázis-struktúrák tervezése Laravel, Django, Supabase, PostgreSQL és MongoDB technológiákkal.",
        "Webalkalmazások teljes fejlesztési életciklusának kezelése: tervezés, fejlesztés, tesztelés, telepítés, hibajavítás és karbantartás.",
        "Autentikációs, jogosultságkezelési, adminisztrációs, értesítési és többnyelvű funkciók megvalósítása.",
        "Felhőben futó alkalmazások telepítése és karbantartása Vercel, Laravel Cloud és kapcsolódó szolgáltatások segítségével.",
        "Ügyféligények felmérése és azok üzleti szempontból használható szoftveres megoldásokká alakítása.",
        "AI-alapú fejlesztőeszközök használata architektúratervezéshez, kódgeneráláshoz, hibakereséshez, dokumentációhoz és gyors prototípus-készítéshez.",
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
      period: "2022. június – 2022. december",

      summary:
        "Közreműködés a Highlighty v2 böngészőbővítmény frontend fejlesztésében. A bővítmény több keresőkifejezés egyidejű, színkódolt kiemelését, menthető kulcsszólisták használatát és a találatok közötti navigációt teszi lehetővé.",

      achievements: [
        "React és TypeScript alapú felület fejlesztése Redux Toolkit state managementtel és Chakra UI komponensekkel.",
        "A böngészőbővítmény popup felületének, content scriptjeinek és háttérfolyamatainak kommunikációjához kapcsolódó frontendfeladatok.",
        "Dinamikusan változó weboldaltartalmak keresésének és kiemelésének kezelése.",
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
      name: "AroundYou – közösségi eseményplatform",

      description:
        "Közösségi eseményplatform, amely helyi programok felfedezését, szervezését és az eseményekhez való csatlakozást támogatja. A PWA a résztvevők közötti kapcsolódást és az események teljes életciklusának kezelését egyetlen mobilbarát felületen teszi lehetővé.",
      features: [
        "Interaktív térképes eseménykeresés és eseménykezelés",
        "Felhasználói profilok, kommentek és várólista",
        "Értesítések és többnyelvű működés",
        "Moderációs eszközök és esemény utáni élménybeszámolók",
        "Telepíthető, reszponzív PWA",
      ],
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
        Backend: ["Supabase"],
        Adatbázis: ["PostgreSQL"],
        Felhő: ["Vercel", "Brevo"],
      },
      role: [
        "Rendszerarchitektúra és adatbázis-tervezés",
        "UI/UX és frontend implementáció",
        "Backend funkciók és jogosultságkezelés",
        "Telepítés, üzemeltetés és karbantartás",
      ],
      href: "https://aroundyou.hu",
    },
    {
      name: "CsanadiDent – fogászati weboldal és időpontfoglaló rendszer",

      description:
        "Fogászati rendelő számára készített reszponzív weboldal és online időpontfoglaló rendszer. A megoldás egyszerűsíti a páciensek jelentkezését, valamint központi adminisztrációs felületet biztosít az időpontok és páciensadatok kezeléséhez.",
      features: [
        "Online időpontfoglalás és jóváhagyási folyamat",
        "Adminisztrációs felület",
        "Páciens- és időpontkezelés",
        "Tiltott időpontok és nem elérhető idősávok kezelése",
        "Automatikus e-mailes értesítések",
        "Reszponzív bemutatkozó weboldal",
      ],
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        Adatbázis: ["PostgreSQL"],
        Szolgáltatások: ["Brevo"],
      },
      role: [
        "Követelmények felmérése és rendszertervezés",
        "UI/UX és teljes alkalmazásfejlesztés",
        "Adatbázis-tervezés és adminisztrációs funkciók",
        "Telepítés és karbantartás",
      ],
      href: "https://csanadident.hu",
    },
    {
      name: "DeliveryTracker – futárteljesítmény-elemző platform",

      description:
        "Futárok számára készített teljesítmény- és jövedelemelemző SaaS, amely műszak-, bevétel- és költségadatokból számít üzleti mutatókat. A statisztikák és riportok támogatják a jövedelmezőség követését és a hatékonyabb munkatervezést.",
      features: [
        "Műszak-, bevétel- és rendelésszám-kezelés",
        "Kiadások, üzemanyagköltség és megtett távolság rögzítése",
        "Profit-, órabér- és kilométeralapú jövedelmezőségi számítások",
        "Havi statisztikák és teljesítményriportok",
        "Előfizetés-alapú hozzáférés",
      ],
      technologies: {
        Frontend: ["Tailwind CSS", "PWA"],
        Backend: ["Laravel", "PHP", "REST API"],
        Adatbázis: ["PostgreSQL"],
        Infrastruktúra: ["Docker", "Laravel Cloud", "Brevo"],
        Fizetés: ["Paddle"],
      },
      role: [
        "Terméktervezés és rendszerarchitektúra",
        "Backend- és frontendfejlesztés",
        "Adatmodell és analitikai számítások kialakítása",
        "Előfizetési integráció, telepítés és karbantartás",
      ],
      href: "https://deliverytracker.hu",
    },
    {
      name: "DRM Tyres – gumiabroncs-szerviz és online ügyviteli rendszer",

      description:
        "Teljes körű webes rendszer egy gumiabroncs-szerviz ügyfélkiszolgálásának és napi működésének digitalizálására. A reszponzív üzleti weboldal online időpontfoglalást biztosít az ügyfeleknek, az adminisztrációs felület pedig központi ügyfél-, időpont- és promóciókezelést tesz lehetővé.",
      features: [
        "Reszponzív üzleti weboldal és mobilbarát felület",
        "Online időpontfoglalás és adminisztratív időpontkezelés",
        "Ügyfél- és promóciókezelés az adminisztrációs felületen",
        "Autentikáció és szerepköralapú jogosultságkezelés",
        "Kapcsolati űrlapok és automatikus e-mailes értesítések",
        "Google Reviews-integráció",
      ],
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        Backend: ["Supabase", "Supabase Auth", "REST API", "Row Level Security"],
        Adatbázis: ["PostgreSQL"],
        Szolgáltatások: ["Google Reviews API", "Brevo", "Vercel"],
      },
      role: [
        "Rendszerarchitektúra és adatbázis-tervezés",
        "UI/UX tervezés és implementáció",
        "Teljes körű full-stack fejlesztés",
        "Autentikáció és jogosultságkezelés kialakítása",
        "Adminisztrációs felület fejlesztése",
        "Telepítés és karbantartás",
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
      "Reszponzív webdesign",
      "PWA",
    ],

    Backend: [
      "Laravel",
      "PHP",
      "Django",
      "Python",
      "Node.js",
      "Express",
      "REST API",
      "Autentikáció",
      "Jogosultságkezelés",
    ],

    "Adatbázis és szolgáltatások": [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Row Level Security",
      "Adatbázis-tervezés",
    ],

    "DevOps és eszközök": [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel",
      "Laravel Cloud",
      "GitHub Actions",
      "Supabase CLI",
    ],

    "Fejlesztési gyakorlat": [
      "Rendszertervezés",
      "Hibakeresés",
      "API-integráció",
      "Adatmodellezés",
      "Reszponzív fejlesztés",
      "Teljesítményoptimalizálás",
      "AI-támogatott fejlesztés",
      "Folyamatos tanulás",
    ],
  },

  education: [
    {
      institution: "Nagyszalontai Technológiai Líceum",
      degree: "Technológiai érettségi",
      period: "",
      details: "Nagyszalonta, Románia",
    },
  ],

  certifications: [
    {
      name: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "IBM · Coursera",
      year: "",

      details:
        "Gyakorlatorientált képzés modern frontend- és backend-fejlesztésből, React, Node.js, Express, Python, Flask, Django, adatbázisok, REST API-k, Git, GitHub, Docker és felhőalapú telepítés témakörökben.",
    },
  ],

  languages: [
    {
      name: "Magyar",
      level: "anyanyelvi",
    },
    {
      name: "Román",
      level: "magabiztos szakmai nyelvtudás",
    },
    {
      name: "Angol",
      level: "középszintű, aktívan fejlesztett szakmai nyelvtudás (B1)",
    },
  ],

  interests: [
    "Web- és szoftverfejlesztés",
    "SaaS-termékek",
    "Mesterséges intelligencia",
    "Új technológiák",
    "Kerékpártúrázás",
    "Utazás",
    "Szabadtéri programok",
  ],
};
