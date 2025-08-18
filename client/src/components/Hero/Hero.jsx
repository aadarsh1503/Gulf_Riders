import React, { useState, useEffect } from "react";
// --- Import your other sections as before ---
import FeaturesSection from "../FeaturesSection/FeaturesSection.JSX";
import MissionSection from "../MissionSection/MissionSection";
import FAQSection from "../FAQSection/FAQSection";
import Slide from "../Slide/Slide";
import CollapsibleSection from "../collapsibleItems/collapsibleItems";
import PricingSection from "../PricingSection/PricingSection";
import ContactSection from "../ContactSection/ContactSection";
import AnimatedStats from "../AnimatedStats/AnimatedStats";
import Testimonials from "../Testimonials/Testimonials";

// --- Import the new CSS file ---
import "./h.css";
import i223 from "./i223.png"; 
import i332 from "./i332.png"; 
// --- The image for the hero section ---
import i432 from "./i432.png"; 

const tabData = [
  {
    icon: '🚀',
    tabName: "Build",
    title: "We Help to Build Your Dream Project with Gulf Riders!",
    description: "Gulf Riders provides the ultimate foundation. Use our admin template to design and construct the stunning, functional dashboard you've always envisioned for your project.",
    image: i223,
  },
  {
    icon: '⚡️',
    tabName: "Accelerate",
    title: "From Zero to Hero, Instantly. Skip the Hard Part.",
    description: "Stop starting from scratch. We've handled the boilerplate Blade.php, SCSS, CSS, and JS. Focus on what matters: your application's logic and features.",
    image: i332,
  },
  {
    icon: '🎨',
    tabName: "Design",
    title: "Create Interactive Dashboards That Will Instantly Wow Your Users",
    description: "A good and well-structured dashboard is key. With our template, you have the tools to impress your target viewers and users to no end with a polished, professional look.",
    image: i432,
  },
];


const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  // --- NEW: useEffect for Automatic Tab Switching ---
  useEffect(() => {
    // Set up an interval that runs every 3000ms (3 seconds)
    const interval = setInterval(() => {
      // Increment the tab index, looping back to 0 if it reaches the end
      setActiveTab(prevTab => (prevTab + 1) % tabData.length);
    }, 3000);

    // This is a crucial cleanup function. 
    // It runs when the component unmounts or when activeTab changes.
    // It clears the previous interval, preventing memory leaks and bugs.
    return () => clearInterval(interval);
  }, [activeTab]); // Re-run this effect when activeTab changes to reset the timer

  return (
    <div>
      <section id="home" className="relative font-poppins bg-slate-900 text-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/50 rounded-full mix-blend-lighten filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/50 rounded-full mix-blend-lighten filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          
          <div className="flex flex-col text-center mt-6 lg:text-left">
            <h4 className="text-lg mt-10 lg:mt-0 text-cyan-400 font-semibold tracking-wider uppercase mb-3">
              Manage Your Business
            </h4>
            
            {/* The `key` prop forces a re-mount, triggering the new slide animation */}
            <div key={activeTab} className="animate-slide-in">
                <h1 className="text-4xl md:text-5xl font-bold mb- leading-tight min-h-[160px] md:min-h-[190px]">
                    {tabData[activeTab].title}
                </h1>
                <p className="text-base lg:text-lg text-gray-300 mb- min-h-[120px]">
                    {tabData[activeTab].description}
                </p>
            </div>
            
            {/* --- UPDATED: Glassmorphism Interactive Tabs --- */}
            <div className="flex flex-col sm:flex-row gap-2  bg-slate-800/20 p-2 rounded-xl border border-white/10 backdrop-blur-md self-center lg:self-start">
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative overflow-hidden w-full sm:w-auto text-left sm:text-center px-6 py-3 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center gap-2
                          ${activeTab === index 
                            ? 'bg-white/10 text-white' // Active button style
                            : 'text-gray-400 hover:bg-white/5' // Inactive button style
                          }`}
                    >
                        <span>{tab.icon}</span>
                        <span>{tab.tabName}</span>
                        {/* --- NEW: Progress bar for auto-play indicator --- */}
                        {activeTab === index && (
                           <div key={activeTab} className="absolute bottom-0 left-0 h-1 bg-cyan-300 animate-progress"></div>
                        )}
                    </button>
                ))}
            </div>
          </div>

          <div className="relative lg:mt-0 -mt-6 flex items-center justify-center">
            {/* Using the same slide animation for the image */}
            <div key={activeTab} className="relative w-full max-w-lg animate-slide-in">
              <img
                src={tabData[activeTab].image}
                alt="Dashboard Illustration"
                className="w-full h-auto relative z-10"
                style={{ filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.6))" }}
              />
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Your other sections remain below --- */}
      <FeaturesSection />
      <AnimatedStats />
      <MissionSection />
      <FAQSection />
      <Slide />
      <CollapsibleSection />
      <Testimonials />
      <PricingSection />
      <ContactSection />
      {/* ...etc */}
    </div>
  );
};

export default Hero;