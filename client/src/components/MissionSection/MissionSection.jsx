import React from "react";
import { motion } from "framer-motion";
import { Award, FileText, Settings, Zap } from "lucide-react";

// --- Data for our features ---
const features = [
 
  {
    title: "Comprehensive Documentation",
    description: "Our products come with clear, concise, and easy-to-follow documentation, empowering you to get started quickly and customize with confidence.",
    imageUrl: "https://img.freepik.com/free-vector/electronic-document-electronic-paper-paperless-office-internet-article-online-documentation-organization-typing-text-file-computer-vector-isolated-concept-metaphor-illustration_335657-2745.jpg?w=740",
    Icon: FileText,
  },
  {
    title: "Effortless Customization",
    description: "Tailor every aspect to fit your brand. Our flexible architecture and clean code make customization a breeze, not a chore.",
    imageUrl: "https://img.freepik.com/free-vector/advanced-customization-concept-illustration_114360-4491.jpg?w=740",
    Icon: Settings,
  },
  {
    title: "Life Time Updates",
    description: "Invest once and benefit forever. We provide continuous updates with new features and improvements, ensuring your project stays modern and secure.",
    imageUrl: "https://img.freepik.com/free-vector/flat-spring-forward-illustration_23-2149254612.jpg?w=996",
    Icon: Zap,
  },
];

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut", // <-- FIX: Replaced the invalid array with a valid easing keyword
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut", // <-- FIX: Replaced the invalid array here as well
    },
  },
};


const MissionSection = () => {
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Main Heading Section --- */}
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-base font-semibold leading-7 text-indigo-600" variants={itemVariants}>
            Our Commitment
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            variants={itemVariants}
          >
            Our mission is to make work meaningful
          </motion.p>
          <motion.p className="mt-6 text-lg leading-8 text-gray-600" variants={itemVariants}>
            We build tools and experiences that empower teams to do their best work, fostering creativity, collaboration, and purpose.
          </motion.p>
        </motion.div>

        {/* --- Features Grid --- */}
        <div className="mt-20 space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <motion.div className="flex items-center gap-4" variants={itemVariants}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <feature.Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {feature.title}
                  </h3>
                </motion.div>
                <motion.p className="mt-6 text-lg leading-8 text-gray-600" variants={itemVariants}>
                  {feature.description}
                </motion.p>
              </div>

              {/* Right Side - Image */}
              <motion.div className="flex-1" variants={imageVariants}>
                <img
                  src={feature.imageUrl}
                  alt={`${feature.title} illustration`}
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;