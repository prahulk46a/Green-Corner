import { createContext, useState } from "react";

export const WishlistContextState = createContext({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

// eslint-disable-next-line react/prop-types
const WishlistContext = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (plant) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(
        (item) => item.id === plant.id
      );
      if (isAlreadyInWishlist) return prevWishlist;
      return [...prevWishlist, plant];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  return (
    <WishlistContextState.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContextState.Provider>
  );
};

export default WishlistContext;
