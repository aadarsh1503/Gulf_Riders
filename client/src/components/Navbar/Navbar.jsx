import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  
    // Initial check for scroll position
    handleScroll();
  
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#d83424] text-white" : "bg-lorange text-white"
        }`}
      >
        <div className="container mx-auto flex items-center text-sm justify-between px-6 py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="https://crm.ridercrm.tech/storage/app/public/logo/14845584951713853932.png"
                alt="Logo"
                className="h-20 w-32"
              />
            </a>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex mt-2 ml-9 font-semibold items-center space-x-7 text-sm tracking-wide">
  {/* Existing Links */}
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
    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
    onClick={() => console.log("Action 1")}
  >
    Apply For Registration
  </button>
  <button
    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
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
          <div className="md:hidden bg-lorange text-white py-4 px-6">
            {/* Mobile Menu Items */}
            <a href="/#about" className="block py-2 hover:text-gray-400">
              About Us
            </a>
            <a href="/#glance" className="block py-2 hover:text-gray-400">
              At a Glance
            </a>
            <a href="/#advantages" className="block py-2 hover:text-gray-400">
              Advantages
            </a>
            <a href="/#steps" className="block py-2 hover:text-gray-400">
              Steps
            </a>
            <a href="/#story" className="block py-2 hover:text-gray-400">
              Our Story
            </a>
            <a href="/#contact" className="block py-2 hover:text-gray-400">
              Contact Us
            </a>
            <a href="/requestEarly" className="block py-2 hover:text-gray-400">
              Request For Early Access
            </a>
            <a href="/becomeMerchant" className="block py-2 hover:text-gray-400">
              Become a Merchant
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
