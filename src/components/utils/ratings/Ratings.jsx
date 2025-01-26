import { MdStar, MdStarBorder } from "react-icons/md";
import FractionalStar from "./FractionalStars";
import PropTypes from "prop-types";

const Ratings = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); // Number of fully filled stars
  const fractionalStar = rating % 1; // Fractional part (e.g., 0.7)
  const emptyStars = totalStars - Math.ceil(rating); // Remaining empty stars

  return (
    <div className="flex items-center">
      {/* Fully Filled Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <MdStar key={index} className="text-yellow-600 text-lg" />
      ))}

      {/* Fractional Star */}
      {fractionalStar > 0 && (
        <FractionalStar fillPercentage={fractionalStar * 100} />
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <MdStarBorder key={index} className="text-gray-400 text-lg" />
      ))}

      {/* Numerical Rating */}
      <span className="ml-2 text-gray-600 text-sm">{rating.toFixed(1)}</span>
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired, // Validate `rating` directly as a number
};

export default Ratings;
