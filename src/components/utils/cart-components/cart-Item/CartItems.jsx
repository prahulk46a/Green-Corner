import PropTypes from "prop-types";
import Dropdown from "../../dropdown-buttons/Dropdown";
import { useContext } from "react";
import { CartContextState } from "../../../context/CartContext";

const CartItems = ({ id, image, title, price, sizeOptions }) => {
  const { cart, removeFromCart } = useContext(CartContextState);
  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className="grid grid-cols-3 items-center gap-4">
      <div className="col-span-2 flex items-center gap-4">
        <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
          <button
            className="text-xs text-red-500 cursor-pointer mt-0.5"
            onClick={handleRemove}
          >
            Remove
          </button>
          <div className="flex gap-4 mt-4">
            <Dropdown label="XL" options={sizeOptions} />
            <div>
              <button
                type="button"
                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                  aria-hidden="true"
                >
                  <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                </svg>
                <span className="mx-2.5">2</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                  aria-hidden="true"
                >
                  <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <h4 className="text-base font-bold text-gray-800">${price}</h4>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  sizeOptions: PropTypes.arrayOf(PropTypes.string).isRequired, // Specify array type
};

export default CartItems;
