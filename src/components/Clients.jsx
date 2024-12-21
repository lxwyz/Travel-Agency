/* eslint-disable no-unused-vars */
import React from "react";

const Clients = () => {
  const testimonials = [
    {
      image: "/images/jame smith.jpg",
      name: "James Smith",
      description:
        "We had a fantastic time exploring the world with our new travel agency. They were incredibly helpful and meticulous with our booking process.",
    },
    {
      image: "/images/johndoe.jpg",
      name: "John Doe",
      description:
        "This travel agency provided excellent service and helped us plan the perfect vacation.",
    },
    {
      image: "/images/Sarah.jpg",
      name: "Sarah",
      description:
        "Great customer service and fantastic travel packages. We will definitely book with them again.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-600">What Our Clients Say</h3>
          <p className="text-gray-600 mt-2">
            Hear from our satisfied clients who have traveled with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              {/* Client Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
              </div>
              {/* Client Name */}
              <h4 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
