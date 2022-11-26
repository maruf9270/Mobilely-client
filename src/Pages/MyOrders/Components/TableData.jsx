import React, { useEffect, useState } from 'react';

const TableData = ({order}) => {
    const[ Productinfo,setPrductInfo ]= useState('')
    const id = order.productId
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_server}/product/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setPrductInfo(data)
        })
    },[order,id])
    console.log("From td",Productinfo);
    return (
        <tr key={order._id}>

            <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={Productinfo?.thumbnail} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{Productinfo?.brand}</div>
              <div className="text-sm ">{Productinfo?.name}</div>
            </div>
          </div>
        </td>
        <td>
          {
            Productinfo?.price
          }
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>

            </tr>
    );
};

export default TableData;