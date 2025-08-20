import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, SendHorizontal, Loader2 } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

// --- Data for Contact Details (No change) ---
const contactDetails = [
  // ... your data ...
  {
    Icon: MapPin,
    title: 'Main Branch',
    value: '221 Salah Al Din St, Deira, Dubai, UAE',
  },
  {
    Icon: Phone,
    title: 'Phone',
    value: '+971 99 099 9999',
  },
  {
    Icon: Mail,
    title: 'Email',
    value: 'info@gulfriders.net',
  },
  {
    Icon: Clock,
    title: 'Working Hours',
    value: 'Sat - Thu: 9am - 6pm (Friday Holiday)',
  },
];

// --- Animation Variants (No change) ---
const sectionVariants = { /* ... */ };
const itemVariants = { /* ... */ };
const formItemVariants = { /* ... */ };

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const validateForm = () => {
    // ... validation logic is the same ...
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- UPDATED handleSubmit with merged message ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setStatusType('');
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    // --- START OF KEY CHANGE ---

    // 1. Merge Name, Email, and Phone into a single, detailed message string.
    const cleanedPhone = formData.phone.replace(/[^\d+]/g, '');
    const formattedMessage = `
      You have a new contact form submission from Gulf Riders:
      ------------------------------------------------------
      Name:    ${formData.name}
      Email:   ${formData.email}
      Phone:   ${cleanedPhone}
      ------------------------------------------------------
      
      Message from user:
      ${formData.message}
    `;

    // 2. Create the payload with the simple structure the API expects.
    const payload = {
      to: 'info@gulfriders.net',
      subject: formData.subject, // The subject is still sent separately.
      message: formattedMessage, // The merged details are sent as the main message.
    };

    // --- END OF KEY CHANGE ---


    try {
      const response = await axios.post(
        'https://gulfriders.net/send_to_a_mail.php',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log('✅ Server Response Received:', response.data);

      if (response.data && (response.data.status === 'success' || response.status === 200)) {
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setStatusType('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => {
          setStatusMessage('');
          setStatusType('');
        }, 5000);
      } else {
        setStatusMessage(response.data.message || 'An unexpected error occurred.');
        setStatusType('error');
      }

    } catch (error) {
      console.error('❌ Network Error Caught:', error);
      setStatusMessage('Sorry, there was a problem sending your message. Please try again later.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- JSX REMAINS THE SAME ---
  return (
    <motion.section
      id="contact"
      className="bg-slate-50 py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        {/* ... The rest of your JSX is exactly the same ... */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We'd love to hear from you. Whether you have a question about features, trials, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2">
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
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white p-8 shadow-2xl"
          >
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              {/* All form inputs are the same */}
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name *</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className={`mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.name ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email *</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className={`mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                <PhoneInput
                  country={'ae'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  containerClass="mt-2"
                  inputClass="!w-full !h-[42px] !rounded-md !border-0 !shadow-sm !ring-1 !ring-inset !ring-gray-300"
                  buttonClass="!rounded-l-md !border-0"
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject *</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Enter your subject" className={`mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.subject ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
              </motion.div>
              <motion.div className="sm:col-span-2" variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message *</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Type your message here..." className={`mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.message ? 'ring-red-500' : 'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`} />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </motion.div>
              <motion.div className="sm:col-span-2" variants={formItemVariants}>
                <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <SendHorizontal className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.div>
              {statusMessage && (
                <div className="sm:col-span-2 text-center">
                    <p className={`text-sm font-medium ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {statusMessage}
                    </p>
                </div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;