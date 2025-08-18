import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, SendHorizontal } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// --- Data for Contact Details ---
const contactDetails = [
  {
    Icon: MapPin,
    title: 'Main Branch',
    value: '221 Salah Al Din St, Deira, Dubai, UAE',
  },
  {
    Icon: Phone,
    title: 'Phone',
    value: '+971 99 099 9999', // Formatted for clarity
  },
  {
    Icon: Mail,
    title: 'Email',
    value: 'hello@gulf-riders.com', // Example professional email
  },
  {
    Icon: Clock,
    title: 'Working Hours',
    value: 'Sat - Thu: 9am - 6pm (Friday Holiday)',
  },
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="bg-slate-50 py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Whether you have a question about features, trials, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        {/* --- Two-Column Layout --- */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
          
          {/* Left Column: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold leading-10 text-gray-900">Contact Information</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Our office details and contact information are listed below.
            </p>
            <div className="mt-10 space-y-8">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <detail.Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">{detail.title}</h4>
                    <p className="mt-1 text-base text-gray-600">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white p-8 shadow-2xl"
          >
            <motion.form
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name *</label>
                <input type="text" id="name" placeholder="Enter your name" className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset " />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email *</label>
                <input type="email" id="email" placeholder="Enter your email" className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset " />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                <PhoneInput
                  country={'ae'} // UAE default
                  placeholder="Enter phone number"
                  // Styling to match the other inputs
                  containerClass="mt-2"
                  inputClass="!w-full !h-[42px] !rounded-md !border-0 !shadow-sm !ring-1 !ring-inset !ring-gray-300"
                  buttonClass="!rounded-l-md !border-0"
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject *</label>
                <input type="text" id="subject" placeholder="Enter your subject" className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset " />
              </motion.div>
              <motion.div className="sm:col-span-2" variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message *</label>
                <textarea id="message" rows={4} placeholder="Type your message here..." className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset " />
              </motion.div>
              <motion.div className="sm:col-span-2" variants={formItemVariants}>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Send Message <SendHorizontal className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;