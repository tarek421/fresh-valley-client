import React from "react";
import './Product.css';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="col-lg-4 col-md-6 mt-5">
       <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img
              src={product.image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{product.name}</h3>
        <div className="cards-footer">
          <h2>${product.price}</h2>
          <button>Buy now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
