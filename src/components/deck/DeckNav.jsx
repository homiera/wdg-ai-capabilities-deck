import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Perspective", href: "#perspective" },
  { label: "Platform & CMS", href: "#cms" },
  { label: "Search", href: "#search" },
  { label: "Marketing", href: "#marketing" },
  { label: "Strategy", href: "#strategy" },
  { label: "Contact", href: "#contact" },
];

export default function DeckNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b2cf11c7b190e6231185ca/dc27584f2_logowhitelarge2x.png"
          alt="WDG an Agital Company"
          className="h-14 mt-3"
        />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-xs tracking-wider uppercase transition-colors duration-300 hover:opacity-100 ${
                scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/50 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${scrolled ? 'text-gray-900' : 'text-white'}`}
        >
          <span className={`block w-5 h-px transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block text-sm text-gray-600 hover:text-gray-900 py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}