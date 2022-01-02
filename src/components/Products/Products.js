import React from "react";
import Product from "../Product/Product";

const Products = () => {
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
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
