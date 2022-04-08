import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  const { star } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div>
      <div class="card products shadow-lg p-3 mb-5 bg-body rounded">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.img}
              class="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div class="col-md-8 product">
            <div class="card-body">
              <a className="url" href={props.url}>
                {" "}
                <h5 class="card-title">{props.name}</h5>
              </a>
              <p class="card-text">By {props.seller}</p>
              <p class="card-text">Price: ${props.price}</p>
              <p>Only {props.stock} left-order soon</p>
               <Rating
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              />
              <br></br>
              <button
                onClick={() => props.handleAddtoCart(props.product)}
                className="btn btn-warning"
              >
                {element} Add to cart
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
