import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Router } from "./components/Router";
import { useTheme } from "./context/ThemeContext";
import { useScrollToTop } from "./hooks/useScrollUp";
import PageUp from "./shared/pageUp/PageUp";

function App() {
  const { isDarkMode } = useTheme();
  useScrollToTop();

  return (
    <div
      className={` transition-colors duration-500 ${
        isDarkMode ? "bg-darkBg text-darkText" : "bg-lightBg text-lightText"
      }`}
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
