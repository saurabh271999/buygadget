// CartContext.js
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [buyPhone, setBuyPhone] = useState(null);

  return (
    <CartContext.Provider value={{ buyPhone, setBuyPhone }}>
      {children}
    </CartContext.Provider>
  );
};
