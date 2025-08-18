import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCube, FaCode, FaCopy, FaBook, FaUser, FaLayerGroup, FaCogs, FaCheck } from 'react-icons/fa';

// Data remains the same
const features = [
  { icon: <FaCube />, title: 'Unique Design', description: 'Gulf Riders has a unique design that you cannot compare with any other templates. It has unique Design.' },
  { icon: <FaCode />, title: 'Quality & Clean Code', description: 'The Gulf Riders admin code is maintained very cleanly and well-structured with proper comments.' },
  { icon: <FaCopy />, title: 'Multiple Demos', description: 'We included multiple demos, preview video, and screenshots to give a quick overview of our dashboard admin template.' },
  { icon: <FaBook />, title: 'Well Documentation', description: 'The documentation provides clear-cut material and is instructed in such a way that every user can understand.' },
  { icon: <FaUser />, title: 'User Pages', description: 'The most advanced "User Pages" are included in this template, like registration, profile, and log-in pages, etc.' },
  { icon: <FaLayerGroup />, title: 'Modern UI Widgets', description: 'Modern widgets are included in this template. Please check out the best option that suits your projects.' },
  { icon: <FaCogs />, title: '100+ UI Components', description: 'Tempor accusam magna ipsum ea et. Sanctus aliquyam ea duo sit consectetur Labore stet sed.' },
  { icon: <FaCheck />, title: 'Validating Forms', description: 'Tempor accusam magna ipsum ea et. Sanctus aliquyam ea duo sit consectetur Labore stet sed.' },
];

// Reusable, animated FeatureCard component - LIGHT THEME VERSION
const FeatureCard = ({ feature, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      // Card styling for a clean, layered look with subtle interactions
      className={`
        bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-md
        transform transition-all duration-500
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10
      `}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
        {/* Vibrant Gradient Icon Container */}
        <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6
                        bg-gradient-to-br from-blue-500 to-cyan-400 text-white text-3xl rounded-xl shadow-lg shadow-blue-500/30">
            {feature.icon}
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
        <p className="text-base text-gray-600">{feature.description}</p>
    </div>
  );
};


const FeaturesSection = () => {
  return (
    // Softer background for a premium feel
    <section id='feature' className="py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header - Styled for Light Theme */}
        <div className="text-center mb-16">
          <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
            Features
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Gulf Riders Main Features
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The Gulf Riders admin template comes with ready-to-use features that are completely easy-to-use for any user, even for a beginner.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;