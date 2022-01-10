import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch(`https://lit-plains-73999.herokuapp.com/products`)
    .then(res=>res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
