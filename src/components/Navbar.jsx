import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS, CONTACT } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active text-blue" : "text-mist"}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-panel/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 sm:py-6 relative">
        <NavLink
          to="/"
          className="flex items-center justify-center h-10 w-10 rounded-full
           bg-ember text-ink font-bold"
        >
          PM
        </NavLink>
        <div className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-blue text-paper"
        >
          <span className="hidden md:inline">Get in touch</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
        <button
          className="sm:hidden p-2 rounded-lg border border-mistdim"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X size={18} className="text-paper" />
          ) : (
            <Menu size={18} className="text-paper" />
          )}
        </button>
        <div
          className="sm:hidden absolute left-0 right-0 top-full rounded-xl border border-mist/20 bg-panel font-mono text-sm uppercase tracking-widest flex flex-col overflow-hidden z-20"
          style={{
            maxHeight: open ? "320px" : "0px",
            opacity: open ? 1 : 0,
            transition: "max-height 0.25s ease, opacity 0.2s ease",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `px-5 py-3 border-b border-mist/10 ${isActive ? "text-blue" : "text-mist"}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
