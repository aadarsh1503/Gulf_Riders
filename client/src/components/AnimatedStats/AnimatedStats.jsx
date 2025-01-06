import React, { useEffect, useState } from "react";
import { FaCode, FaPlug, FaWpforms, FaLayerGroup } from "react-icons/fa";

const AnimatedStats = () => {
  const stats = [
    { icon: <FaCode />, label: "PHP Pages", endValue: 100 },
    { icon: <FaPlug />, label: "Plugins", endValue: 60 },
    { icon: <FaWpforms />, label: "Form Elements", endValue: 10 },
    { icon: <FaLayerGroup />, label: "Widgets", endValue: 30 },
  ];

  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0) // Start all values at 0
  );

  useEffect(() => {
    const duration = 5000; // 3 seconds
    const interval = 100; // Update every 50ms

    stats.forEach((stat, index) => {
      const step = stat.endValue / (duration / interval); // Increment step size
      const intervalId = setInterval(() => {
        setAnimatedValues((prevValues) => {
          const newValues = [...prevValues];
          if (newValues[index] < stat.endValue) {
            newValues[index] = Math.min(
              newValues[index] + step,
              stat.endValue
            );
          }
          return newValues;
        });
      }, interval);

      // Clear interval after animation ends
      setTimeout(() => clearInterval(intervalId), duration);
    });
  }, [stats]);

  return (
    <div className="bg-gradient-to-r font-poppins from-purple-500  to-indigo-500 p-8">
      <div className="grid grid-cols-1  md:grid-cols-4 gap-8 text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="text-4xl bg-purple-700 p-4 rounded-lg shadow-md">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold">
              {Math.floor(animatedValues[index])} +
            </div>
            <div className="text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
