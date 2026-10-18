export const PERSONAL_INFO = {
  name: "Yogesh Singh Bhadoriya",
  firstName: "Yogesh",
  displayRole: "Software Developer",
  roleSubline: "Backend-focused Software Developer (fresher) building with Java Spring Boot and Node.js, with React interfaces.",
  introLine: "Building backend systems in {{k|Java Spring Boot}} and {{k|Node.js}}, with well-designed databases and {{k|React}} interfaces.",
  status: "Available for Software Developer & Analyst Roles",
  location: "Bhopal, India",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "SAGE University, Bhopal",
    period: "2023 — 2027 (Expected)",
    score: "CGPA 8.4",
  },
  socials: {
    github: "https://github.com/Yogesh0209",
    linkedin: "https://www.linkedin.com/in/yogesh-singh-bhadoriya-a35604375",
    email: "yogeshsingh02904@gmail.com",
    resume: "/Yogesh_Singh_Bhadoriya_Resume.pdf",
  },
  interests: ["Reading", "Gaming", "Adventuring", "Coding"],
};

export const EXPERIENCE_DATA = [
  {
    role: "Java Full Stack Development Intern",
    company: "Cybrom Technology Pvt. Ltd.",
    location: "On-Site, India",
    period: "Oct 2026 – Ongoing",
    current: true,
    badge: "Current",
    highlights: [
      "{{c|Worked}} across the software development lifecycle, from requirement analysis and technical documentation to backend implementation and testing.",
      "{{c|Prepared}} {{k|BRD}}, {{k|FRD}}, {{k|DFDs}}, database designs, and {{k|API}} specifications to translate business requirements into technical solutions.",
      "{{c|Developed}} and tested backend modules using {{k|Spring Boot}}, {{k|Spring MVC}}, {{k|JPA/Hibernate}}, and {{k|MySQL}}, following a layered architecture.",
      "{{c|Used}} {{k|Git}}, {{k|GitHub}}, {{k|Postman}}, and {{k|Figma}} for version control, API testing, collaboration, and interface planning."
    ],
    technologies: ["Spring Boot", "Spring MVC", "JPA/Hibernate", "MySQL", "Git", "GitHub", "Postman", "Figma"]
  },
  {
    role: "Software Development Intern",
    company: "FlutterFlirt",
    location: "Remote, India",
    period: "May 2026 – Jun 2026",
    current: false,
    badge: "Backend Focus",
    highlights: [
      "{{c|Built}} backend modules in {{k|Node.js}}, structuring routes and controllers to keep business logic decoupled from request handling.",
      "{{c|Redesigned}} {{k|SQL}} schemas by normalizing repeated fields and adding indexes on frequently-queried columns, cutting slow query patterns.",
      "{{c|Built}} and integrated {{k|REST APIs}} consumed by the frontend team, defining consistent request/response contracts and error handling.",
      "{{c|Traced}} and fixed backend bugs via server logs and step-through debugging, resolving data-join and null-handling issues before release."
    ],
    technologies: ["Node.js", "SQL", "REST APIs"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "milan",
    title: "Milan",
    subtitle: "Trust-First Matrimonial Web Application",
    period: "Oct 2026 – Ongoing",
    status: "ongoing",
    problemStatement: "Matrimonial sites struggle with fake, inactive and scammer profiles. Building a multi-tenant platform for marriage bureaus with {{n|3}}-level trust verification (OTP, selfie, government ID) and automatic hiding of inactive profiles.",
    bullets: [
      "{{c|Designed}} the system end to end: {{k|BRD}}, {{k|FRD}}, {{k|DFDs}} and {{n|27}} {{k|Figma}} screens for {{n|3}} roles (End User, Host, Super Admin).",
      "{{c|Implementing}} {{k|JWT}}-secured {{k|REST APIs}} with role-based access and subscription plans using {{k|Spring Boot}} and {{k|MySQL}}."
    ],
    stack: ["React", "Spring Boot", "MySQL"],
    // add real link here when the repo is public
    githubUrl: "https://github.com/Yogesh0209/trust-first-matrimonial-platform",
    // add real link here when the repo is public
    liveUrl: "",
    orbVariant: "holographic-eclipse",
    featured: true
  },
  {
    id: "chainflow",
    title: "ChainFlow",
    subtitle: "Supply Chain & Warehouse Management System",
    period: "Jul 2026 – Sep 2026",
    status: "completed",
    problemStatement: "Spreadsheet stock tracking causes count mismatches and late reorders, with no single view of suppliers and orders. Built one system for inventory, suppliers, and orders.",
    bullets: [
      "{{c|Modeled}} products, suppliers, warehouses, stock, and orders in a relational {{k|MySQL}} schema, with transactional stock updates so counts stay consistent as orders are placed and received.",
      "{{c|Built}} {{k|REST APIs}} for stock in/out, purchase orders, and low-stock reporting, consumed by a {{k|React}} dashboard."
    ],
    stack: ["React", "Spring Boot", "MySQL"],
    // add real link here when the repo is public
    githubUrl: "",
    // add real link here when the repo is public
    liveUrl: "",
    orbVariant: "chrome-sphere",
    featured: true
  },
  {
    id: "d2car",
    title: "D2Car",
    subtitle: "Car Listings Web Application",
    period: "May 2026 – Aug 2026",
    status: "completed",
    problemStatement: "Buyers compare cars on many criteria, and fixed search needs an endpoint per filter combination. Built a listings platform ({{n|50+}} cars) with search, filtering, and detail pages.",
    bullets: [
      "{{c|Wrote}} one dynamic query that combines any set of optional filters, replacing a separate endpoint per combination.",
      "{{c|Built}} {{n|4+}} {{k|REST APIs}} on an {{k|MVC}} structure (controller, service, repository) for cleaner testing and easier scaling."
    ],
    stack: ["React", "Spring Boot", "MySQL"],
    // add real link here when the repo is public
    githubUrl: "",
    // add real link here when the repo is public
    liveUrl: "",
    orbVariant: "iridescent-ring",
    featured: true
  }
];

export const SKILLS_DATA = {
  backend: {
    category: "Backend Engineering",
    description: "Core server architecture, API design, and ORM pipelines",
    skills: ["Java", "Spring Boot", "Spring MVC", "JPA / Hibernate", "Node.js", "Express.js", "REST APIs", "JWT"],
  },
  frontend: {
    category: "Frontend & UI",
    description: "Component architecture and responsive interactive systems",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Vanilla CSS", "Tailwind CSS"],
  },
  database: {
    category: "Database & Storage",
    description: "Relational schema design, normalization, and querying",
    skills: ["MySQL", "SQL", "Schema Design", "Relational Modeling", "Indexing & Optimization"],
  },
  tools: {
    category: "Tools & Workflow",
    description: "Version control, API testing, design and documentation",
    skills: ["Git", "GitHub", "Postman", "Figma", "BRD / FRD / DFD", "API Specifications", "VS Code", "Vite"],
  },
};

export const ABOUT_HEADING = "Clean backends, from requirements to working APIs.";

export const ABOUT_PARAGRAPHS = [
  "I am a {{c|backend-focused}} {{c|software developer}} who enjoys building clean, reliable APIs and well-structured databases. My core stack is {{k|Java}} with {{k|Spring Boot}} and {{k|Node.js}}, with {{k|React}} for the interfaces.",
  "I am pursuing my B.Tech in Computer Science at {{t|SAGE University}}, {{s|Bhopal}} (CGPA {{n|8.4}}, graduating {{n|2027}}). Right now I am a Java Full Stack Development Intern at {{t|Cybrom Technology}}, working from requirement documents to tested backend modules.",
  "I am looking for entry-level {{c|Software Developer}}, {{c|Backend Developer}} and {{c|Programmer Analyst}} roles where I can build and ship real APIs with a team."
];
