/* eslint-disable no-unused-vars */
import { div, section } from "framer-motion/client";
import React from "react";

const destination = [
  {
    image: "/images/czech.jpeg",
    title: "Czech Republic, Prague",
    description:
      "Czech Republic is a unitary parliamentary republic in Southeast Europe. With 10.7 million inhabitants, it is the most populous member state of the Czechoslovakia union and the eighth most populous member state of the European Union.",
  },
  {
    image: "/images/france-eiffel-tower-paris.jpg",
    title: "Paris, France",
    description:
      "The Eiffel Tower, completed in 1889, is the tallest man-made structure in the world at 324 meters (1,063 feet) and its current height is 332 meters (1,091 feet).",
  },
  {
    image: "/images/japan.jpg",
    title: "Tokyo, Japan",
    description:
      "Tokyo is the capital and most populous metropolitan area of Japan. With a population of over 13.9 million people, it is the most populous city in the world and the most populous metropolitan area in Asia.",
  },
  {
    image: "/images/new york.jpeg",
    title: "New York, USA",
    description:
      "New York City, often referred to as simply New York, is the most populous city in the United States. With an estimated 2019 population of 8,550,405, it is the most populous major city in the world.",
  },
];
const PopularDestination = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-600">Popular Destination</h3>
          <p className="text-gray-600 mt-2">
            Explore some of the most visited and iconic locations around the world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destination.map((city, index) => (
              <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img 
                src={city.image}
                alt={city.title}
                className="w-full h-48 object-cover"
                 />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-800">{city.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">
                  {city.description.length > 120
                    ? `${city.description.substring(0, 120)}...`
                    : city.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
