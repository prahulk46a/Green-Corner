const CartSummary = () => {
  return (
    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0  ">
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
          Total <span className="ml-auto">$52.00</span>
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
  );
};

export default CartSummary;
