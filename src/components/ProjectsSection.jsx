import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    image: 'images/project-01.png',
    title: 'Photo Retouching',
    category: ['branding', 'ecommerce'],
  },
  {
    id: 2,
    image: 'images/project-02.png',
    title: 'Photo Retouching',
    category: ['digital'],
  },
  {
    id: 3,
    image: 'images/project-04.png',
    title: 'Photo Retouching',
    category: ['branding', 'ecommerce'],
  },
  {
    id: 4,
    image: 'images/project-03.png',
    title: 'Photo Retouching',
    category: ['digital', 'ecommerce'],
  },
];

const categories = [
  { id: 1, label: 'All', filter: '*' },
  { id: 2, label: 'Branding Strategy', filter: 'branding' },
  { id: 3, label: 'Digital Experiences', filter: 'digital' },
  { id: 4, label: 'Ecommerce', filter: 'ecommerce' },
];

const ProjectsSection = () => {
  const [filterTab, setFilterTab] = useState(1);

  const getFilteredProjects = () => {
    const selectedCategory = categories.find(c => c.id === filterTab);
    if (!selectedCategory || selectedCategory.filter === '*') return projects;
    return projects.filter(p => p.category.includes(selectedCategory.filter));
  };

  return (
    <section className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          We Offer Great Affordable Premium Prices.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          It is a long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilterTab(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              filterTab === cat.id
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredProjects().map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h4 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h4>
              <p className="text-gray-200">Branded Ecommerce</p>
              <a
                href="#"
                className="mt-4 bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;