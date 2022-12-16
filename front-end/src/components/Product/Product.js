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
      <div className="card products shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.img}
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8 product">
            <div className="card-body">
              <a className="url" href={props.url}>
                {" "}
                <h5 className="card-title">{props.name.slice(0,40)}</h5>
              </a>
              <p className="card-text">By {props.seller}</p>
              <p className="card-text">Price: ${props.price}</p>
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
