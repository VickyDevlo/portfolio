import { User, Layers, Briefcase } from "lucide-react";

export const CONTACT = {
  name: "Pranav Magare",
  title: "React Developer • SAP UI5 Developer",
  email: "pranavmagare3011@gmail.com",
  phone: "+91 83789 01217",
  phoneHref: "+918378901217",
  linkedin: "https://linkedin.com/in/pranav-magare",
};

export const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];
export const EXPLORE_LINKS = [
  {
    to: "/about",
    title: "About Me",
    desc: "Get to know my journey, passion, and approach to building modern web applications.",
    icon: User,
    accent: "ember",
  },
  {
    to: "/skills",
    title: "Skills",
    desc: "Explore my expertise in React, SAP UI5, JavaScript, and frontend technologies.",
    icon: Layers,
    accent: "blue",
  },
  {
    to: "/experience",
    title: "Experience",
    desc: "Discover my 3+ years of delivering scalable solutions across freelance and professional projects.",
    icon: Briefcase,
    accent: "ember",
  },
];

export const HIGHLIGHTS = [
  { value: "3+", label: "Years of frontend experience" },
  { value: "6", label: "Shipped projects" },
  { value: "2", label: "Frontend worlds — React & SAP UI5" },
];

export const SKILL_GROUPS = [
  {
    label: "React ecosystem",
    color: "ember",
    items: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Context API",
      "Redux Toolkit",
      "Axios",
      "API Integration",
      "Responsive Web Design",
      "Performance Optimization",
    ],
  },
  {
    label: "SAP UI5 ecosystem",
    color: "blue",
    items: [
      "SAP UI5 / Fiori Development",
      "SAP Fiori Elements",
      "OData Services",
      "MVC Architecture",
      "JSONModel & Fragments",
    ],
  },
  {
    label: "Tools & workflow",
    color: "mist",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "SAP Business Application Studio",
      "Jira",
      "Google Workspace",
    ],
  },
];

export const PROJECTS = [
  {
    slug: "sales-purchase-order-system",
    name: "Sales & Purchase Order Management System",
    side: "sap",
    tag: "SAP UI5 · Fiori",
    desc: "Responsive Sales and Purchase Order system built on SAP UI5 following Fiori design principles — MVC architecture, JSONModel, routing, fragments, formatters, filtering, sorting, and Excel export.",
    stack: [
      "SAP UI5",
      "Fiori Elements",
      "JSONModel",
      "Routing",
      "Excel Export",
    ],
    highlights: [
      "Built on SAP UI5 following SAP Fiori design principles for a consistent enterprise look and feel.",
      "Implemented MVC architecture with JSONModel for clean separation of data and view logic.",
      "Added routing and fragments to structure multi-screen navigation within a single app.",
      "Built custom formatters, filtering, and sorting for fast data lookup across large order lists.",
      "Added Excel export so users can pull order data out for offline reporting.",
    ],
  },
  {
    slug: "skoodio",
    name: "Skoodio — Reaction Video Platform",
    side: "react",
    tag: "React js",
    desc: "User-friendly platform UI for recording and viewing reaction videos, including navigation components, recording controls, and drawing and screen-sharing features.",
    stack: ["React", "JavaScript", "Screen Sharing API", "Canvas"],
    highlights: [
      "Designed a user-friendly layout for recording and viewing reaction videos.",
      "Built the navigation components tying the recording and viewing flows together.",
      "Implemented recording controls for starting, stopping, and managing takes.",
      "Added drawing and screen-sharing features on top of the video experience.",
    ],
  },
  {
    slug: "salon-management-system",
    name: "Salon Management System",
    side: "react",
    tag: "React js",
    desc: "Appointment booking and employee management system with a UI built directly from client requirements, designed for a smooth day-to-day customer experience.",
    stack: ["React", "JavaScript", "CSS3"],
    highlights: [
      "Built appointment booking pages so customers and staff could manage schedules easily.",
      "Created employee record management for tracking staff and shifts.",
      "Implemented the UI directly from client requirements, prioritizing a smooth day-to-day experience.",
    ],
  },
  {
    slug: "movix-movies-tv-app",
    name: "Movix — Movies & TV Shows App",
    side: "react",
    tag: "React js",
    desc: "Movie and TV show details app for browsing and searching titles, with cast, release dates, and other details pulled through a movie database API.",
    stack: ["React", "JavaScript", "REST API", "CSS3"],
    highlights: [
      "Built a search experience for finding movies and TV shows quickly.",
      "Displayed full details per title — cast, release date, and other metadata.",
      "Structured API calls to a movie database so details load per selected title.",
      "Designed a browsable layout for exploring titles beyond just search results.",
    ],
  },
  {
    slug: "smr-enterprise",
    name: "SMR Enterprise",
    side: "react",
    tag: "React js",
    desc: "Business showcase site for a UPVC door and window company, built to present the product range, gallery, and features to prospective customers.",
    stack: ["React", "JavaScript", "CSS3", "Responsive Web Design"],
    highlights: [
      "Built a product showcase for the company's UPVC doors and windows.",
      "Added a gallery section to display finished installations and product photos.",
      "Laid out a features section explaining what sets the products apart.",
      "Made the site fully responsive for visitors browsing on mobile.",
    ],
  },
  {
    slug: "car-rental-app",
    name: "Car Rental App",
    side: "react",
    tag: "React js",
    desc: "Car booking app where users pick a rental date and choose from a range of available cars before confirming a booking.",
    stack: ["React", "JavaScript", "Date Picker", "CSS3"],
    highlights: [
      "Built a date-selection flow so users can pick their rental period.",
      "Displayed a range of cars for users to browse and select from.",
      "Connected car selection and date choice into a single booking flow.",
      "Designed the UI to make comparing different cars straightforward.",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "SAP UI5 | React Developer",
    org: "Freelance",
    location: "Remote",
    period: "Jan '24 — Present",
    bullets: [
      "Built modern React applications with reusable components, responsive layouts, and clean, maintainable architecture.",
      "Developed SAP UI5/Fiori applications using MVC, XML Views, JSONModel, data binding, routing, and reusable fragments.",
      "Integrated REST APIs and optimized application performance to deliver smooth user experiences across devices.",
      "Collaborated with clients to understand business requirements, deliver production-ready solutions, and manage source code with Git.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Galaxy Weblinks Ltd.",
    location: "Indore, India",
    period: "May '22 — Jun '23",
    bullets: [
      "Developed scalable React applications with reusable UI components and responsive, cross-browser compatible interfaces.",
      "Integrated frontend applications with REST APIs while collaborating closely with backend developers to deliver end-to-end features.",
      "Improved application performance by optimizing component rendering, reducing unnecessary re-renders, and enhancing load times.",
      "Participated in Agile ceremonies, code reviews, and sprint planning to ensure high-quality software delivery.",
    ],
  },
  {
    role: "React Developer",
    org: "Saffire Softtech",
    location: "Pune, India",
    period: "Jan '21 — Mar '22",
    bullets: [
      "Built interactive user interfaces using React, JavaScript, HTML5, and CSS3 for multiple client projects.",
      "Converted UI/UX designs into responsive, pixel-perfect web pages with a focus on usability and accessibility.",
      "Identified and resolved frontend bugs, improving application stability and overall user experience.",
      "Collaborated with team members using Git and followed industry best practices for clean, maintainable code.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications",
  school: "C. D. Jain College of Commerce, Pune University",
  period: "Jun '19",
};
