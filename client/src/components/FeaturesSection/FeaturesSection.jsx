import { FaCube, FaCode, FaCopy, FaBook, FaUser, FaLayerGroup, FaCogs, FaCheck } from 'react-icons/fa';

const features = [
  {
    icon: <FaCube />,
    bgColor: 'bg-red-500',
    title: 'Unique Design',
    description: 'RiderCRM has a unique design that you cannot compare with any other templates. It has unique Design.',
  },
  {
    icon: <FaCode />,
    bgColor: 'bg-yellow-500',
    title: 'Quality & Clean Code',
    description:
      'The RiderCRM admin code is maintained very cleanly and well-structured with proper comments.',
  },
  {
    icon: <FaCopy />,
    bgColor: 'bg-green-500',
    title: 'Multiple Demos',
    description:
      'We included multiple demos, preview video, and screenshots to give a quick overview of our dashboard admin template.',
  },
  {
    icon: <FaBook />,
    bgColor: 'bg-blue-500',
    title: 'Well Documentation',
    description:
      'The documentation provides clear-cut material and is instructed in such a way that every user can understand.',
  },
  {
    icon: <FaUser />,
    bgColor: 'bg-pink-500',
    title: 'User Pages',
    description:
      'The most advanced "User Pages" are included in this template, like registration, profile, and log-in pages, etc.',
  },
  {
    icon: <FaLayerGroup />,
    bgColor: 'bg-red-500',
    title: 'Modern UI Widgets',
    description:
      'Modern widgets are included in this template. Please check out the best option that suits your projects.',
  },
  {
    icon: <FaCogs />,
    bgColor: 'bg-yellow-500',
    title: '100+ UI Components',
    description:
      'Tempor accusam magna ipsum ea et. Sanctus aliquyam ea duo sit consectetur Labore stet sed.',
  },
  {
    icon: <FaCheck />,
    bgColor: 'bg-green-500',
    title: 'Validating Forms',
    description:
      'Tempor accusam magna ipsum ea et. Sanctus aliquyam ea duo sit consectetur Labore stet sed.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h3 className="text-red-500 text-lg font-semibold">Features</h3>
        <h2 className="text-3xl font-bold">RiderCRM Main Features</h2>
        <p className="text-gray-600 mt-2">
          The RiderCRM admin template comes with ready-to-use features that are completely easy-to-use for any user, even for a beginner.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} text-white mx-auto mb-4`}
            >
              {feature.icon}
            </div>
            <h4 className="text-xl font-semibold text-center">{feature.title}</h4>
            <p className="text-gray-600 text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
