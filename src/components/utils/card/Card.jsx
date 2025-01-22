import React from "react";
import PropTypes from "prop-types";
import Ratings from "../ratings/Ratings";

const Card = ({ plant }) => {
  return (
    <div className="bg-white shadow-lg my-4 p-4 rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full sm:w-[310px] md:w-[280px] lg:w-[300px] py-3 flex flex-col">
      {/* Image */}
      <img
        src={plant.primaryImage}
        alt={plant.name}
        className="h-48 w-full object-cover rounded-md"
      />

      {/* Card Content */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        {/* New Tag & Details */}
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {plant.season}
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-2 font-semibold text-lg text-green-700 truncate">
          {plant.name}
        </h3>

        {/* Price */}
        <div className="mt-1">
          <span className="text-green-700 font-bold">₹{plant.price}</span>
          <span className="text-gray-600 text-sm"> / plant</span>
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center">
          <span className="text-teal-600">
            <Ratings rating={plant.rating}></Ratings>
          </span>
        </div>

        {/* Additional Plant Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Sunlight:</span>{" "}
            {plant.sunlightRequirement || "Moderate"}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold text-gray-800">Moisture:</span>{" "}
            {plant.moistureRequirement || "Weekly"}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming ID is a string and required
    rating: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, // Name is required
    price: PropTypes.number.isRequired, // Price should be a number and required
    primaryImage: PropTypes.string.isRequired, // URL for image (string) and required
    sunlightRequirement: PropTypes.string.isRequired, // Sunlight requirement (string) and required
    moistureRequirement: PropTypes.string.isRequired, // Moisture requirement (string) and required
  }).isRequired, // 'plant' is a required prop of shape (structure)
};

export default Card;
