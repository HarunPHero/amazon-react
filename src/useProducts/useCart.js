import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getStoredCart();

    const storedCart = [];
    if (products.length) {
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);

        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart, setCart];
};

export default useCart;
