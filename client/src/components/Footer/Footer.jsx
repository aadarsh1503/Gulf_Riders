import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          {/* Placeholder for Logo */}
          <div className="flex justify-center md:justify-start mb-4">
            {/* Replace with your logo */}
            <div className="w-56 h-32 flex items-center justify-center">
  <img
    src="https://crm.ridercrm.tech/storage/app/public/logo/14845584951713853932.png" // Replace with your image path
    alt="Logo"
    className="w-full h-full  "
  />
</div>

          </div>
          
          <p className="text-gray-400 mt-2 max-w-xl leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Exceptetur sint occaecat.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center max-w-xs md:text-left">
          <p className="text-gray-400 max-w-xl mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Exceptetur sint occaecat.
          </p>
          <div className="flex justify-center  md:justify-start  space-x-4 text-gray-400">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaGithub className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-6 pt-4">
        <p className="text-center text-gray-500">
          Copyright © 2025 <span className="text-red-500">RiderCRM</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
