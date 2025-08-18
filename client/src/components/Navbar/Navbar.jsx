import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import i1 from "./i1.png";

// --- Data for Navigation Links ---
const navLinks = [
  { title: "Home", href: "#Hero" },
  { title: "Feature", href: "#feature" },
  { title: "About", href: "#about" },
  { title: "Highlights", href: "#highlight" },
  { title: "FAQ", href: "#Faq" },
  { title: "Clients", href: "#testimonials" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const id = sectionId.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-gray-900/80 text-white shadow-md backdrop-blur-lg" // <-- CHANGE: Swapped white for dark background
            : "bg-transparent text-white"
        }`}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="/" className="flex-shrink-0">
              <img src={i1} alt="Logo" className="h-20 w-auto" />
            </a>

            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={() => scrollToSection(link.href)}
                  // <-- CHANGE: Link color now becomes a soft white on scroll
                  className={`transition-colors hover:text-indigo-500 ${isScrolled ? 'text-gray-200' : 'text-white'}`}
                >
                  {link.title}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </button>
              <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Apply For Registration
              </button>
            </div>

            <div className="md:hidden">
              <motion.button
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                // <-- CHANGE: Hamburger icon is now always white
                className={`p-2 rounded-md text-white`}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      
   
      {/* --- Animated Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-[calc(100%-3rem)] bg-white p-6 md:hidden" // Adjusted width
            >
              <div className="flex flex-col space-y-8"> {/* Increased spacing */}
                
                {/* --- NEW: Menu Header with Logo and Close Button --- */}
                <div className="flex items-center justify-between">
                  <a href="/" className="self-start">
                    <img src={i1} alt="Logo" className="h-12 w-auto" />
                  </a>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* --- Navigation Links --- */}
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.title}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors py-1"
                    >
                      {link.title}
                    </button>
                  ))}
                </nav>

                {/* --- Buttons --- */}
                <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col space-y-3">
                   <button className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                     Apply For Registration
                   </button>
                   <button className="w-full rounded-md bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200">
                     Login
                   </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;