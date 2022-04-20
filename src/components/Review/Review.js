import React from "react";
import useCart from "../../useProducts/useCart";
import useProduct from "../../useProducts/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [product] = useProduct();
  const [cart, setCart] = useCart(product);

  const handleRemove = (key) => {
    const newCart = cart.filter((products) => products.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  return (
    <div>
      {cart.map((product) => (
        <ReviewItem
          handleRemove={handleRemove}
          key={product.key}
          product={product}
        ></ReviewItem>
      ))}
      <div className="cart-container fixed-bottom">
        <Cart cart={cart}>
        <a href="/shop" className="btn btn-warning">Place order</a>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
