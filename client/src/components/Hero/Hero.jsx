import React from "react";
import FeaturesSection from "../FeaturesSection/FeaturesSection.JSX";
import MissionSection from "../MissionSection/MissionSection";
import { FaQuestion } from "react-icons/fa";
import FAQSection from "../FAQSection/FAQSection";
import Slide from "../Slide/Slide";
import CollapsibleSection from "../collapsibleItems/collapsibleItems";
import PricingSection from "../PricingSection/PricingSection";
import ContactSection from "../ContactSection/ContactSection";
import AnimatedStats from "../AnimatedStats/AnimatedStats";
import Testimonials from "../Testimonials/Testimonials";
import Slide1 from "../Slide1/Slide1";
import i23 from "./i23.png"
const Hero = () => {
  return (
    <div>
    <section id="home" className="relative font-poppins bg-dblue text-black py-24 overflow-hidden">
      {/* Curved Background */}
      <div
  className="absolute bottom-0 left-0 w-full h-32 bg-white z-0"
  style={{
    clipPath: "path('M0 90 C 300 210, 300 -40, 900 5 C 3050 1500, -4000 400, 1500 0 L3000 0 L0 1200 Z')"
  }}
></div>




      <div className="container  max-w-7xl  mx-auto flex flex-col lg:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center  ml-2 lg:text-left mt-14 px-6">
          <h4 className="text-lg text-white font-medium mb-2">Manage Your Business</h4>
          <h1 className="text-4xl text-white font-semibold mb-4 leading-tight">
  We Help to Build Your Dream <br />Project with Gulf Riders!
</h1>

          <p className="text-base text-white mt-6 mb-6">
            Gulf Riders- Now you can use this admin template to design stunning
            dashboards that will wow your target viewers or users to no end. To
            create a good and well-structured dashboard, you need to start from
            scratch with Blade.php, SCSS, CSS, and JS and with lots of coding,
            but by using this Spruha-Admin template.
          </p>
          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded shadow hover:shadow-lg">
              Get Started
            </button>
            <button className="border border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-black">
              Discover More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 px-6 mt-10 lg:mt-6">
  <img
    src={i23}
    alt="Illustration"
    className="w-full relative  top-20 -left-8 right-1"
  />
</div>

      </div>
    </section>
    <Slide1 />
    <FeaturesSection />
    <AnimatedStats />
    <MissionSection />
   
   
    <FAQSection />
  <Slide />
 <CollapsibleSection />
 <Testimonials />
 <PricingSection />
 <ContactSection />
    </div>
  );
};

export default Hero;
 