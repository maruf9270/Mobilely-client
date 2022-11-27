import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({data}) => {

  return (
   <Link className="btn btn-ghost h-full hover: " to={`/brands/${data.brand}`}>
   <div className="card w-60 bg-base-100 shadow-xl image-full h-48">
        <figure>
          <img src={data?.image} alt="Shoes"  className="object-fill"/>
        </figure>
        <div className="card-body flex justify-center items-center w-full h-full ">
            
       <span className="text-3xl font-bold">
       {
                data.brand
        }
       </span>
        </div>
      </div>
   </Link>
  );
};

export default BrandsCard;
