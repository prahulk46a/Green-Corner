import PropTypes from "prop-types";
import Ratings from "../ratings/Ratings";
import { useNavigate } from "react-router-dom";
import { CartContextState } from "../../context/CartContext";
import { useContext } from "react";

const Card = ({ plant }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home/plant-desc", { state: { plant } });
  };

  //Bringing cart state
  const { cart, addToCart } = useContext(CartContextState);

  //Adding current card plant data to cart
  const handleCart = (plant) => {
    addToCart(plant);
    // console.log(cart); //current cart
  };

  return (
    <div className="bg-white shadow-lg  my-3  rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full xs:mx-1 xs:w-[175px] sm:w-[230] md:w-[250px] lg:w-[294px] xl:w-[315px] flex flex-col">
      {/* Image */}
      <img
        src={plant.primaryImage}
        alt={plant.name}
        className="h-32 sm:h-28 md:h-32 lg:h-40 xl:h-48  object-cover rounded-md"
        onClick={handleClick}
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

        <div className=" lg:block">
          <button
            className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => handleCart(plant)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    primaryImage: PropTypes.string.isRequired,
    sunlightRequirement: PropTypes.string.isRequired,
    moistureRequirement: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
