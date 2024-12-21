/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaRegNewspaper, FaPenFancy } from "react-icons/fa";
import Footer from "../components/Footer";

const sampleBlogs = [
  {
    title: "Special Winter Promotion",
    description: "Enjoy up to 30% off on all bookings made this winter season.",
    date: "December 15, 2024",
  },
  {
    title: "Top 10 Destinations for 2025",
    description:
      "Explore the most sought-after destinations for the upcoming year!",
    date: "November 30, 2024",
  },
  {
    title: "Customer Spotlight: A Memorable Journey",
    description: "Read about one customer's amazing experience with us.",
    date: "November 15, 2024",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(sampleBlogs);

  return (
  <>
      <div>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Blog.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-lg">
            Blogs & Updates
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 shadow-md">
            Stay updated with our latest news and promotions.
          </p>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FaRegNewspaper className="text-blue-500 text-3xl mr-4" />
                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
              </div>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-gray-400 text-sm mt-2">{blog.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Blog (Admin only) */}
      <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {/* Add a Blog (Admin Only) */}
          Add a Blog
        </h2>
        <form className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Blog Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Blog Description"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Blogs;
