import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const collapsibleItems = [
  {
    title: 'Switch Easily From Vertical to Horizontal Menu',
    content: (
      <>
        <p>
          The RiderCRM – Bootstrap 5 Admin & Dashboard Template is available in
          both vertical and horizontal menus. Both menus are managed by single
          assets. Where users can easily switch from vertical to horizontal menus.
        </p>
        <p>
          <strong>Note:</strong> Please Refer full Documentation for more details.
        </p>
        <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Click here
        </button>
      </>
    ),
    bgColor: 'border-red-500 text-red-500',
  },
  {
    title: 'Switch Easily From Full Width to Boxed Layout',
    content: <p>Details for Full Width to Boxed Layout.</p>,
    bgColor: 'border-pink-500 text-pink-500',
  },
  {
    title: 'Change Easily Side Menu Styles',
    content: <p>Details for changing Side Menu Styles.</p>,
    bgColor: 'border-orange-500 text-orange-500',
  },
  {
    title: 'Switch Easily From Fixed to Scrollable Layout',
    content: <p>Details for switching from Fixed to Scrollable Layout.</p>,
    bgColor: 'border-pink-500 text-pink-500',
  },
  {
    title: 'Switch Easily From LTR to RTL Version',
    content: <p>Details for switching from LTR to RTL Version.</p>,
    bgColor: 'border-green-500 text-green-500',
  },
  {
    title: 'Switch Easily From One Color to Another Color style',
    content: <p>Details for switching from one color style to another.</p>,
    bgColor: 'border-blue-500 text-blue-500',
  },
];

const CollapsibleSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id='highlight' className="max-w-4xl mx-auto p-6">
        <h1 className="text-white mt-8 text-5xl"> hii</h1>
        <h1 className='text-center font-bold mb-4 text-xl'>Highlights</h1>
      <h2 className="text-2xl text-center font-semibold mb-4">Template Highlights</h2>
      <p className="mb-6 text-xs font-semibold max-w-3xl mx-auto">
        The RiderCRMadmin template is one of the modern dashboard templates. It
        is also a premium admin dashboard with high-end features, where users
        can easily customize or change their projects according to their choice.
        Please take a quick look at our template highlights.
      </p>
      <div className="space-y-4">
        {collapsibleItems.map((item, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg ${item.bgColor} relative`}
          >
            <button
              className="flex justify-between items-center w-full font-semibold"
              onClick={() => toggleCollapse(index)}
            >
              {item.title}
              {activeIndex === index ? (
                <AiOutlineMinus className="text-lg" />
              ) : (
                <AiOutlinePlus className="text-lg" />
              )}
            </button>
            {activeIndex === index && (
              <div className="mt-3 text-gray-700">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleSection;
