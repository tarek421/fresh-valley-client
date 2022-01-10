import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Header from "../Header/Header";
import "./Order.css";
import OrderDetail from "./OrderDetail";

const Order = () => {
  const [loggedInUser] = useContext(userContext);
  const [myorder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://lit-plains-73999.herokuapp.com/myorder?email=` +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setMyOrder(data))
      .catch((err) => console.error(err));
  }, [loggedInUser.email]);

  return (
    <div className="text-start">
      <Header />
      {loggedInUser?.IsSignedIn && (
        <div className="container accordion-body">
          <div style={{ padding: "10px 10px", background:'aqua' }} className="card">
            <div className="row">
              <div className="col-4">
                <h2>Order Id</h2>
              </div>
              <div className="col-5">
                <h2>Product Name</h2>
              </div>
              <div className="col-2">
                <h2>Wight</h2>
              </div>
              <div className="col-1">
                <h2>Price</h2>
              </div>
            </div>
          </div>
          <hr style={{ margin: "0" }} />
          {myorder.map((order) => (
            <OrderDetail order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
