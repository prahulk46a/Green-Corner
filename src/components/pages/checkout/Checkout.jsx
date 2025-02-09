import { useState } from "react";
import { FaApplePay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdPayment } from "react-icons/md";
import { SiPaytm } from "react-icons/si";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    phone: "",
  });

  const [orderSummary, setOrderSummary] = useState({
    subtotal: location?.state?.finalPrice || 0,
    shipping: 50,
    total: location?.state?.finalPrice || 0,
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(formData);

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between w-full mt-10 px-4">
      {/* Left Section: Shipping Address */}
      <div className="bg-white p-8 rounded-2xl shadow-lg md:w-[60%] w-full mb-10">
        <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              name="country"
              placeholder="Country / Region"
              value={formData.country}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc"
              value={formData.apartment}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 mt-6"
          >
            Save Address
          </button>
        </form>
      </div>

      {/* Right Section: Order Summary */}
      <div className="bg-white p-8 rounded-2xl shadow-lg md:w-[35%] w-full mb-10">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-6 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {orderSummary.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹ {orderSummary.shipping}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹ {Number(orderSummary.total) + orderSummary.shipping}</span>
          </div>

          <button
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 mt-6"
          >
            Proceed to Payment
          </button>

          <div className="mt-6 text-sm text-gray-500">Pay via:</div>

          {/* Payment Methods */}
          <div className="flex justify-between mt-4 space-x-4">
            <div className="flex items-center space-x-2 px-4 py-3 border rounded-md">
              <FcGoogle className="text-2xl" />
              <span>Google Pay</span>
            </div>

            <div className="flex items-center space-x-2 px-4 py-3 border rounded-md">
              <FaApplePay className="text-3xl" />
              <span>Apple Pay</span>
            </div>

            <div className="flex items-center space-x-2 px-4 py-3 border rounded-md">
              <SiPaytm className="text-3xl" />
              <span>Paytm</span>
            </div>

            <div className="flex items-center space-x-2 px-4 py-3 border rounded-md">
              <MdPayment className="text-3xl" />
              <span>Credit/Debit Card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
