import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useCart from "../../useProducts/useCart";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useCart();
  const history = useHistory();

  const handleRemove = (_id) => {
    const newCart = cart.filter((products) => products._id !== _id);
    setCart(newCart);
    removeFromDb(_id);
  };
  const handleShipping = () => {
    setCart([]);
    clearTheCart();
    history.push("/place");
  };

  return (
    <div>
      {cart.map((product) => (
        <ReviewItem
          handleRemove={handleRemove}
          key={product._id}
          product={product}
        ></ReviewItem>
      ))}
      <div className="cart-container fixed-bottom">
        <Cart cart={cart}>
          <button onClick={handleShipping} className="btn btn-warning">
            Place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
