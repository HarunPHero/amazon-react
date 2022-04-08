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
      <div class="card w-100">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">Order summery</li>
          <li class="list-group-item text-center">
            Ordered items: {totalquntity}
          </li>
          <li class="list-group-item">
            {" "}
            <span class="cart-item">Total:</span> ${ParseTotal}
          </li>
          <li class="list-group-item">
            <span class="cart-item">Shipping:</span> ${ParseShipping}
          </li>
          <li class="list-group-item">
            <span class="cart-item">Tax:</span> ${ParseTax}
          </li>
          <li class=" gtotal card-footer text-danger text-center">
            grandTotal: ${GTotal}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
