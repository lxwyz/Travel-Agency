/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Travel Agency Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Travel Agency</h2>
          <p>Your trusted partner for unforgettable travel experiences. Explore the world with us.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/gallery" className="hover:text-gray-400">Hotels</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/blogs" className="hover:text-gray-400">Blogs</Link>
          </div>
        </div>

        {/* Follow Us and Subscribe */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
          <form className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-2">
            <input 
              type="text" 
              placeholder="Enter your email address" 
              className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
