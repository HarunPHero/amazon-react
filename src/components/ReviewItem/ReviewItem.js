import React from "react";

const ReviewItem = (props) => {
  const { name, img, quantity, price, key } = props.product;
  const { handleRemove } = props;

  return (
    <div>
      <div className="card products shadow-lg p-3 m-5 bg-body rounded">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8 product">
            <div className="card-body">
              <h5>{name.slice(0,60)}</h5>
              <h5>Price: {parseInt(price)}</h5>
              <h5>Quantity: {quantity}</h5>

              <button
                onClick={() => handleRemove(key)}
                className="btn btn-warning"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
