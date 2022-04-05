import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] =useState([])
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddtoCart = (pd) => {
    const newCart = [...cart, pd]
    setCart(newCart)
   

  }
  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map((product) => (
          <Product img={product.img} name={product.name} seller={product.seller} price={parseInt(product.price)} stock={product.stock} url={product.url}
          handleAddtoCart={handleAddtoCart} product={product}></Product>
        ))}
      </div>
      <div className="cart-container fixed-bottom">
        
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
