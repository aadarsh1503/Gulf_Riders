import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import i1 from "./i1.png";

// --- Data for Social Links ---
// To add an icon, simply provide its href. If href is empty, the icon won't render.
const socialLinks = [
  { name: 'Facebook', href: '#', Icon: FaFacebookF },
  { name: 'Twitter', href: '#', Icon: FaTwitter },
  { name: 'Instagram', href: '', Icon: FaInstagram }, 
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-dblue text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo */}
          <div className="mb-6">
            <img
              src={i1}
              alt="Logo"
              className="h-48 w-auto" // More refined logo size
            />
          </div>

          {/* Main Description */}
          <p className="max-w-3xl text-sm leading-relaxed text-gray-300">
            Achieve Excellence with Gulf Riders: Simplify your workflow and create impactful dashboards effortlessly with our advanced template. Instead of starting from scratch with complex coding in Blade.php, SCSS, CSS, and JS, you can leverage this well-structured solution to craft stunning, user-friendly dashboards that impress your users and streamline your processes. Say goodbye to missteps and inefficiencies—our template empowers you to focus on what truly matters: delivering exceptional results.
          </p>

          {/* Secondary Text & Social Links */}
          <div className="mt-10 flex flex-col items-center">
            <p className="max-w-xl text-sm text-gray-400">
              Effort That Yields Reward: No one seeks complexity for its own sake, but there are times when tackling challenges leads to extraordinary outcomes.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              {socialLinks.map((item) => (
                item.href && ( // This condition ensures only icons with a link are rendered
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm leading-5 text-gray-400">
            Copyright &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Gulf Riders</span>. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;