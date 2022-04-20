import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  

  let totalquntity = 0;

  let total = 0;
  for (const product of cart) {
    
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalquntity = totalquntity + product.quantity;
  }
  //cart calculation
  const shipping = total / 40;
  const tax = (shipping + total) / 15;
  const ParseShipping = parseInt(shipping);
  const ParseTotal = parseInt(total);
  const ParseTax = parseInt(tax);
  const GTotal = ParseShipping + ParseTotal + ParseTax;
  /////////////////////////////////////////////////
  return (
    <div>
      <div className="card w-100">
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">Order summery</li>
          <li className="list-group-item text-center">
            Ordered items: {totalquntity}
          </li>
          <li className="list-group-item">
            {" "}
            <span className="cart-item">Total:</span> ${ParseTotal}
          </li>
          <li className="list-group-item">
            <span className="cart-item">Shipping:</span> ${ParseShipping}
          </li>
          <li className="list-group-item">
            <span className="cart-item">Tax:</span> ${ParseTax}
          </li>
          <li className="gtotal list-group-item">
          <span className="cart-item">Grandtotal:</span> ${GTotal}
          </li>
          <li className="card-footer">
            {props.children}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
