import { useContext } from "react";
import CartItems from "../../utils/cart-components/cart-Item/CartItems";
import { CartContextState } from "../../context/CartContext";
import CartSummary from "../../utils/cart-components/CartSummary/CartSummary";

const Cart = () => {
  // Receive cart state {cart} here from cart-context and map on it
  const { cart } = useContext(CartContextState);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Cart Section */}
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          <div className="space-y-4">
            {cart.length > 0 ? (
              cart.map((cartItem, idx) => (
                <CartItems
                  key={idx} // Always add a unique key for list items in React
                  image={cartItem.primaryImage}
                  title={cartItem.name}
                  price={cartItem.price}
                  id={cartItem.id}
                  sizeOptions={["SM", "MD", "XL", "XXL"]}
                />
              ))
            ) : (
              <p className="text-center  text-gray-800 text-2xl">
                Nothing to cart
              </p>
            )}
          </div>
        </div>

        {/* Summary Section */}
        <div className="rounded-md p-4 md:sticky top-0">
          <CartSummary totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
