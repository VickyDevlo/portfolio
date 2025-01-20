import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Router } from "./components/Router";
import { useTheme } from "./context/ThemeContext";
import { useScrollToTop } from "./hooks/useScrollUp";
import PageUp from "./shared/pageUp/PageUp";
import pranav_resume from './assets/pranav_resume.pdf'

function App() {
  const { isDarkMode } = useTheme();
  useScrollToTop();
console.log('pranav_resume:', pranav_resume);

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
