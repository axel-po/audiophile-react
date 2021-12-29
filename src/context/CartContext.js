import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [toggleCart, setToggleCart] = useState(false);

  return <CartContext.Provider value={{ toggleCart, setToggleCart }}>{props.children}</CartContext.Provider>;
};

export default CartContextProvider;
