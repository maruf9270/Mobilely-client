import React from "react";

const ProductCard = ({data,setModaldata,setPid,setdeleteID}) => {

   
    
   const {thumbnail,name,advertised,description,sold} = data
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 relative">
        <img
          src={thumbnail}
          alt="Mobile"
          className="rounded-xl"
        />
      {
        sold ?   <img src="https://i.ibb.co/jGpxvQ9/pngwing-com.png" className="absolute top-2 right-2" alt="" />:""
      }
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description.length > 100 ? <>{description.slice(0,100)}...</>: description}</p>
        <div className="card-actions">
          {/* <label className="btn btn-primary">Edit</label> */}
          <label className={`btn btn-primary`} htmlFor="small_modal_2" onClick={()=>setdeleteID(data)}>Delete</label>
        </div>
      </div>
      <label className={`btn btn-primary rounded-t-none  ${advertised ? 'btn-disabled' : ""}` } htmlFor="small_modal" onClick={()=>setPid(data)}>{advertised ? "Advertised":"Advertise"}</label>
    </div>
  );
};

export default ProductCard;
