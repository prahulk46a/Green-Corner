import PropTypes from "prop-types";
import Ratings from "../ratings/Ratings";
import { useNavigate } from "react-router-dom";
import { CartContextState } from "../../context/CartContext";
import { WishlistContextState } from "../../context/WishlistContext"; // Import WishlistContext
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Card = ({ plant }) => {
  const navigate = useNavigate();
  // To visualize cart added
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    navigate("/plant-desc", { state: { plant } });
  };

  // Bringing cart state
  const { addToCart } = useContext(CartContextState);

  // Bringing wishlist state
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContextState);

  // Check if the plant is already in the wishlist
  const isWishlisted = wishlist.some((item) => item.id === plant.id);

  // Adding current card plant data to cart
  const handleCart = (plant) => {
    addToCart(plant);
    setAdded(true); // Trigger the effect
    setTimeout(() => setAdded(false), 1200); // Reset the effect after 1.2 second
  };

  // Toggle wishlist
  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(plant.id);
    } else {
      addToWishlist(plant);
    }
  };

  return (
    <div className="relative bg-white shadow-lg xs:my-4 md:my-10 rounded-lg overflow-hidden transform transition-transform hover:scale-105 w-full xs:ml-2 xs:w-[130px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] 2xl:w-[270px] flex flex-col">
      {/* Wishlist Icon */}
      <div
        className="absolute top-2 right-2 bg-white p-1 rounded-full cursor-pointer shadow-md"
        onClick={toggleWishlist}
      >
        <Heart
          className={`w-5 h-5 ${
            isWishlisted ? "text-red-500 fill-red-500" : "text-gray-400"
          }`}
        />
      </div>

      {/* Image */}
      <img
        src={plant.primaryImage}
        alt={plant.name}
        className="h-32 sm:h-28 md:h-32 lg:h-40 xl:h-48 object-cover rounded-md cursor-pointer"
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
            <Ratings rating={Number(plant.rating)}></Ratings>
          </span>
        </div>

        <div className="lg:block">
          <button
            className={`mt-2 xs:px-2 xs:py-1 xs:text-md md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ${
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
