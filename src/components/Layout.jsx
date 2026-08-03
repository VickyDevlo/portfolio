import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../shared/ScrollToTop";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};
