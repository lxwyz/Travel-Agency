/* eslint-disable no-unused-vars */
import React from 'react';
import PopularDestination from '../components/PopularDestination';
import OurServices from '../components/OurServices';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Home = () => {
  return (
   <>
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
        <button
          className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full text-lg md:text-xl font-medium hover:bg-white/30 transform transition duration-300 hover:scale-105 shadow-lg"
        >
          Get Started ✈️
        </button>
      </div>
    </div>
    <PopularDestination/>
    <OurServices/>
    <Clients/>
    <Footer/>
    </>
  );
};

export default Home;
