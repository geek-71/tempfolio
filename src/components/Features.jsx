import React from 'react'

const features = [
  {
    icon: 'images/icon-01.svg',
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet conse adipiscing elit.',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: 'images/icon-02.svg',
    title: 'Take Ownership',
    description: 'Lorem ipsum dolor sit amet conse adipiscing elit.',
    bgColor: 'bg-blue-100',
  },
  {
    icon: 'images/icon-03.svg',
    title: 'Team Work',
    description: 'Lorem ipsum dolor sit amet conse adipiscing elit.',
    bgColor: 'bg-green-100',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 2xl:px-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition animate-fade-up"
          >
            <div className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full ${feature.bgColor}`}>
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;