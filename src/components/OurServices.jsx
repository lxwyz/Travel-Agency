/* eslint-disable no-unused-vars */
import React from "react";
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaPlane className="text-blue-500 text-4xl mb-4" />,
      title: "Flight Booking",
      description: "Book flights to any destination with ease.",
    },
    {
      icon: <FaHotel className="text-blue-500 text-4xl mb-4" />,
      title: "Hotel Booking",
      description: "Book hotels at the best rates and deals.",
    },
    {
      icon: <FaUmbrellaBeach className="text-blue-500 text-4xl mb-4" />,
      title: "Vacation Packages",
      description: "Discover unique and exciting vacation packages.",
    },
    {
      icon: <FaConciergeBell className="text-blue-500 text-4xl mb-4" />,
      title: "Concierge Services",
      description:
        "Get personalized concierge services for a seamless travel experience.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-600">Our Services</h3>
          <p className="text-gray-600 mt-2">
            Discover the range of services we offer to make your travel stress-free.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center p-6"
            >
              {/* Icon */}
              <div className="flex justify-center">{service.icon}</div>
              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                {service.title}
              </h4>
              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
