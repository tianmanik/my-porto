// ============================================================================
// Portfolio Data — Edit this file to personalize your portfolio.
// All content shown across the site is driven by the exports below, so you
// never need to touch component logic to update your information.
// ============================================================================

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'twitter';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatCard {
  label: string;
  value: string;
  icon: 'briefcase' | 'folder-git' | 'code-2' | 'coffee';
}

export interface ExperienceItem {
  company: string;
  role: string;
  timeline: string;
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: 'server' | 'layout' | 'wrench' | 'database';
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  emoji: string;
  accent: string;
}

export interface PortfolioData {
  profilePicUrl:string;
  name: string;
  initials: string;
  role: string;
  tagline: string;
  intro: string;
  location: string;
  email: string;
  website: string;
  cvUrl: string;
  social: SocialLink[];
  nav: NavItem[];
  stats: StatCard[];
  about: string[];
  experience: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: Project[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profilePicUrl :'assets/images/profpic.jpg',
  name: 'Andreas Cristian Manik',
  initials: 'ACM',
  role: 'Backend / Fullstack Software Engineer',
  tagline: 'I build robust, scalable systems and the interfaces that sit on top of them.',
  intro:
    "I'm a Fullstack Developer dedicated to engineering robust, high-performance web applications from end to end. Leveraging modern frameworks like Angular alongside solid Java backend systems, I strive to deliver clean code, seamless user experiences, and impactful software solutions.",
  location: 'Jakarta, Indonesia',
  email: 'cristian.andreas24@gmail.comm',
  website: 'https://tianmanik.dev',
  cvUrl: '#',
  social: [
    // { label: 'GitHub', url: 'https://github.com', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/andreasmanik/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:cristian.andreas24@gmail.com', icon: 'mail' },
  ],
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  stats: [
    { label: 'Years of Experience', value: '4+', icon: 'briefcase' },
    { label: 'Projects Completed', value: '10+', icon: 'folder-git' },
    { label: 'Core Tech Stack', value: '5', icon: 'code-2' },
    { label: 'Coffees Consumed', value: '∞', icon: 'coffee' },
  ],
  about: [
    "I'm a result-oriented Fullstack Software Engineer with 4+ years of experience, " +
    "specializing in backend systems (Java Spring Boot, Quarkus) and robust frontends with Angular. " +
    "I focus on building, scaling, and modernizing enterprise web applications and microservices architecture.",
    "My approach is pragmatic: I value clean architecture, secure RESTful API integrations, " +
    "and optimized relational databases like Oracle and PostgreSQL. " +
    "From migrating legacy monoliths to high-performance frameworks to engineering core systems in fintech and insurance, " +
    "I deliver scalable solutions that drive real business impact[cite: 1].",
  ],
  experience: [
    {
      company: 'PT PFI MEGA LIFE',
      role: 'IT Application Officer',
      timeline: 'Oct 2024 — Present',
      location: 'Jakarta, Indonesia',
      description:
        'Engineered and modernized core insurance systems, POS applications, and claim management platforms.',
      responsibilities: [
        'Led the core system remake from legacy architecture to a modern web platform using Spring Boot, Angular, and Docker',
        'Optimized Oracle database performance and complex PL/SQL Stored Procedures for high-volume claim processing and validation',
        'Developed cross-platform mobile POS apps (iOS) using Ionic and Angular integrated with secure Spring Boot REST APIs',
      ],
      techStack: ['Java', 'Spring Boot', 'Angular', 'Ionic', 'Oracle DB', 'PL/SQL', 'Docker', 'CI/CD'],
      current: true,
    },
    {
      company: 'PT MANDALA MULTIFINANCE',
      role: 'Backend Developer',
      timeline: 'Jun 2024 — Oct 2024',
      location: 'Jakarta, Indonesia',
      description:
        'Developed high-throughput backend services and messaging pipelines for collateral and financial administrative web portals.',
      responsibilities: [
        'Engineered scalable REST APIs using Java Quarkus integrated with PostgreSQL for core financial management modules',
        'Implemented Apache Kafka for asynchronous messaging and Redis caching, substantially reducing system overhead and latency',
        'Containerized microservices with Docker to ensure consistent deployment environments across dev, UAT, and production',
      ],
      techStack: ['Java', 'Quarkus', 'PostgreSQL', 'Apache Kafka', 'Redis', 'Docker', 'REST API'],
    },
    {
      company: 'PT TIGA DAYA DIGITAL INDONESIA',
      role: 'Fullstack Software Engineer',
      timeline: 'Jun 2022 — Jun 2024',
      location: 'Jakarta, Indonesia',
      description:
        'Architected distributed microservices and enterprise web applications across fintech and operational domains.',
      responsibilities: [
        'Migrated enterprise legacy applications from Spring Boot to Quarkus, significantly reducing startup times and memory footprint',
        'Designed a distributed debt collector super app using Spring Boot, Netflix Eureka service discovery, MongoDB, and PostgreSQL',
        'Built live vehicle tracking and operational management systems with Angular frontends and optimized Oracle database layers',
      ],
      techStack: ['Java', 'Spring Boot', 'Quarkus', 'Angular', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'Eureka'],
    },
  ],
  skillCategories: [
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        'Java',
        'Spring Boot',
        'Quarkus',
        'PHP (Laravel)',
        'RESTful APIs',
        'Microservices',
        'PL/SQL Stored Procedures',
      ],
    },
    {
      title: 'Frontend & Mobile',
      icon: 'layout',
      skills: [
        'Angular',
        'AngularJS',
        'Ionic',
        'JavaScript / TypeScript',
        'HTML5 / CSS3',
        'Responsive Design',
      ],
    },
    {
      title: 'Databases & Infrastructure',
      icon: 'database',
      skills: [
        'Oracle DB',
        'PostgreSQL',
        'MongoDB',
        'MariaDB',
        'Redis',
        'Apache Kafka',
        'Docker',
        'CI/CD & Git',
      ],
    },
  ],
  projects: [
    {
      title: 'Core System Life Insurance',
      description:
        'Redeveloped a legacy core life insurance platform into a modern web architecture, covering policy management, underwriting, premium calculations, and billing.',
      techStack: ['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'Docker', 'CI/CD'],
      emoji: '🛡️',
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Super App (Debt Collector)',
      description:
        'Engineered a scalable microservices architecture for distributed financial operations, featuring hybrid storage for document logs and transactional data.',
      techStack: ['Java', 'Spring Boot', 'Netflix Eureka', 'MongoDB', 'PostgreSQL'],
      emoji: '📱',
      accent: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Imago & Satria POS System',
      description:
        'Built multi-tenant Point of Sales applications tailored for both conventional and Sharia-compliant financial products with mobile iOS support.',
      techStack: ['Angular', 'Ionic', 'Java Spring Boot', 'Oracle DB', 'PL/SQL'],
      emoji: '💳',
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Claim Management System',
      description:
        'Developed an enterprise claim processing engine with complex Oracle Stored Procedures for validation workflows and automated financial calculations.',
      techStack: ['Java Spring Boot', 'Oracle DB', 'PL/SQL', 'REST API'],
      emoji: '📋',
      accent: 'from-rose-500 to-pink-500',
    },
    {
      title: 'FM Unit Identification System',
      description:
        'Built a real-time vehicle tracking and asset management platform with responsive web UI and mobile integration REST APIs.',
      techStack: ['Java Spring Boot', 'Angular', 'Oracle DB', 'REST API'],
      emoji: '🚛',
      accent: 'from-amber-500 to-orange-500',
    },
    {
      title: 'IDI Tangerang Web Portal',
      description:
        'Engineered a membership registration and management web application with secure Role-Based Access Control (RBAC).',
      techStack: ['PHP', 'Laravel', 'PostgreSQL', 'RBAC'],
      emoji: '🏥',
      accent: 'from-sky-500 to-cyan-500',
    },
  ],
};
