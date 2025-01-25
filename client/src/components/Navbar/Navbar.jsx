import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import i1 from "./i1.png"
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const location = useLocation();
  let lastScrollY = 0; // To track the last scroll position

  // Handle scroll event to show/hide navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false); // Hide navbar on scroll down
      } else {
        setIsNavbarVisible(true); // Show navbar on scroll up
      }
      lastScrollY = currentScrollY; // Update the last scroll position

      // Change navbar style when scrolled
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect route change and trigger scroll
  useEffect(() => {
    const sectionId = location.hash.replace("#", "");
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          isScrolled ? "bg-dblue text-white" : "bg-lorange text-white"
        } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex items-center text-sm justify-between px-6 py-">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src={i1}
                alt="Logo"
                className="h-24 w-24"
              />
            </a>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex mt-2 ml-9 font-semibold items-center space-x-7 text-sm tracking-wide">
            <Link to="/#home" onClick={() => scrollToSection("Hero")} className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/#feature" onClick={() => scrollToSection("feature")} className="hover:text-gray-600">
              Feature
            </Link>
            <Link to="/#about" onClick={() => scrollToSection("advantages")} className="hover:text-gray-600">
              About
            </Link>
            <Link to="/#highlight" onClick={() => scrollToSection("steps")} className="hover:text-gray-600">
              Highlights
            </Link>
            <Link to="/#Faq" onClick={() => scrollToSection("story")} className="hover:text-gray-600">
              Faq's
            </Link>
            <Link to="/#testimonials" onClick={() => scrollToSection("markets")} className="hover:text-gray-600">
              Clients
            </Link>
            <Link to="/#contact" onClick={() => scrollToSection("markets")} className="hover:text-gray-600">
              Contacts
            </Link>
          </div>

          {/* Buttons Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="bg-dblue text-white py-2 px-4 rounded-lg hover:bg-white outline outline-white hover:text-black transition duration-300"
              onClick={() => console.log("Action 1")}
            >
              Apply For Registration
            </button>
            <button
              className="hover:bg-dblue hover:text-white py-2 px-4 rounded-lg bg-white outline hover:outline-white text-black transition duration-300"
              onClick={() => console.log("Action 2")}
            >
              Login
            </button>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer text-white"
                onClick={toggleMobileMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer text-white"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dblue text-white py-4 px-6">
            {/* Mobile Menu Items */}
            <a
              href="/"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/#feature"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Feature
            </a>
            <a
              href="/#about"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/#highlight"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Highlights
            </a>
            <a
              href="/#Faq"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Faq's
            </a>
            <a
              href="/#testimonials"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href="/#contact"
              className="block py-2 hover:text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacts
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
