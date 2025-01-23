import PropTypes from "prop-types";
import Ratings from "../ratings/Ratings";

const Card = ({ plant }) => {
  return (
    <div className="bg-white shadow-lg my-2 md:my-3 lg:my-4 p-2 md:p-3 lg:p-4 rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full xs:mx-1 xs:w-[175px] sm:w-[230] md:w-[250px] lg:w-[294px] xl:w-[315px] flex flex-col">
      {/* Image */}
      <img
        src={plant.primaryImage}
        alt={plant.name}
        className="h-32 sm:h-28 md:h-32 lg:h-40 xl:h-48  object-cover rounded-md"
      />

      {/* Card Content */}
      <div className="p-2 md:p-4 sm:min-w-40 lg:p-4 flex-grow flex flex-col justify-between space-y-2 md:space-y-3">
        {/* New Tag & Details */}
        <div className="flex items-baseline space-x-2">
          <span className="inline-block bg-green-400 text-teal-800 py-0.5 px-2 text-[10px] md:text-xs rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div className="text-gray-600 text-[10px] md:text-xs uppercase font-semibold tracking-wide">
            {plant.availability}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-sm md:text-base lg:text-lg text-green-700 truncate">
          {plant.name}
        </h3>

        {/* Price */}
        <div>
          <span className="text-green-700 font-bold text-sm md:text-base lg:text-lg">
            ₹{plant.price}
          </span>
          <span className="text-gray-600 text-xs md:text-sm"> / plant</span>
        </div>

        {/* Rating */}
        <div className="flex items-center">
          <span className="text-teal-600 scale-90 md:scale-100 ">
            <Ratings rating={plant.rating}></Ratings>
          </span>
        </div>

        {/* Additional Plant Info - Hidden on sm and md screens */}
        <div className="hidden lg:block space-y-1">
          <p className="text-xs md:text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Sunlight:</span>{" "}
            {plant.sunlightRequirement || "Moderate"}
          </p>
          <p className="text-xs md:text-sm text-gray-600">
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
    id: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    primaryImage: PropTypes.string.isRequired,
    sunlightRequirement: PropTypes.string.isRequired,
    moistureRequirement: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
