import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home",       path: "/" },
  { name: "About",      path: "/about" },
  { name: "Brand",      path: "/brand" },
  { name: "Collection", path: "/collection" },
  { name: "Content",    path: "/content" },
  { name: "Press",      path: "/press" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#E0E5EC] transition-all duration-300"
        style={{
          boxShadow: scrolled
            ? "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)"
            : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-[70px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-display font-bold text-lg text-[#3D4852] tracking-tight transition-colors duration-300 group-hover:text-[#4C40C0]">
              Muskaan Singh
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4C40C0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E0E5EC] rounded"
                  style={{ color: active ? "#4C40C0" : "#4B5563" }}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4C40C0] rounded-full" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5 min-h-0 h-10"
              style={{ fontSize: "0.8rem", padding: "8px 20px", minHeight: "36px" }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl"
            style={{ boxShadow: "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)" }}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 bg-[#3D4852] rounded-full origin-center"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-4 bg-[#3D4852] rounded-full"
              animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-[#3D4852] rounded-full origin-center"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#E0E5EC] flex flex-col justify-center px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      className="font-display font-bold text-[#3D4852] transition-colors duration-300"
                      style={{ fontSize: "clamp(2rem, 8vw, 3rem)", color: active ? "#4C40C0" : "#3D4852" }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-12 flex flex-col gap-2">
              {["muskaansingh97", "labelmuskaansingh", "_ibtidaofficial_"].map((h) => (
                <a
                  key={h}
                  href={`https://instagram.com/${h}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#4B5563] hover:text-[#4C40C0] transition-colors block py-2"
                >
                  @{h}
                </a>
              ))}
              <Link to="/contact" className="btn-primary mt-6 text-center">Get in Touch</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
