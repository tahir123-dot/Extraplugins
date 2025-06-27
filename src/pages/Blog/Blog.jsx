import React from "react";
import { blogImage } from "../../assets/image";

const blogs = [
  {
    id: 1,
    title: "Top 5 Plugins for Music Producers in 2025",
    description:
      "Explore the most powerful and trending audio plugins every producer must have in 2025. From synths to FX — it's all here.",
    image: blogImage.music1,
  },
  {
    id: 2,
    title: "How to Mix Vocals Like a Pro – Beginner's Guide",
    description:
      "Learn simple and effective steps to mix your vocals with clarity and punch using basic tools and free plugins.",
    image: blogImage.music2,
  },
  {
    id: 3,
    title: "Free Kontakt Libraries Worth Downloading",
    description:
      "Here’s a curated list of free high-quality Kontakt libraries that sound like paid ones. Perfect for budget producers.",
    image: blogImage.music3,
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
        <p className="mt-4 text-gray-600">
          Stay updated with the latest tips, tutorials, and tools for producers,
          sound designers, and musicians.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {blog.description.slice(0, 100)}...
              </p>
              <a
                href={`/blog/${blog.id}`} // Link to detail page
                className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
