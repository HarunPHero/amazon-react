import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();

    const savedCart = [];
    const keys = Object.keys(storedCart)
    console.log(keys);
    fetch("http://localhost:5000/productByKeys", {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(keys)
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        if (products.length) {
          for (const id in storedCart) {
            const addedProduct = products.find((product) => product._id === id);

            if (addedProduct) {
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              // console.log(storedCart)

              savedCart.push(addedProduct);
            }
          }
        
        } 
         setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};

export default useCart;
