import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../App";
import Header from "../Header/Header";
import "./CheckOut.css";
import toast from "react-hot-toast";

const CheckOut = () => {
  const [product, setProduct] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const { id } = useParams();
  const navigate = useNavigate();

  let price = parseInt(product.price);
  let shipping = 15;
  let total = price + shipping;

  useEffect(() => {
    fetch(`https://lit-plains-73999.herokuapp.com/product/` + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
      });
  }, [id]);

   const handleCheckout = () => {
      const loading = toast.loading("Please wait...", 5000)

      let order = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        product_name: product.product_name,
        price: product.price,
        wight: product.wight
      }

      fetch(`https://lit-plains-73999.herokuapp.com/order`, { 
         method: 'POST',
         headers:{"content-type" : 'application/json'},
         body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         toast.dismiss(loading);
         toast.success('Order successfull');
         navigate('/')
      })
      .catch(err => {
         toast.error(err);
      })
   } 

  return (
    <div className="text-start">
      <Header />
      <div className="section container">
        <h3>Check Out</h3>
        <div className="card text-center">
          <div className="row">
            <div className="col-md-6 text-start">
              <h4>Description</h4>
            </div>
            <div className="col-md-5">
              <h4>Quantity</h4>
            </div>
            <div className="col-md-1">
              <h4>Price</h4>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 text-start">
              <h5>{product.name}</h5>
            </div>
            <div className="col-md-5">
              <h5>1</h5>
            </div>
            <div className="col-md-1">
              <h5>${product.price}</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-start">
              <h5>Shepping fee</h5>
            </div>
            <div className="col-md-5">
              <h5> </h5>
            </div>
            <div className="col-md-1">
              <h5>$15</h5>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 text-start">
              <h4>Total</h4>
            </div>
            <div className="col-md-5">
              <h4> </h4>
            </div>
            <div className="col-md-1">
              <h4>${total}</h4>
            </div>
          </div>
        </div>
        <div className="checkout-btn">
          <button onClick={handleCheckout} className="btn btn-primary mt-3">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
