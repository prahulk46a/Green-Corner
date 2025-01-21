import React from "react";
import PropTypes from "prop-types";

const Card = ({ plant }) => {
  return (
    <div className="bg-slate-200 shadow-lg my-2 p-4 rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full sm:w-[310px] md:w-[280px] lg:w-[300px] py-3 min-h-96 flex flex-col">
      {/* Image */}
      <img
        src={`${plant.primaryImage}`}
        alt={plant.name}
        className="w-full h-48 sm:h-56 object-cover rounded-md"
      />

      <div className="p-4 flex-grow flex flex-col justify-between">
        {/* Name and Price */}
        <h3 className="text-base sm:text-lg font-semibold text-green-700">
          {plant.name}
        </h3>
        <h3 className="text-base sm:text-lg font-semibold text-green-700">
          ₹{plant.price}
        </h3>

        {/* Plant Details */}
        <div>
          <p className="text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Sunlight:</span>{" "}
            {plant.sunlightRequirement}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            <span className="font-semibold text-gray-800">Moisture:</span>{" "}
            {plant.moistureRequirement}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming ID is a string and required
    name: PropTypes.string.isRequired, // Name is required
    price: PropTypes.number.isRequired, // Price should be a number and required
    primaryImage: PropTypes.string.isRequired, // URL for image (string) and required
    sunlightRequirement: PropTypes.string.isRequired, // Sunlight requirement (string) and required
    moistureRequirement: PropTypes.string.isRequired, // Moisture requirement (string) and required
  }).isRequired, // 'plant' is a required prop of shape (structure)
};

export default Card;
