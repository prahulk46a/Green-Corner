import PropTypes from "prop-types";
import { MdStar, MdStarBorder } from "react-icons/md";

const FractionalStar = ({ fillPercentage }) => {
  return (
    <div className="relative inline-block">
      {/* Empty Star */}
      <MdStarBorder className="text-gray-400 text-lg" />
      {/* Filled Star */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${fillPercentage}%` }}
      >
        <MdStar className="text-yellow-600 text-lg" />
      </div>
    </div>
  );
};

FractionalStar.propTypes = {
  fillPercentage: PropTypes.number.isRequired, // Validate `rating` directly as a number
};
export default FractionalStar;
