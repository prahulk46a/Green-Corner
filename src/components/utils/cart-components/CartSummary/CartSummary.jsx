import { useState } from "react";

const CartSummary = ({ totalPrice }) => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Standard calculations
  const tax = parseFloat(((totalPrice * 18) / 100).toFixed(2)); // 18% tax
  const discount = parseFloat(((totalPrice * 5) / 100).toFixed(2)); // 5% base discount
  const shipping = totalPrice > 0 ? 5.0 : 0.0; // Shipping charge only if cart is not empty

  // Apply additional discount if promo code is correct
  let additionalDiscount = 0;
  if (isPromoApplied) {
    additionalDiscount = parseFloat(((totalPrice * 5) / 100).toFixed(2)); // Extra 5% off
  }

  let finalPrice = totalPrice + tax - discount - additionalDiscount + shipping;
  finalPrice = finalPrice > 0 ? finalPrice.toFixed(2) : "0.00"; // Ensures no negative values

  // Handle Promo Code Submission
  const handleApplyPromo = () => {
    if (promoCode.trim().toLowerCase() === "greencorner") {
      setIsPromoApplied(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid promo code. Try again!");
      setIsPromoApplied(false);
    }
  };

  return (
    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
      {/* Promo Code Section */}
      <div className="flex border border-blue-600 overflow-hidden rounded-md">
        <input
          type="text"
          placeholder="Promo code"
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          disabled={isPromoApplied}
        />
        <button
          type="button"
          className={`flex items-center justify-center font-semibold tracking-wide px-4 text-sm text-white ${
            isPromoApplied
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={handleApplyPromo}
          disabled={isPromoApplied}
        >
          {isPromoApplied ? "Applied" : "Apply"}
        </button>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}

      {/* Summary Details */}
      <ul className="text-gray-800 mt-8 space-y-4">
        <li className="flex justify-between text-base">
          <span>Total Cart Price</span>
          <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-base">
          <span>Discount (5%)</span>
          <span className="font-bold text-green-600">-₹{discount}</span>
        </li>
        {isPromoApplied && (
          <li className="flex justify-between text-base">
            <span>Promo Discount (5%)</span>
            <span className="font-bold text-green-600">
              -₹{additionalDiscount}
            </span>
          </li>
        )}
        <li className="flex justify-between text-base">
          <span>Shipping Charges</span>
          <span className="font-bold">₹{shipping.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-base">
          <span>Tax (18%)</span>
          <span className="font-bold text-red-600">+₹{tax}</span>
        </li>
        <li className="flex justify-between text-lg font-bold border-t pt-2">
          <span>Total</span>
          <span>₹{finalPrice}</span>
        </li>
      </ul>

      {/* Checkout Button */}
      <div className="mt-8">
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
