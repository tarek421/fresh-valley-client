import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Header from "../Header/Header";
import "./ManageProduct.css";
import ManageProductDetail from "./ManageProductDetail";

const ManageProduct = () => {
  const [loggedInUser] = useContext(userContext);
  const [orders, setOrder] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(
      `http://localhost:5000/all-order`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data))
      .catch((err) => console.error(err));
  }, [loggedInUser.email]);

  return (
    <div className="text-start">
      {loggedInUser?.IsSignedIn && (
        <div className="container accordion-body">
          <div style={{ padding: "10px 10px", background:'aqua' }} className="card">
            <div className="row">
              <div className="col-3">
                <h2>Order Id</h2>
              </div>
              <div className="col-3">
                <h2>Email</h2>
              </div>
              <div className="col-2">
                <h2>Name</h2>
              </div>
              <div className="col-2">
                <h2 className='text-center'>Weight</h2>
              </div>
              <div className="col-2 text-center">
                <h2 style={{fontSize:'22px', textAlign:"center"}}>Delete</h2>
              </div>
            </div>
          </div>
          <hr style={{ margin: "0" }} />
          {orders.map(order => <ManageProductDetail order={order}/>)}
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
