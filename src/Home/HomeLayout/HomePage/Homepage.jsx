import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BrandsCard from './Components/BrandsCard';

const Homepage = () => {
    const {data: brands=[]} = useQuery({
        queryKey:["brands"],
        queryFn: ()=> fetch(`${process.env.REACT_APP_server}/brands`)
                    .then(res=>res.json())
    })
    return (
        <div className='max-w-screen-xl mx-auto'>

           <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center justify-items-center'>
             {/* brands section */}
             {
                brands?.map(b=> <BrandsCard key={b._id} data={b}></BrandsCard>)
            }
           </div>

            
        </div>
    );
};

export default Homepage;