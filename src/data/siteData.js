// Replace placeholder URLs/contact details here before publishing.
export const developer = {
  name: "Md Tausif Ansari",
  initials: "TA",
  email: "mdtausifnsr9@gmail.com",
  phone: "+91-9523766136",
  whatsapp: "https://wa.me/919523766136",
  location: "India · Available remotely",
  role: "Frontend & Mobile Application Developer",
  resume: "/resume-placeholder.txt",
  social: {
    github: "https://github.com/Tausifnsr",
    linkedin: "https://linkedin.com/in/md-tausif-ansari",
  },
};

export const navItems = [
  "Home",
  "About",
  "Work",
  "Experience",
  "Skills",
  "Services",
  "Contact",
];

export const snapshot = [
  ["Web Applications", "ReactJS"],
  ["Mobile Applications", "React Native"],
  ["Backend", "Django / Node.js"],
  ["Infrastructure", "Docker / Nginx"],
  ["Databases", "PostgreSQL / MongoDB / Firebase"],
];

export const projects = [
  {
    slug: "school-erp",
    title: "ComTech School ERP",
    short: "School ERP",
    category: "Education Management Platform",
    type: "web",
    flagship: true,
    description:
      "A comprehensive administration platform that brings a school’s daily academic, operational and financial workflows into one secure system.",
    problem:
      "Schools often run admissions, attendance, fees, payroll and reporting across disconnected tools, creating duplicate work and limited visibility.",
    solution:
      "A role-aware, multi-branch ERP that connects academic and administrative workflows while keeping every team focused on the actions relevant to them.",
    features: [
      "Student Management",
      "Admissions",
      "Attendance",
      "Academic Management",
      "Fee Collection",
      "Finance & Payroll",
      "Exams & Library",
      "Transport & Hostel",
      "Reports",
      "Role-Based Access",
      "Multi-Branch Management",
    ],
    roles: [
      "Super Admin",
      "Principal",
      "Accountant",
      "Teacher",
      "HR Manager",
      "Transport Manager",
      "Hostel Manager",
    ],
    technologies: [
      "ReactJS",
      "Django",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "Redis",
      "Celery",
      "Cloudflare",
      "Ubuntu",
    ],
    involvement: [
      "Product planning",
      "Frontend development",
      "Backend integration",
      "ERP workflows",
      "Role permissions",
      "Deployment",
      "Production troubleshooting",
    ],
    outcome:
      "A scalable foundation for digitizing school operations, structured for multiple branches, complex permissions and high-volume reporting.",
    accent: "blue",
  },
  {
    slug: "vyaparsetu",
    title: "VyaparSetu",
    short: "VyaparSetu",
    category: "Business ERP & Inventory Platform",
    type: "web",
    flagship: true,
    description:
      "A centralized B2B operations platform for inventory, vendors, branches, payments and financial workflows.",
    problem:
      "Growing businesses lose margin and momentum when stock, vendors, branch operations and lending live in separate spreadsheets and tools.",
    solution:
      "A unified business workspace with operational alerts, actionable inventory intelligence and connected finance workflows.",
    features: [
      "Material Management",
      "Point of Sale",
      "Warehouse Tracking",
      "Vendor Management",
      "Tax & Finance",
      "Branch Management",
      "Payment Management",
      "Lending",
      "Inventory Alerts",
      "Invoice Generation",
      "Reporting",
    ],
    roles: [
      "Business Owner",
      "Branch Manager",
      "Warehouse Staff",
      "Accountant",
    ],
    technologies: ["React", "Python", "Django", "REST APIs", "SQL"],
    involvement: [
      "Workflow architecture",
      "Frontend engineering",
      "API integration",
      "Business logic implementation",
    ],
    outcome:
      "A clearer operational picture for businesses managing inventory, money and vendors across locations.",
    accent: "violet",
  },
  {
    slug: "doxzon",
    title: "DOXZON Healthcare Ecosystem",
    short: "DOXZON",
    category: "Healthcare & Medical Applications",
    type: "mobile",
    flagship: true,
    description:
      "A connected, multi-application healthcare ecosystem designed around patients, doctors, pharmacies and care delivery.",
    problem:
      "Healthcare journeys fragment quickly across booking, consultation, records, prescriptions, pharmacies, reminders and payments.",
    solution:
      "Specialized mobile experiences connected through shared services and APIs, giving each participant the right workflow without losing continuity of care.",
    features: [
      "Patient & Doctor Apps",
      "Pharmacy",
      "Appointment Scheduling",
      "Video Consultation",
      "Home Visits",
      "Medical Records",
      "Vaccinations",
      "Prescriptions",
      "Medication Reminders",
      "Payments",
      "Notifications",
      "Device Data Integration",
    ],
    roles: ["Patient", "Doctor", "Pharmacist", "Administrator"],
    technologies: [
      "React Native",
      "REST APIs",
      "Firebase",
      "Spring Boot Integration",
    ],
    involvement: [
      "Mobile UI development",
      "API integration",
      "Healthcare workflows",
      "Device testing",
      "Production troubleshooting",
    ],
    outcome:
      "A modular mobile product ecosystem built to support multiple care journeys and healthcare roles.",
    accent: "cyan",
  },
  {
    slug: "therapy-management",
    title: "Therapy Slot Management",
    short: "Therapy App",
    category: "Healthcare Operations App",
    type: "mobile",
    flagship: true,
    description:
      "A React Native operations app for therapy centers to coordinate students, therapists and appointment slots.",
    problem:
      "Therapy centers need flexible session lengths, clear daily schedules and simple coordination between administrators, receptionists and therapists.",
    solution:
      "A role-based mobile workflow for creating sessions, managing availability and sharing the day’s schedule directly through WhatsApp.",
    features: [
      "Student Management",
      "Therapist Management",
      "Slot Scheduling",
      "Custom Session Duration",
      "Daily Schedules",
      "WhatsApp Sharing",
      "Role-Based Access",
    ],
    roles: ["Admin", "Therapist", "Receptionist"],
    technologies: ["React Native CLI", "Python", "Django", "REST APIs"],
    involvement: [
      "Mobile development",
      "Scheduling UX",
      "Backend integration",
      "Role workflows",
    ],
    outcome:
      "A focused operational tool that reduces scheduling friction and keeps center teams aligned throughout the day.",
    accent: "amber",
  },
  {
    slug: "comtech-solutions",
    title: "ComTech Solutions",
    short: "ComTech",
    category: "Technology Services Platform",
    type: "web",
    flagship: true,
    description:
      "A technology initiative delivering websites, mobile apps, ERP platforms and digital transformation solutions for businesses.",
    problem:
      "Organizations need a dependable technical partner who can translate business goals into usable, maintainable software.",
    solution:
      "End-to-end product delivery spanning discovery, UX implementation, application engineering, integration and production deployment.",
    features: [
      "Website Development",
      "Mobile Apps",
      "ERP Software",
      "UI/UX Development",
      "Business Software",
      "Digital Transformation",
      "SEO",
      "Digital Marketing",
    ],
    roles: ["Product Developer", "Technical Partner"],
    technologies: ["ReactJS", "React Native", "Django", "Cloud Infrastructure"],
    involvement: [
      "Product development",
      "Client software",
      "Mobile applications",
      "Deployment",
      "Technical problem-solving",
    ],
    outcome:
      "A practical product and technology partner for organizations moving critical workflows into software.",
    accent: "pink",
  },
];

