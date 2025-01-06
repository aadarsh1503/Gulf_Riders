import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactSection = () => {
  return (
    <div id='contact' className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-5xl"> hii</h1>
      <h2 className="text-3xl font-semibold text-center">
        Get in Touch with <span className="text-red-500">US</span>.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 p-4 rounded-full">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mt-2">Main Branch</h3>
          <p className="text-sm ">221 Salah Al Din St -
Deira - Dubai -<br />
United Arab Emirates
</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-pink-100 p-4 rounded-full">
            <FaPhoneAlt className="text-pink-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mt-2">Phone</h3>
          <p className="text-sm">9909999999</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full">
            <FaEnvelope className="text-green-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mt-2">Email</h3>
          <p className="text-sm">hello@gmail.com</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <FaClock className="text-blue-500 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold mt-2">Working Hours</h3>
          <p className="text-sm">Saturday - Thursday: 9am - 6pm<br />Friday: Holiday</p>
        </div>
      </div>
      <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone *</label>
          <PhoneInput
            country="ae" // Default country set to Bahrain
            placeholder="Enter your phone number"
            inputStyle={{ width: '100%', height: '40px', border: '1px solid #D1D5DB', color: '#4B5563' }}
            containerClass="border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your subject"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message *</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Type your message here..."
          />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
