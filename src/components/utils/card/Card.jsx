import PropTypes from "prop-types";
import Ratings from "../ratings/Ratings";
import { useNavigate } from "react-router-dom";
import { CartContextState } from "../../context/CartContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

const Card = ({ plant }) => {
  const navigate = useNavigate();
  //To visualize cart added
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    navigate("/home/plant-desc", { state: { plant } });
  };

  //Bringing cart state
  const { addToCart } = useContext(CartContextState);

  //Adding current card plant data to cart
  const handleCart = (plant) => {
    addToCart(plant);
    // console.log(cart); //current cart

    //for visual effect of added to cart
    setAdded(true); // Trigger the effect
    setTimeout(() => setAdded(false), 1000); // Reset the effect after 1 second
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
            className={`mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ${
              added ? "animate-button-lift" : ""
            }`}
            onClick={() => handleCart(plant)}
          >
            Add to Cart
          </button>
        </div>

        {/* Visual Feedback */}
        {added && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1.05, y: 0 }}
            exit={{ opacity: 0, scale: 1, y: 10 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full bg-green-100/80 flex items-center justify-center"
          >
            <span className="text-green-800 font-bold text-lg">
              Added to Cart!
            </span>
          </motion.div>
        )}
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
