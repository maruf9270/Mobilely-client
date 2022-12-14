import React, { useContext } from 'react';
import SmallSpinner from '../../../Components/SmallSpinner';
import { UserContext } from '../../../Contexts/AuthContexts';
import { useAdmin } from '../../../Hooks/useAdmin';

const SelerCard = ({sellers,setVarify,setDeleteData,tloadign}) => {
  const {user} = useContext(UserContext)
 
  const [admin,adminLoading] = useAdmin(user?.email)
  
    let index = 1
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
          {
            sellers?.map(s=> <tr className="hover" key={s._id}>
                 <th>{index++}</th>
            <td> <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={s?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{s.name}</div>
              <div className="text-sm opacity-50">{s?.email}</div>
            </div>
          </div></td>
            <td>{
                  s?.admin ? "Admin":  s?.varified ? "Varified" : "Unvarified"
                }</td>
            <td>
            <label className={`btn btn-primary mx-3 btn-xs ${s?.varified ? "btn-disabled":""}`} htmlFor="varify" onClick={()=>setVarify(s)}>{tloadign ? <SmallSpinner></SmallSpinner>: s?.varified ? "Verified":"Verify"}</label>
            <label className={`btn btn-xs ${s.admin ? "btn-disabled":""}`} onClick={()=>setDeleteData(s)} htmlFor="deleteSeller">{tloadign || adminLoading? <SmallSpinner></SmallSpinner>: "Delete"}</label>
            </td>
            </tr>)
            
          }
            
          </tbody>
        </table>
      </div>
    );
};

export default SelerCard;