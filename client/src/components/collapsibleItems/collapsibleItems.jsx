import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Columns,
  Box,
  PanelLeft,
  MoveVertical,
  Languages,
  Palette,
  ArrowRight
} from 'lucide-react';

// --- Refactored Data with Icons ---
// This makes the component more visual and easier to manage.
const collapsibleItems = [
  {
    title: 'Vertical & Horizontal Menu',
    Icon: Columns,
    content: 'Our template includes both vertical and horizontal menu layouts, managed by a single asset set. Switch between them effortlessly to fit your project’s needs.',
    link: '/documentation' // Example link
  },
  {
    title: 'Full Width & Boxed Layout',
    Icon: Box,
    content: 'Choose between a full-width or a modern boxed layout. This flexibility allows you to control the visual presentation of your dashboard with a simple configuration change.',
    link: '/documentation'
  },
  {
    title: 'Customizable Side Menu Styles',
    Icon: PanelLeft,
    content: 'Multiple side menu styles are available out-of-the-box. Customize the navigation to match your desired user experience without writing complex CSS.',
    link: '/documentation'
  },
  {
    title: 'Fixed & Scrollable Layouts',
    Icon: MoveVertical,
    content: 'Adapt the template’s scrolling behavior with options for both fixed and scrollable layouts, ensuring a perfect fit for content-heavy or static pages.',
    link: '/documentation'
  },
  {
    title: 'LTR & RTL Support',
    Icon: Languages,
    content: 'Full support for both Left-to-Right (LTR) and Right-to-Left (RTL) languages is included, making your application ready for a global audience.',
    link: '/documentation'
  },
  {
    title: 'Multiple Color Styles',
    Icon: Palette,
    content: 'Easily switch between various pre-built color schemes or create your own. Our template is built with customization in mind to perfectly match your brand identity.',
    link: '/documentation'
  },
];

// --- Animation Variants for Framer Motion ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, // A more playful ease
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
  },
};

const CollapsibleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default open the first item

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      id="highlight"
      className="bg-slate-50 py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Template Highlights
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Our admin template is packed with high-end features designed for flexibility and ease of use. Explore some of the key highlights below.
          </p>
        </div>

        {/* --- Collapsible List --- */}
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {collapsibleItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={item.title}
                className="rounded-xl bg-white shadow-sm overflow-hidden border border-transparent has-[:focus-visible]:border-indigo-400"
                variants={sectionVariants} // Staggered reveal for each item
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleCollapse(index)}
                >
                  <span className="flex items-center gap-4">
                    <item.Icon className={`h-6 w-6 transition-colors ${isOpen ? 'text-indigo-600' : 'text-gray-500'}`} />
                    <span className={`font-semibold text-lg ${isOpen ? 'text-indigo-600' : 'text-gray-900'}`}>
                      {item.title}
                    </span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-indigo-600' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="px-6 overflow-hidden"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="pb-6 border-t border-slate-200 pt-4">
                        <p className="text-gray-600">{item.content}</p>
                        <a
                          href={item.link}
                          className="mt-4 inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CollapsibleSection;