import {
  User,
  Layers,
  Briefcase,
  Atom,
  Braces,
  Code2,
  Palette,
  Route,
  Boxes,
  Database,
  Globe,
  LayoutDashboard,
  Zap,
  FileCode2,
  Component,
  Bot,
  Sparkles,
  GitBranch,
  Github,
  Send,
  Package,
  Terminal,
  BriefcaseBusiness,
  DatabaseZap,
  Cloud,
} from "lucide-react";

export const INITIAL_FORM_FIELDS = {
  name: "",
  mobile: "",
  email: "",
  message: "",
};

export const CONTACT = {
  name: "Pranav Magare",
  designations: ["React Developer", "SAP UI5 Developer"],
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

export const SKILL_GROUPS = [
  {
    label: "React ecosystem",
    color: "ember",
    items: [
      { name: "React.js", icon: Atom },
      { name: "JavaScript (ES6+)", icon: Braces },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Router", icon: Route },
      { name: "Redux Toolkit", icon: Boxes },
      { name: "Context API", icon: Database },
      { name: "Axios", icon: Send },
      { name: "REST API Integration", icon: Globe },
      { name: "Responsive Web Design", icon: LayoutDashboard },
      { name: "Component-Based Architecture", icon: Component },
      { name: "State Management", icon: Database },
      { name: "Performance Optimization", icon: Zap },
    ],
  },

  {
    label: "SAP UI5 ecosystem",
    color: "blue",
    items: [
      { name: "SAP UI5 / Fiori Development", icon: BriefcaseBusiness },
      { name: "SAP Fiori Elements", icon: LayoutDashboard },
      { name: "SAP BTP", icon: Cloud },
      { name: "OData V2 Services", icon: DatabaseZap },
      { name: "MVC Architecture", icon: Boxes },
      { name: "Data Binding", icon: Database },
      { name: "JSONModel", icon: Braces },
      { name: "XML Views", icon: FileCode2 },
      { name: "Fragments", icon: Component },
      { name: "Routing & Navigation", icon: Route },
      { name: "Formatter Functions", icon: Code2 },
    ],
  },

  {
    label: "AI Tools",
    color: "green",
    items: [
      { name: "ChatGPT", icon: Bot },
      { name: "GitHub Copilot", icon: Github },
      { name: "Claude", icon: Sparkles },
      { name: "Google Gemini", icon: Sparkles },
      { name: "Cursor AI", icon: Terminal },
      { name: "Antigravity", icon: Sparkles },
    ],
  },

  {
    label: "Tools & workflow",
    color: "mist",
    items: [
      { name: "VS Code", icon: Code2 },
      { name: "Vite", icon: Zap },
      { name: "SAP Business Application Studio", icon: Terminal },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Postman", icon: Send },
      { name: "Jira", icon: BriefcaseBusiness },
      { name: "npm", icon: Package },
    ],
  },
];

export const PROJECTS = [
  {
    slug: "sales-purchase-order-system",
    name: "Sales & Purchase Order Management System",
    side: "sap",
    tag: "SAP UI5 • Fiori",
    image: "/images/salesPurchase_app_image.png",
    liveDemo: "https://sales-purchase-order-details.vercel.app",
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
    slug: "car-rental-app",
    name: "Car Rental App",
    side: "react",
    tag: "React js",
    image: "/images/carRental_app_image.png",
    liveDemo: "https://car-rental-booking-app.vercel.app",
    desc: "A car rental booking app that makes renting simple. Users pick their rental date, browse a range of available cars, and review their choice before confirming the booking, all in one smooth, guided flow.",
    stack: [
      "React",
      "Redux Toolkit",
      "JavaScript",
      "Date Picker",
      "Tailwind CSS",
    ],
    highlights: [
      "Built a date-selection flow so users can pick their rental period.",
      "Displayed a range of cars for users to browse and select from.",
      "Connected car selection and date choice into a single booking flow.",
      "Designed the UI to make comparing different cars straightforward.",
    ],
  },
  {
    slug: "imagify-ai-image-generator",
    name: "Imagify — AI Image Generator",
    side: "react",
    tag: "React js",
    image: "/images/imageGenerator_app_image.png",
    liveDemo: "https://image-generator-blond.vercel.app",
    desc: "An AI image generator built around a simple, intuitive interface. Users describe what they want in a text prompt, hit generate, and get a unique image back. No design experience or complicated settings needed.",
    stack: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    highlights: [
      "Built an intuitive interface for generating AI images from user-provided text prompts.",
      "Integrated a backend API to process image generation requests and display the generated results.",
      "Implemented a responsive and user-friendly UI for a smooth image generation experience across devices.",
      "Created reusable React components and structured the application for maintainable and scalable frontend development.",
    ],
  },
  {
    slug: "movix-movies-tv-app",
    name: "Movix — Movies & TV Shows App",
    side: "react",
    tag: "React js",
    image: "/images/movies_app_image.png",
    liveDemo: "https://moviex-hub.vercel.app",
    desc: "A movie and TV show details app built around fast search and browsing. Users look up any title, then dive into its cast, release date and other key details. All the data is fetched in real time from a movie database API.",
    stack: ["React", "Redux Toolkit", "JavaScript", "REST API", "Tailwind CSS"],
    highlights: [
      "Built a search experience for finding movies and TV shows quickly.",
      "Displayed full details per title — cast, release date, and other metadata.",
      "Structured API calls to a movie database so details load per selected title.",
      "Designed a browsable layout for exploring titles beyond just search results.",
    ],
  },
  {
    slug: "job-portal",
    name: "Job Portal — Job Search & Recruitment App",
    side: "react",
    tag: "React js",
    image: "/images/jobPortal_app_image.png",
    liveDemo: "https://job-portal-new-mauve.vercel.app",
    desc: "Job portal application for discovering job opportunities, viewing job details, and managing the job search experience through a responsive and user-friendly interface.",
    stack: ["React", "JavaScript", "REST API", "Redux Toolkit", "Tailwind CSS"],
    highlights: [
      "Built a responsive job browsing experience for discovering and exploring available positions.",
      "Created detailed job views to present important information such as job description, requirements, and company details.",
      "Implemented structured search and filtering functionality to help users find relevant job opportunities.",
      "Designed reusable React components and a responsive Tailwind CSS layout for a consistent user experience across devices.",
    ],
  },
  {
    slug: "greencart-grocery-ecommerce",
    name: "GreenCart — Vegetables & Grocery E-Commerce App",
    side: "react",
    tag: "React js",
    image: "/images/greenCart_app_image.png",
    liveDemo: "https://greencart-beta.vercel.app",
    desc: "Full-featured grocery and vegetable e-commerce platform with product browsing, cart management, and checkout, built with React, Redux for state management, and Tailwind CSS for a clean, responsive UI.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "JavaScript", "REST API"],
    highlights: [
      "Built a product catalog for browsing vegetables and groceries with category-based filtering.",
      "Implemented cart management using Redux for predictable, centralized state across the app.",
      "Designed a responsive UI with Tailwind CSS for a fast, clean shopping experience on any device.",
      "Added a checkout flow tying product selection, cart, and order confirmation together.",
      "Structured reusable components to keep the storefront scalable as the product catalog grows.",
    ],
  },
  {
    slug: "smr-enterprise",
    name: "SMR Enterprise - Static",
    side: "react",
    tag: "React js",
    image: "/images/smrEnterprise_image.png",
    liveDemo: "https://smr-enterprises.vercel.app",
    desc: "Business showcase site for a UPVC door and window company, built to present the product range, gallery, and features to prospective customers.",
    stack: [
      "React",
      "Context API",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    highlights: [
      "Built a product showcase for the company's UPVC doors and windows.",
      "Added a gallery section to display finished installations and product photos.",
      "Laid out a features section explaining what sets the products apart.",
      "Made the site fully responsive for visitors browsing on mobile.",
    ],
  },
  {
    slug: "skoodio-reaction-video-platform",
    name: "Skoodio - Reaction Video Platform",
    side: "react",
    tag: "React js",
    image: "",
    liveDemo: "",
    desc: "User-friendly platform UI for recording and viewing reaction videos, including navigation components, recording controls, and drawing and screen-sharing features.",
    stack: [
      "React",
      "Redux Toolkit",
      "JavaScript",
      "Screen Sharing API",
      "Canvas",
      "CSS",
    ],
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
    image: "",
    liveDemo: "",
    desc: "Appointment booking and employee management system with a UI built directly from client requirements, designed for a smooth day-to-day customer experience.",
    stack: ["React", "Redux Toolkit", "JavaScript", "CSS"],
    highlights: [
      "Built appointment booking pages so customers and staff could manage schedules easily.",
      "Created employee record management for tracking staff and shifts.",
      "Implemented the UI directly from client requirements, prioritizing a smooth day-to-day experience.",
    ],
  },
];
export const HIGHLIGHTS = [
  { value: "3+", label: "Years of frontend experience" },
  { value: PROJECTS?.length, label: "Projects Built" },
  { value: "2", label: "Frontend worlds — React & SAP UI5" },
];

export const EXPERIENCE = [
  {
    role: "React Developer | SAP UI5 Developer",
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
      "Built interactive user interfaces using React, JavaScript, HTML5, and CSS for multiple client projects.",
      "Converted UI/UX designs into responsive, pixel-perfect web pages with a focus on usability and accessibility.",
      "Identified and resolved frontend bugs, improving application stability and overall user experience.",
      "Collaborated with team members using Git and followed industry best practices for clean, maintainable code.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications",
  college: "C. D. Jain College of Commerce",
  university: "Pune University",
  period: "Jun '19",
};

export const CONTACT_STEPS = [
  {
    n: "01",
    title: "Send a Message",
    desc: "Share a few details about your project, goals, and what you’re looking to build.",
  },
  {
    n: "02",
    title: "I’ll Review It",
    desc: "I personally review every message and will get back to you with a thoughtful response typically within the same day.",
  },
  {
    n: "03",
    title: "Let’s Connect",
    desc: "If it looks like a good fit, we’ll find a convenient time for a quick call and discuss the next steps",
  },
];

export const REACT_CODE = `import React from "react";

export const Button = ({ label, onPress }) => {

  return (
    <button
      onClick={onPress}
    >
      {label}
    </button>
  );
}`;

export const UI5_CODE = `<mvc:View
  controllerName="app.controller.Button"
  xmlns="sap.m"
  xmlns:mvc="sap.ui.core.mvc">
  <Button
    text="Submit"
    type="Emphasized"
    press="onSubmitPress"
  />
</mvc:View>`;

export const ACCENTS = {
  react: {
    text: "text-ember",
    bg: "bg-ember/10",
    border: "border-emberdim",
    hoverBorder: "hover:border-ember/60",
    bar: "from-ember/70 via-ember/20 to-transparent",
    glow: "from-ember/10",
    dot: "bg-ember",
    arrow: "group-hover:text-ember",
    ring: "focus-visible:ring-ember/60",
  },
  sap: {
    text: "text-blue",
    bg: "bg-blue/10",
    border: "border-bluedim",
    hoverBorder: "hover:border-blue/60",
    bar: "from-blue/70 via-blue/20 to-transparent",
    glow: "from-blue/10",
    dot: "bg-blue",
    arrow: "group-hover:text-blue",
    ring: "focus-visible:ring-blue/60",
  },
};
