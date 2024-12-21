/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaBullseye,
  FaGlobe,
  FaHandshake,
  FaUserTie,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-lg">
              About Us
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 shadow-md">
              Learn more about our journey, vision, and values.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We are a team of passionate individuals committed to providing the
            best travel experiences. With years of experience in the travel
            industry, we ensure our customers receive top-notch services and
            unforgettable memories.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Feature Cards */}
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="rounded-lg shadow-lg bg-white p-6 text-center">
                <FaBullseye className="text-blue-500 text-6xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">Our Mission</h3>
                <p className="text-gray-600 mt-2">
                  To inspire and empower travelers to explore the world
                  fearlessly.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="rounded-lg shadow-lg bg-white p-6 text-center">
                <FaGlobe className="text-green-500 text-6xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">Our Vision</h3>
                <p className="text-gray-600 mt-2">
                  To become the world’s most trusted travel partner.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="rounded-lg shadow-lg bg-white p-6 text-center">
                <FaHandshake className="text-yellow-500 text-6xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">Our Values</h3>
                <p className="text-gray-600 mt-2">
                  Integrity, excellence, and a deep respect for diverse
                  cultures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-12 px-6 md:px-12 lg:px-24 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Our dedicated team works tirelessly to make your journeys
            extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Team Member Cards */}
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="rounded-lg shadow-lg bg-gray-50 p-6 text-center">
                <FaUserTie className="text-blue-500 text-6xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="rounded-lg shadow-lg bg-gray-50 p-6 text-center">
                <FaChartLine className="text-green-500 text-6xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4">
              <div className="rounded-lg shadow-lg bg-gray-50 p-6 text-center">
                <FaUsers className="text-yellow-500 text-6xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">Alice Brown</h3>
                <p className="text-gray-600">Operations Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
