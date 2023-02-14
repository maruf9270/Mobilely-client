import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({ data }) => {
  console.log(data.style.text);
  const brandCardv2 = (
    <>
      <Link
        to={`/brands/${data.brand}`}
        className={`btn btn-ghost  w-[110px] text-[${data.style.text}] ` }
        style={{backgroundColor:`${data.style.bg}`,color:`${data.style.text}`}}      >

        <button 
         >
          {
            data.brand
          }
        </button>
      </Link>
    </>
  );

  return (
    // <Link className="btn btn-ghost h-full hover: " to={`/brands/${data.brand}`}>
    //   <div className="card w-60 bg-base-100 shadow-xl image-full h-48">
    //     <figure>
    //       <img src={data?.image} alt="Shoes" className="object-fill" />
    //     </figure>
    //     <div className="card-body flex justify-center items-center w-full h-full ">
    //       <span className="text-3xl font-bold">{data.brand}</span>
    //     </div>
    //   </div>
    // </Link>
    <>
    {
      brandCardv2
    }
    </>
  );
};

export default BrandsCard;
