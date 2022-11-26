import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TableData from './TableData';

const OrderTable = ({myOrders}) => {
  
    return (
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Job</th>
      
        <th></th>
      </tr>
    </thead>
    <tbody>
     


        {
            myOrders.map(order=><TableData key={order._id} order={order}></TableData>)
        }
     
     
    </tbody>
   
    
  </table>
</div>
    );
};

export default OrderTable;