export const moreProjects = [
  {
    title: "Decorica E-Commerce",
    type: "Web",
    award: "Best Project Award",
    description:
      "Responsive product catalogue and shopping workflow with backend API integration.",
    technologies: ["ReactJS", "Tailwind CSS", "Spring Boot", "SQL"],
  },
  {
    title: "Kenko",
    type: "Web",
    description:
      "Modern React interface focused on responsive implementation and polished interaction.",
    technologies: ["ReactJS", "Responsive UI"],
  },
  {
    title: "Vetszon Doctor",
    type: "Mobile",
    description:
      "Mobile workflows designed for veterinary doctors and clinical operations.",
    technologies: ["React Native", "REST APIs"],
  },
  {
    title: "Vetszon Groomer",
    type: "Mobile",
    description:
      "Service-provider application for grooming bookings and daily operations.",
    technologies: ["React Native", "Mobile UX"],
  },
  {
    title: "Business Portals",
    type: "Platforms",
    description:
      "Dashboards and internal tools built around real operational workflows.",
    technologies: ["ReactJS", "APIs", "Role Access"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native CLI", "Android", "iOS", "React Navigation"],
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Firestore", "SQL"],
  },
  {
    title: "DevOps & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "Ubuntu Server",
      "Cloudflare",
      "Vercel",
      "Hostinger",
    ],
  },
  {
    title: "Product Development",
    skills: [
      "ERP Architecture",
      "Dashboard Development",
      "Role-Based Access",
      "API Integration",
      "Business Workflows",
    ],
  },
];

export const services = [
  [
    "Web Application Development",
    "Modern ReactJS web applications and SaaS products.",
  ],
  [
    "Mobile App Development",
    "Cross-platform Android and iOS applications using React Native.",
  ],
  [
    "ERP Development",
    "Custom ERP platforms for schools, businesses and organizations.",
  ],
  [
    "Dashboard Development",
    "Admin dashboards, analytics panels and management interfaces.",
  ],
  [
    "API Integration",
    "Reliable frontend integration with REST APIs and backend systems.",
  ],
  [
    "Product Development",
    "From workflow planning through engineering and production deployment.",
  ],
];
