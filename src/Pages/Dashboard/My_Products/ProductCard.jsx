import React from "react";

const ProductCard = ({data,setModaldata,setPid,setdeleteID}) => {

   
    
   const {thumbnail,name,advertised} = data
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={thumbnail}
          alt="Mobile"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <label className="btn btn-primary">Edit</label>
          <label className={`btn btn-primary`} htmlFor="small_modal_2" onClick={()=>setdeleteID(data)}>Delete</label>
        </div>
      </div>
      <label className={`btn btn-primary rounded-t-none  ${advertised ? 'btn-disabled' : ""}` } htmlFor="small_modal" onClick={()=>setPid(data)}>{advertised ? "Advertised":"Advertise"}</label>
    </div>
  );
};

export default ProductCard;
