import movixPic from "../assets/SharedScreenshot_movies.jpg";
import imagifyPic from "../assets/SharedScreenshot_imagify.jpg";
import smrPic from "../assets/SharedScreenshot_smr.jpg";
import JobPortalPic from "../assets/SharedScreenshot_jobPortal.jpg";

export const projectData = [
  {
    id: 1,
    title: "Explore Top IT Jobs",
    description:
      "Find the best IT job opportunities in software development, cybersecurity, data science, and more. Connect with leading tech companies and build your dream. Start applying today!",
    image: JobPortalPic,
    demoLink: "https://job-portal-new-mauve.vercel.app",
  },
  {
    id: 2,
    title: "Imagify",
    description:
      "Turn your imagination into visual art in seconds - just type, and watch the magic happen",
    image: imagifyPic,
    demoLink: "https://image-generator-blond.vercel.app",
  },
  {
    id: 3,
    title: "Movix: Movies & Tv Shows App",
    description:
      "Explore the latest movies, binge-worthy TV shows, and detailed info about your favorite titles—all in one place.",
    image: movixPic,
    demoLink: "https://movies-five-wheat.vercel.app",
  },
  {
    id: 4,
    title: "SMR Enterprise Quality Glass Solutions",
    description: "Premium glass doors and windows designed for modern living.",
    image: smrPic,
    demoLink: "https://smr-enterprise.vercel.app",
  },
];

export default projectData;
