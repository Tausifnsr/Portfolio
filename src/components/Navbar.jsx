import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteData";
import Logo from "./Logo";

export default function Navbar({ onCommand }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -52%" },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <nav className="nav-shell" aria-label="Main navigation">
      <div className="nav-inner">
        <button
          className="logo-button"
          onClick={() => go("home")}
          aria-label="Go home"
        >
          <Logo compact />
        </button>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <button
              className={active === item.toLowerCase() ? "active" : ""}
              onClick={() => go(item.toLowerCase())}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="command-hint" onClick={onCommand}>
            ⌘ K
          </button>
          <button className="button button-small" onClick={() => go("contact")}>
            Let’s Talk <span>↗</span>
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item) => (
              <button onClick={() => go(item.toLowerCase())} key={item}>
                {item}
                <span>0{navItems.indexOf(item) + 1}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
