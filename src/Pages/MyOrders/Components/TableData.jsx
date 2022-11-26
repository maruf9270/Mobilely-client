import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
   const navigate = useNavigate()
    return (
        <tr className='hover'>

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
            Productinfo?.resellPrice ?   Productinfo?.resellPrice:"No Data"    
          }
        </td>
        <td>
         {
          Productinfo?.tid ?  <img src="https://i.ibb.co/FVdKVXP/Png-Item-1652005-1-1-1.png" className='w-12 ' alt="" />:"Unpaid"
         }
        </td>
        
        <th>
          <button className={`btn btn-primary btn-xs ${Productinfo?.tid  ? "btn-disabled text-black":""}`} onClick={()=>navigate(`/payment/${order._id}`)}>{Productinfo?.tid  ? "Paid":"Pay"}</button>
        </th>

            </tr>
    );
};

export default TableData;