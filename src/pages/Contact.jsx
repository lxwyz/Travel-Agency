/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 shadow-md">
            We’re here to help. Get in touch!
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions? Reach out to us through any of the following channels.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Contact Card */}
          <div className="w-full sm:w-1/3 p-4">
            <div className="rounded-lg shadow-lg bg-white p-6 text-center">
              <FaPhone className="text-blue-500 text-6xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="rounded-lg shadow-lg bg-white p-6 text-center">
              <FaEnvelope className="text-green-500 text-6xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">info@travelagency.com</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="rounded-lg shadow-lg bg-white p-6 text-center">
              <FaMapMarkerAlt className="text-red-500 text-6xl mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Address</h3>
              <p className="text-gray-600 mt-2">123 Travel St, New York, NY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Send Us a Message
        </h2>
        <form className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
