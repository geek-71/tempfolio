import React from "react";

const blogs = [
  {
    id: 1,
    image: "images/blog-01.png",
    title: "Free advertising for your online business",
    author: "Musharof Chy",
    date: "25 Dec, 2025",
    link: "blog-single.html",
  },
  {
    id: 2,
    image: "images/blog-02.png",
    title: "9 simple ways to improve your design skills",
    author: "Musharof Chy",
    date: "25 Dec, 2025",
    link: "blog-single.html",
  },
  {
    id: 3,
    image: "images/blog-03.png",
    title: "Tips to quickly improve your coding speed.",
    author: "Musharof Chy",
    date: "25 Dec, 2025",
    link: "blog-single.html",
  },
];

const BlogSection = () => {
  const sectionTitle = "Latest Blogs & News";
  const sectionText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.";

  return (
    <section className="py-20 px-4 bg-gray-50">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">{sectionTitle}</h2>
        <p className="text-gray-600">{sectionText}</p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group transition hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                <a
                  href={blog.link}
                  className="text-white bg-primary px-4 py-2 rounded font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  <img src="images/icon-man.svg" alt="User" className="w-5 h-5" />
                  <p>{blog.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="images/icon-calender.svg" alt="Calendar" className="w-5 h-5" />
                  <p>{blog.date}</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 hover:text-primary transition">
                <a href={blog.link}>{blog.title}</a>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
