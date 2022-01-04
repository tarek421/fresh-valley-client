import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/products`)
    .then(res=>res.json())
    .then(data => setProducts(data))
  },[])

  const data = [
    {
      name: "Minicate Rice- 50kg",
      price: "$334",
      image: "minicate",
    },
    {
      name: "Minicate Rice- 50kg",
      price: "$334",
      image: "minicate",
    },
    {
      name: "Minicate Rice- 50kg",
      price: "$334",
      image: "minicate",
    },
    {
      name: "Minicate Rice- 50kg",
      price: "$334",
      image: "minicate",
    },
    {
      name: "Minicate Rice- 50kg",
      price: "$334",
      image: "minicate",
    },
    {
      name: "Minicate Rice- 50kg",
      price: "$334",
      image: "minicate",
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
