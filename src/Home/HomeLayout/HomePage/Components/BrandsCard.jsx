import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({data}) => {
    console.log(data);
  return (
   <Link className="btn btn-ghost h-full " to={`/brands/${data.brand}`}>
   <div className="card w-60 bg-base-100 shadow-xl image-full h-48">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center items-center w-full h-full text-3xl">
            
        {
                data.brand
        }
        </div>
      </div>
   </Link>
  );
};

export default BrandsCard;
