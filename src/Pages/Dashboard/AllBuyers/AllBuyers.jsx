import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import BigSpinner from '../../../Components/BigSpinner';
import BuyerTable from './BuyerTable';
import DeleteConfermation from './DeleteConfermation';

const AllBuyers = () => {
    const {data: buyers=[],isLoading,refetch} = useQuery({
        queryKey:["buyers"],
        queryFn: ()=>fetch(`${process.env.REACT_APP_server}/buyers`,{headers:{token: localStorage.getItem("token")}})
                    .then(res=>res.json())
    })

    // Handling delete for sellers
    const [Seller, setSeller] = useState(null)
    const deleteBuyer = () =>{
        fetch(`${process.env.REACT_APP_server}/sellers/${Seller._id}`,{
            method:"delete",
            headers:{
               token: localStorage.getItem('token')
            }
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Buyer Deleted Successfully");
            refetch()
        })
        .catch(err=>{
            toast.error("SomeThing went wrong. Try Again Letter")
        })
        
    }
    return (
        <div className='border border-stone-300 w-[98%] md:p-5 rounded-md md:mx-4 sm:mx-auto'>
               <h5 className=' text-center font-bold text-2xl my-6 '>All Buyers</h5>
         {
            isLoading ? <BigSpinner></BigSpinner>: <BuyerTable buyers={buyers} setSeller={setSeller} deleteBuyer={deleteBuyer}></BuyerTable>
         }
           <DeleteConfermation setSeller={setSeller} Seller={Seller} deleteBuyer={deleteBuyer}></DeleteConfermation>
        </div>
    );
};

export default AllBuyers;