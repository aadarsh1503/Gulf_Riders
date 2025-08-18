import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react'; // Using a cleaner check icon

// --- Data for Pricing Plans ---
// Reordered and adjusted for the new design
const plans = [
  {
    name: 'Starter',
    monthly: 39,
    annually: 399,
    description: "Perfect for individuals and small projects getting started.",
    features: ['1 Free Domain Name', '3 One-Click Apps', '1 Database', 'Standard Cloud Storage', '24/7 Support'],
    cta: 'Get Started',
  },
  {
    name: 'Business',
    monthly: 99,
    annually: 999,
    description: "The ideal solution for growing businesses and professionals.",
    features: ['3 Free Domain Name', '10 One-Click Apps', '5 Databases', 'Unlimited Cloud Storage', 'Priority 24/7 Support', 'Advanced Analytics'],
    highlight: true, // This will be our "recommended" plan
    cta: 'Choose Business',
  },
  {
    name: 'Enterprise',
    monthly: 199,
    annually: 1999,
    description: "For large-scale applications with advanced requirements.",
    features: ['Unlimited Domains', 'Unlimited Apps', 'Dedicated Database', 'Premium CDN', 'Dedicated Support', 'Custom Integrations'],
    cta: 'Contact Sales',
  },
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    // We add a subtle gradient background for the glass effect to work on
    <motion.section
      id="pricing"
      className="bg-gradient-to-br from-gray-50 to-gray-200 py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Find the perfect plan for your business.
          </p>
        </div>

        {/* --- YOUR EXACT TOGGLE SWITCH --- */}
        <div className='outline outline-gray-300 w-[300px] p-1 mx-auto mt-16 mb-12 rounded-md'>
          <div className="relative flex flex-row mx-auto space-x-2">
            {/* Sliding Background */}
            <div
              className={`absolute top-0 left-0 h-full w-1/2 rounded-md bg-gray-900 transition-all duration-300 ${
                isMonthly ? 'translate-x-0' : 'translate-x-full'
              }`}
            ></div>
            
            {/* Buttons */}
            <button
              onClick={() => setIsMonthly(true)}
              className={`flex-1 py-2 text-base font-semibold transition-all duration-300 rounded-md z-10 ${
                isMonthly ? 'text-white' : 'text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`flex-1 py-2 text-base font-semibold transition-all duration-300 rounded-md z-10 ${
                !isMonthly ? 'text-white' : 'text-black'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* --- Glass Effect Pricing Cards Grid --- */}
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 ring-1 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gray-900/80 text-white ring-gray-900/20 scale-100 lg:scale-105 shadow-2xl'
                  : 'bg-white/60 text-gray-900 ring-gray-900/10 backdrop-blur-lg shadow-xl'
              }`}
            >
              <h3 className="text-lg font-semibold leading-8">{plan.name}</h3>
              <p className={`mt-4 text-sm leading-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              {/* Animated Price */}
              <div className="relative mt-6 flex items-baseline gap-x-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isMonthly ? plan.monthly : plan.annually}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-5xl font-bold tracking-tight"
                  >
                    ${isMonthly ? plan.monthly : plan.annually}
                  </motion.span>
                </AnimatePresence>
                <span className={`text-sm font-semibold leading-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                  / {isMonthly ? 'month' : 'year'}
                </span>
              </div>
              
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${plan.highlight ? 'text-white' : 'text-gray-800'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.highlight ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-3 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-gray-900 hover:bg-gray-200 focus-visible:outline-white'
                    : 'bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline-gray-900'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;