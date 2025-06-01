import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import i1 from "./i1.png"
const Footer = () => {
  return (
    <footer className="bg-dblue text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          {/* Placeholder for Logo */}
          <div className="flex justify-center md:justify-start mb-4">
            {/* Replace with your logo */}
            <div className="w-32 h-32 flex items-center justify-center">
  <img
    src={i1} // Replace with your image path
    alt="Logo"
    className="w-full h-full  "
  />
</div>

          </div>
          
          <p className="text-gray-400 mt-2 max-w-xl leading-relaxed">
          Achieve Excellence with Gulf Riders: Simplify your workflow and create impactful dashboards effortlessly with our advanced template. Instead of starting from scratch with complex coding in Blade.php, SCSS, CSS, and JS, you can leverage this well-structured solution to craft stunning, user-friendly dashboards that impress your users and streamline your processes. Say goodbye to missteps and inefficiencies—our template empowers you to focus on what truly matters: delivering exceptional results.


          </p>
        </div>

        {/* Right Section */}
        <div className="text-center max-w-xs md:text-left">
          <p className="text-gray-400 max-w-xl mb-4">
          Effort That Yields Reward: No one seeks complexity for its own sake, but there are times when tackling challenges leads to extraordinary outcomes. 
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
  Copyright © {new Date().getFullYear()} <span className="text-white">Gulf Riders</span>
</p>

      </div>
    </footer>
  );
};

export default Footer;
