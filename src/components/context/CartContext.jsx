import { createContext, useState } from "react";

export const CartContextState = createContext();

// eslint-disable-next-line react/prop-types
const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some((item) => item.id === plant.id);
      if (isAlreadyInCart) return prevCart; // Avoid duplicates
      return [...prevCart, plant];
    });
  };

  return (
    <CartContextState.Provider value={{ cart, addToCart }}>
      {children}
    </CartContextState.Provider>
  );
};

export default CartContext;
