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

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id); // Removes the plant by id
    setCart(updatedCart);
  };

  return (
    <CartContextState.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContextState.Provider>
  );
};

export default CartContext;
