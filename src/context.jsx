import { createContext, useEffect, useState } from "react";

export const Contexts = createContext(null);

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    if (cart.find((item) => item.id === obj.id))
      setCart(cart.filter((item) => item.id !== obj.id));
    else setCart([...cart, obj]);
  };

  // useEffect(() => {console.log(cart)}, [cart]);

  return (
    <Contexts.Provider
      value={{
        loading,
        setLoading,
        errMsg,
        setErrMsg,
        products,
        setProducts,
        cart,
        setCart,
        addToCart
      }}
    >
      {children}
    </Contexts.Provider>
  );
}
