import React from 'react';

const OrderDetail = ({order}) => {
   console.log(order)
   return (
      <div>
         <div style={{padding: '10px 10px'}} className="card">
            <div className="row">
               <div className="col-4">
                  {order._id}
               </div>
               <div className="col-5">
                  {order.product_name}
               </div>
               <div className="col-2">
                  {order.wight}
               </div>
               <div className="col-1">
                  {order.price}
               </div>
            </div>
         </div>
      </div>
   );
};

export default OrderDetail;