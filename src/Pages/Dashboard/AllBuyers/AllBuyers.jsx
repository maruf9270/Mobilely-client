import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import BuyerTable from './BuyerTable';
import DeleteConfermation from './DeleteConfermation';

const AllBuyers = () => {
    const {data: buyers=[],isLoading,refetch} = useQuery({
        queryKey:["buyers"],
        queryFn: ()=>fetch(`${process.env.REACT_APP_server}/buyers`)
                    .then(res=>res.json())
    })

    // Handling delete for sellers
    const [Seller, setSeller] = useState(null)
    const deleteBuyer = () =>{
        fetch(`${process.env.REACT_APP_server}/sellers/${Seller._id}`,{
            method:"delete",
            headers:{
                "token": "Maruf"
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
        <div className='bg-slate-300 w-full md:p-5'>
           <BuyerTable buyers={buyers} setSeller={setSeller} deleteBuyer={deleteBuyer}></BuyerTable>
           <DeleteConfermation setSeller={setSeller} Seller={Seller} deleteBuyer={deleteBuyer}></DeleteConfermation>
        </div>
    );
};

export default AllBuyers;