import { createContext, useState } from "react";

export const CartContextState = createContext();

// eslint-disable-next-line react/prop-types
const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        // If the item exists, increase the count
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If the item doesn't exist, add it with count 1
        return [...prevCart, { ...plant, count: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0); // Remove items with count 0
    });
  };

  return (
    <CartContextState.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContextState.Provider>
  );
};

export default CartContext;
