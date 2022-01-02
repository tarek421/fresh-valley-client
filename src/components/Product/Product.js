import React from "react";
import './Product.css';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="col-md-4 mt-5">
       <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img
              src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>A blue bird</h3>
        <div>
          This a demo experiment to skew image container. It looks good.
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
