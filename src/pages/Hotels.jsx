/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import { FaHotel } from "react-icons/fa";

const images = [
  {
    url: "/images/Chizanso.jpg",
    name: "Hotel Chizanso",
    location: "Tokyo, Japan",
  },
  {
    url: "/images/classic.jpg",
    name: "Classic Hotel",
    location: "Kyoto, Japan",
  },
  { url: "/images/japan.jpg", name: "Japan Inn", location: "Osaka, Japan" },
  { url: "/images/junior.jpg", name: "Junior Suites", location: "Nara, Japan" },
  {
    url: "/images/superior.jpg",
    name: "Superior Hotel",
    location: "Hokkaido, Japan",
  },
];

const Hotels = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/herosection.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-lg">
              Explore the World With Us
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8 shadow-md">
              Discover amazing places at exclusive deals
            </p>
            <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full text-lg md:text-xl font-medium hover:bg-white/30 transform transition duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Hotel Booking <FaHotel className="text-blue-500 text-lg" />
            </button>
          </div>
        </div>

        {/* Hotels Section */}
        <div className="hotels-section py-12 bg-gray-50">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Hotels</h2>
            <p className="text-gray-600 mt-2">
              Discover the finest accommodations and world-class hospitality.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
            {images.map((hotel, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                {/* Image */}
                <img
                  src={hotel.url}
                  alt={hotel.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="text-sm mt-1">{hotel.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
