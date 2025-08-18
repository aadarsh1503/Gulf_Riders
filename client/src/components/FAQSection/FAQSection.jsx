import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import i1 from "./i1.png"; // Make sure this path is correct

// --- Data for our FAQs ---
const faqs = [
  {
    id: 1,
    question: "Can I get a free trial before purchase?",
    answer:
      "Absolutely! We encourage you to try our platform before committing. Please visit our pricing page or contact our sales team to get your free trial started.",
  },
  {
    id: 2,
    question: "What type of files will I get after purchase?",
    answer: "You will receive a complete package including well-documented source code, design files (Figma/Sketch), and any necessary assets to get you up and running immediately.",
  },
  {
    id: 3,
    question: "What is a single application license?",
    answer: "A single application license allows you to use the purchased template in one commercial project. For multiple projects, you would need to purchase additional licenses.",
  },
  {
    id: 4,
    question: "How do I receive future updates?",
    answer: "You'll be notified via email for all future updates. Updates can be downloaded directly from your account dashboard, ensuring you always have the latest features and security patches.",
  },
  {
    id: 5,
    question: "Do you provide technical support?",
    answer: "Yes, we offer premium support with all our products. Our dedicated support team is available via email and chat to help you with any questions or technical issues you may encounter.",
  },
];

// --- Animation Variants for Framer Motion ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const answerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(faqs[0].id); // Default open the first item

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <motion.section
      
      className="bg-white py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div id='Faq' className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Main Heading Section --- */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Can't find the answer you're looking for? Reach out to our friendly
            customer support team.
          </p>
        </div>

        {/* --- FAQ and Image Grid --- */}
        <div className="mt-20 mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFAQ === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm"
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span
                      className={`font-semibold ${
                        isOpen ? "text-indigo-600" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-colors ${
                          isOpen ? "text-indigo-600" : "text-gray-400"
                        }`}
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="px-6 overflow-hidden"
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <p className="pb-5 text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center items-center mt-4 md:mt-0">
            <img
              src={i1}
              alt="FAQ Illustration"
              className="w-full max-w-md h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;