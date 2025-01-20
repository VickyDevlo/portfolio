import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Router } from "./components/Router";
import { useTheme } from "./context/ThemeContext";
import { useScrollToTop } from "./hooks/useScrollUp";
import PageUp from "./shared/pageUp/PageUp";
import {resume as pranav_resume} from "./assets/resume.pdf";

function App() {
  console.log("pranav", pranav_resume);
  const { isDarkMode } = useTheme();
  useScrollToTop();

  return (
    <div
      className={`${
        isDarkMode ? "bg-darkBg text-darkText" : "bg-lightBg text-lightText"
      } transition-colors duration-500 `}
    >
      <Header />
      <main>
        <PageUp />
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
