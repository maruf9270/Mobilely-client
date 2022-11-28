import React from 'react';
import { useNavigate } from 'react-router-dom';

const Singleproducthome = ({data}) => {
    const navigate = useNavigate()
    return (
        <div className="card w-60 bg-base-100 shadow-xl cursor-pointer " onClick={()=>navigate(`/brands/${data?.brand}`)}>
        <figure><img src={data?.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           {data?.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data?.description.length < 100 ?  data?.description: <>{data?.description.slice(0,100)}...</>}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data?.brand}</div> 
            
          </div>
          <div>
            <span className='text-xl font-bold'>Price:</span>{data?.resellPrice}
          </div>
        </div>
      </div>
    );
};

export default Singleproducthome;