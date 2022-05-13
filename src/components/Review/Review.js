import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useCart from "../../useProducts/useCart";
import useProduct from "../../useProducts/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [product] = useProduct();
  const [cart, setCart] = useCart(product);
  const history = useHistory()

  const handleRemove = (key) => {
    const newCart = cart.filter((products) => products.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handleShipping = () =>{
    setCart([])
    clearTheCart()
    history.push("/place")
  }

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
        <button onClick={handleShipping} className="btn btn-warning">Place order</button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
