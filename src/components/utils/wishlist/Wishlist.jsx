import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { WishlistContextState } from "../../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContextState);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto min-h-[500px] p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((plant) => (
            <div
              key={plant.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={plant.primaryImage}
                alt={plant.name}
                className="h-40 w-full object-cover cursor-pointer"
                onClick={() =>
                  navigate("/home/plant-desc", { state: { plant } })
                }
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="font-semibold text-lg text-green-700 truncate">
                  {plant.name}
                </h3>
                <p className="text-green-600 font-bold">₹{plant.price}</p>
                <button
                  className="mt-2 flex items-center gap-2 text-red-600 hover:text-red-800"
                  onClick={() => removeFromWishlist(plant.id)}
                >
                  <Trash2 className="w-5 h-5" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
