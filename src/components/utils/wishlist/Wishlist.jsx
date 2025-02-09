import { useNavigate } from "react-router-dom";
import { Trash2, Heart } from "lucide-react";
import { useContext } from "react";
import { WishlistContextState } from "../../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContextState);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto min-h-[500px] p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlist.map((plant) => {
            const price =
              typeof plant.price === "number"
                ? `₹${plant.price.toFixed(2)}`
                : "Price Unavailable";

            return (
              <div
                key={plant.id}
                className="relative bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl"
              >
                {/* Plant Image */}
                <img
                  src={plant.primaryImage}
                  alt={plant.name}
                  className="h-48 w-full object-cover cursor-pointer transition hover:scale-105"
                  onClick={() => navigate("/plant-desc", { state: { plant } })}
                />

                {/* Product Details */}
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-lg text-green-700 truncate">
                    {plant.name}
                  </h3>
                  <p className="text-green-600 font-bold text-xl mt-1">
                    {price}
                  </p>

                  {/* Remove Button */}
                  <button
                    className="mt-3 flex items-center justify-center gap-2 text-red-600 hover:text-red-800 transition text-sm font-medium w-full py-2 bg-red-50 hover:bg-red-100 rounded-md"
                    onClick={() => removeFromWishlist(plant.id)}
                  >
                    <Trash2 className="w-5 h-5" /> Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
