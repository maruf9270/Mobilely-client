import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProductCard from '../Components/SingleProductCard';

const Products = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className='max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
           {
            data?.map(d=><SingleProductCard key={d._id} data={d}></SingleProductCard>)
           }
            
        </div>
    );
};

export default Products;