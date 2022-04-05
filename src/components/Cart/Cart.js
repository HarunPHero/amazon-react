import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price
    }
    return (
        <div>
            <div class="card w-100">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">Order summery</li>
            <li class="list-group-item text-center">Ordered items: {props.cart.length}</li>
            <li class="list-group-item">Total: ${ parseInt(total)}</li>
            <li class="list-group-item">price:</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A third item</li>
            
          </ul>
          <div class="card-footer">Card footer</div>
        </div>
        </div>
    );
};

export default Cart;