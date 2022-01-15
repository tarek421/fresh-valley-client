import React from 'react';

const ManageProductDetail = ({order}) => {
   console.log(order)
   return (
      <div>
         <div style={{padding: '10px 10px'}} className="card">
            <div className="row">
               <div className="col-3">
                  {order._id}
               </div>
               <div className="col-3">
                  {order.email}
               </div>
               <div className="col-2">
                  {order.name}
               </div>
               <div className="col-2 text-center">
                  {order.wight}
               </div>
               <div className="col-2 text-center">
                  <button>delet</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ManageProductDetail;