import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Basic',
      monthly: 39,
      annually: 399,
      features: ['2 Free Domain Name', '3 One-Click Apps', '1 Database', 'Unlimited Cloud Storage', 'Money BackGuarantee', '24/7 support'],
    },
    {
      name: 'Advanced',
      monthly: 199,
      annually: 1299,
      features: ['5 Free Domain Name', '5 One-Click Apps', '3 Databases', 'Unlimited Cloud Storage', 'Money BackGuarantee', '24/7 support'],
      highlight: 'Limited Deal',
    },
    {
      name: 'Regular',
      monthly: 69,
      annually: 899,
      features: ['1 Free Domain Name', '4 One-Click Apps', '2 Databases', 'Unlimited Cloud Storage', 'Money BackGuarantee', '24/7 support'],
    },
  ];

  return (
    <div className="max-w-5xl font-poppins mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Choose a plan</h2>
      <p className="text-lg font-semibold mb-6">
        Find the <span className="text-red-500">Perfect Plan</span> for your Business.
      </p>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsMonthly(true)}
          className={`px-4 py-2 border ${isMonthly ? 'bg-red-500 text-white' : 'bg-white text-black'} transition-all`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`px-4 py-2 border ${!isMonthly ? 'bg-red-500 text-white' : 'bg-white text-black'} transition-all`}
        >
          Annual
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg shadow p-6 relative">
            {plan.highlight && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1">{plan.highlight}</span>
            )}
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-4">
              ${isMonthly ? plan.monthly : plan.annually} <span className="text-sm">/ {isMonthly ? 'month' : 'year'}</span>
            </p>
            <p className='text-xs mb-2 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos debitis aliquam .</p>
            <p className="text-sm text-left text-red-500 mb-4">Billed {isMonthly ? 'monthly' : 'annually'} on regular basis!</p>
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-2">
                  <FaRegCheckCircle className="text-red-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-red-500 text-white py-2 rounded">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
