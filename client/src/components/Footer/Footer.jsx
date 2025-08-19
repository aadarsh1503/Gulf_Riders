import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import i1 from "./i1.png";

// --- Data for Social Links ---
// To add an icon, simply provide its href. If href is empty, the icon won't render.
const socialLinks = [
  { name: 'Facebook', href: '#', Icon: FaFacebookF },
  { name: 'Twitter', href: '#', Icon: FaTwitter },
  { name: 'Instagram', href: '', Icon: FaInstagram },
  // Let's add GitHub to the example as well
  { name: 'Github', href: '#', Icon: FaGithub },
];

const Footer = () => {
  // --- State and Logic for the Newsletter Form ---
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('email', email);
  
      formData.append('list', 'EqD892kQNdUh2MYkG4rXLvlQ');
      formData.append('subform', 'yes');


      await fetch('https://send.alzyara.com/subscribe', {
        method: 'POST', 
        body: formData,
        mode: 'no-cors',
      });
      setMessage('Thank you! You are now subscribed.');
      setEmail('');
    } catch (error) {
      setMessage('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 5000); // Clear the message after 5 seconds
    }
  };


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

          {/* --- Sexy Newsletter Section --- */}
          <div className="my-12 w-full max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, updates, and special offers delivered right to your inbox.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex items-center bg-white/10 border border-white/20 rounded-full p-2 shadow-lg focus-within:ring-2 focus-within:ring-white/50 transition-all duration-300">
                <FaEnvelope className="text-gray-400 text-xl mx-4" aria-hidden="true" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-dblue rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:text-gray-400 disabled:scale-100"
                >
                  {loading ? 'Submitting...' : 'Subscribe'}
                </button>
              </div>
              {message && <p className="text-sm mt-4 text-gray-300">{message}</p>}
            </form>
          </div>
          {/* --- End Newsletter Section --- */}


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