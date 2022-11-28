import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BigSpinner from '../../../Components/BigSpinner';
import BrandsCard from './Components/BrandsCard';
import Caurosel from './Components/Caurosel';
import SingleProductCard from './Components/SingleProductCard';
import State from './Components/State';
import Singleproducthome from './Singleproducthome';

const Homepage = () => {
    const {data: brands=[]} = useQuery({
        queryKey:["brands"],
        queryFn: ()=> fetch(`${process.env.REACT_APP_server}/brands`)
                    .then(res=>res.json())
    })

    const [ploading,setploading]  = useState(false)
    const [products,setProducts] = useState([])
    useEffect(()=>{
        setploading(true)
        axios.get(`${process.env.REACT_APP_server}/allproducts`)
        .then(res=>{
            setProducts(res.data)
            setploading(false)
        })
    },[])
    return (
        <div className='max-w-screen-xl mx-auto my-14'>
            <div className='mb-10'>
                <Caurosel></Caurosel>
            </div>
            <h2 className='font-bold text-3xl my-5'>Product Category:</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center justify-items-center z-10'>
             {/* brands section */}
             {
                brands?.map(b=> <BrandsCard key={b._id} data={b}></BrandsCard>)
            }
           </div>

           <h2 className='font-bold text-3xl my-5'>Products:</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center justify-items-center'>
            {
                ploading ? <BigSpinner></BigSpinner> : products.length > 0 ? products.map(p=><Singleproducthome key={p._id} data={p}></Singleproducthome>):""
            }
           </div>
           <div className='my-10'>
            <State></State>
           </div>

            
        </div>
    );
};

export default Homepage;