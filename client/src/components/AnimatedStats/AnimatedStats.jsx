import React, { useState, useEffect } from "react";
import { FaCode, FaPlug, FaWpforms, FaLayerGroup } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

// Data remains the same
const stats = [
  { icon: <FaCode />, label: "PHP Pages", value: 100 },
  { icon: <FaPlug />, label: "Plugins", value: 60 },
  { icon: <FaWpforms />, label: "Form Elements", value: 10 },
  { icon: <FaLayerGroup />, label: "Widgets", value: 30 },
];

// Reusable StatCard Component for clean logic
const StatCard = ({ icon, label, value, index }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1,   // Trigger when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2000; // 2 seconds
      const incrementTime = 1000 / 60; // 60fps
      const totalSteps = duration / incrementTime;
      const increment = end / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      // Glassmorphism, entrance animation, and hover effects
      className={`
        relative p-8 rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-sm shadow-xl
        transform transition-all duration-500 ease-in-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:scale-105 hover:bg-white/10 hover:shadow-cyan-400/20
      `}
      style={{ transitionDelay: `${index * 100}ms` }} // Staggered animation effect
    >
        {/* Glowing Divider between cards on desktop */}
        {index > 0 && (
            <div className="hidden md:block absolute -left-4 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        )}

      <div className="flex flex-col items-center justify-center text-center space-y-4">
        {/* Gradient Icon background */}
        <div className="text-4xl text-white bg-gradient-to-br from-cyan-400 to-blue-600 p-4 rounded-full shadow-lg shadow-cyan-500/30">
          {icon}
        </div>
        {/* Animated Number */}
        <div className="text-5xl font-bold bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text">
          {count}+
        </div>
        {/* Label */}
        <div className="text-lg text-gray-300">{label}</div>
      </div>
    </div>
  );
};


const AnimatedStats = () => {
  return (
    // Main container with gradient and subtle background pattern
    <div className="bg-slate-900 font-poppins py-20 lg:py-24" 
         style={{
           backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), radial-gradient(circle at top left, rgba(37, 99, 235, 0.2), transparent 40%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.2), transparent 40%)'
         }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              icon={stat.icon} 
              label={stat.label} 
              value={stat.value}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;