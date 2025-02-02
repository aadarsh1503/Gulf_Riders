import React, { useState } from "react";
import Slide from "../Slide/Slide";

const FAQSection = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Can I get a free trial before purchase?",
      answer:
        "Yes, you can request a free trial before making the purchase. Contact us for more details.",
    },
    {
      id: 2,
      question: "What type of files will I get after purchase?",
      answer: "You will receive all necessary files, including source code, documentation, and templates.",
    },
    {
      id: 3,
      question: "What is a single application?",
      answer: "A single application refers to one project built using the purchased template.",
    },
    {
      id: 4,
      question: "How to get future updates?",
      answer: "Future updates will be provided via email or the dashboard where you purchased the product.",
    },
    {
      id: 5,
      question: "Do you provide support?",
      answer: "Yes, we provide support via email and chat for any issues or queries you have.",
    },
  ];

  // Toggle FAQ item
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
    <section id="Faq" className="py-16 px-6">
      <h1 className="text-5xl text-white">hii</h1>
         <h3 className="text-dblue text-lg text-center font-semibold mb-2">
      FAQ'S ?
    </h3>
    <h2 className="text-3xl font-bold text-center mb-6">
      We are here to help you
    </h2>
    <div className="flex max-w-5xl mx-auto mb-8 justify-center">
      <p className="text-gray-600 text-center ">
        The Gulf Riders Admin  template is one of the modern dashboard templates.
        It is a premium admin dashboard with high-end features, where users
        can easily customize or change their projects according to their
        choice.
      </p>
    </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: FAQ List */}
        <div>
        
          

          {/* FAQ Items */}
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="mb-4 border rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left px-6 py-4 ${
                  openFAQ === faq.id ? "bg-dblue" : "bg-white"
                } flex items-center justify-between`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span
                  className={`font-medium ${
                    openFAQ === faq.id ? "text-white" : "text-gray-800"
                  }`}
                >
                  {faq.id < 10 ? `0${faq.id}.` : `${faq.id}.`} {faq.question}
                </span>
                <span
                  className={`text-xl transition-transform ${
                    openFAQ === faq.id ? "rotate-180 text-white" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>
              {openFAQ === faq.id && (
                <div className="bg-white px-6 py-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://crm.ridercrm.tech/public/design/assets/landing/images/frequently-asked-questions.png"
            alt="FAQ Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
     
    </section>
  
     </div>
  );
};

export default FAQSection;
