import { useContext } from "react";
import CartItems from "../../utils/cart-components/cart-Item/CartItems";
import { CartContextState } from "../../context/CartContext";

//receive cart state {cart} here from cart-context and map on it
const Cart = () => {
  const { cart } = useContext(CartContextState);
  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Cart Section */}
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          <div className="space-y-4">
            {cart.map((cartItem, idx) => {
              return (
                <CartItems
                  key={idx} // Always add a unique key for list items in React
                  image={cartItem.primaryImage}
                  title={cartItem.name}
                  price={cartItem.price}
                  sizeOptions={["SM", "MD", "XL", "XXL"]}
                />
              );
            })}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <div className="flex border border-blue-600 overflow-hidden rounded-md">
            <input
              type="text"
              placeholder="Promo code"
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
            />
            <button
              type="button"
              className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white"
            >
              Apply
            </button>
          </div>
          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Discount <span className="ml-auto font-bold">$0.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Shipping <span className="ml-auto font-bold">$2.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total <span className="ml-auto">$6.00</span>
            </li>
          </ul>
          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
