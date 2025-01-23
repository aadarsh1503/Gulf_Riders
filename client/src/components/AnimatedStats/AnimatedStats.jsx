import React from "react";
import { FaCode, FaPlug, FaWpforms, FaLayerGroup } from "react-icons/fa";

const AnimatedStats = () => {
  const stats = [
    { icon: <FaCode />, label: "PHP Pages", value: 100 },
    { icon: <FaPlug />, label: "Plugins", value: 60 },
    { icon: <FaWpforms />, label: "Form Elements", value: 10 },
    { icon: <FaLayerGroup />, label: "Widgets", value: 30 },
  ];

  return (
    <div className="bg-dblue font-poppins  p-8">
      <div className="grid grid-cols-1 py-12 md:grid-cols-4 gap-8 text-white">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2">
            <div className="text-4xl bg-dblue outline outline-white p-4 rounded-lg shadow-md">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold">
              {stat.value}+
            </div>
            <div className="text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
