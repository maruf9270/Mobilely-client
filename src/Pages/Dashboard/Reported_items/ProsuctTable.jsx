import React from 'react';

const ProsuctTable = ({reportedItems,setDelete}) => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
        </th>
        <th>Name & Photo</th>
        <th>Seller</th>
        <th>Delete</th>
       
      </tr>
    </thead>
    <tbody>
     {
        reportedItems?.map(item=><tr key={item._id}>
            <th> 

            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.thumbnail} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item.brand}</div>
                  <div className="text-sm opacity-50">{item?.name}</div>
                </div>
              </div>
            </td>
            <td>
            {item?.user?.name}
              <br/>
              <span className="badge badge-ghost badge-sm">{item?.user?.email}</span>
            </td>
          
            <th>
              <label className="btn btn-ghost btn-xs" htmlFor="DeleteReport" onClick={()=>setDelete(item)}>Delete</label>
            </th>
          </tr>
          )
     }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ProsuctTable;