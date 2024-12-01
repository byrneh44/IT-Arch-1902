import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <AppContext.Provider
      value={{ cart, user, setUser, addToCart, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
