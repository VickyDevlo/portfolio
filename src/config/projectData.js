import movixPic from "../assets/SharedScreenshot_movies.png";
import imagifyPic from "../assets/SharedScreenshot_imagify.png";
import InterviewSchedulePic from "../assets/SharedScreenshot_interview-scheduler.jpg";
import SMRPic from "../assets/SharedScreenshot_smr.jpg";
import JobPortalPic from "../assets/SharedScreenshot_jobPortal.png";
import OtpVerification from "../assets/SharedScreenshototpGenerator.jpg";

export const projectData = [
  {
    id: 1,
    title: "SMR Enterprise",
    description:
      "Premium uPVC doors & windows for homes & businesses. Durable, energy-efficient & stylish solutions. Contact us today!",
    image: SMRPic,
    demoLink: "https://smrenterprise.com",
  },
  {
    id: 2,
    title: "Schedule Interview",
    description:
      "Candidate & Interviewer Management - Easily add, update, and remove candidates and interviewers.",
    image: InterviewSchedulePic,
    demoLink: "https://interview-scheduler-indol.vercel.app/dashboard",
  },
  {
    id: 3,
    title: "Explore Top IT Jobs",
    description:
      "Find the best IT job opportunities in software development, cybersecurity, data science, and more. Connect with leading tech companies and build your dream. Start applying today!",
    image: JobPortalPic,
    demoLink: "https://job-portal-new-mauve.vercel.app",
  },
  {
    id: 4,
    title: "OTP Verification",
    description:
      "Enhance your application's security with reliable and easy-to-integrate OTP (One-Time Password) verification",
    image: OtpVerification,
    demoLink: "https://otp-generator-sigma.vercel.app",
  },
  {
    id: 5,
    title: "Imagify",
    description:
      "Turn your imagination into visual art in seconds - just type, and watch the magic happen",
    image: imagifyPic,
    demoLink: "https://image-generator-blond.vercel.app",
  },
  {
    id: 6,
    title: "Movix: Movies & Tv Shows App",
    description:
      "Explore the latest movies, binge-worthy TV shows, and detailed info about your favorite titles—all in one place.",
    image: movixPic,
    demoLink: "https://movies-five-wheat.vercel.app",
  },
];

export default projectData;