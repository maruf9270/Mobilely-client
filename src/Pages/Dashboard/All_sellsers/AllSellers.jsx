import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Deletconfermation from './Deletconfermation';
import SelerCard from './SelerCard';
import VarifyModal from './VarifyModal';

const AllSellers = () => {

    // Fetching all the sellers 
    const {data: sellers=[],isLoading,isError,refetch} =useQuery({
        queryKey:["sellers"],
        queryFn: ()=>fetch(`${process.env.REACT_APP_server}/sellers`)
                    .then(res=>res.json())
    })

    // Varifying releted code
    const [varify,setVarify] = useState(null);
    const varifySeller = () =>{
       fetch(`${process.env.REACT_APP_server}/varify`,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({id:varify._id})
       })
       .then(res=>res.json())
       .then(data=>{
        toast.success("Successfully Varified the seller");
        refetch()
       })
       .catch(err=>{
        toast.error("Something went wrong. Try again letter")
       })

    }

    // Deleting seller
    const [DeletData,setDeleteData] = useState(null)
    const deleteUser = () =>{
       fetch(`${process.env.REACT_APP_server}/users/${DeletData._id}`,{
        method:"delete",
        headers:{
            "token" : "Maruf"
        }
       })
       .then(res=>res.json())
       .then(data=>{
        toast.success("User Deleted Successfylly")
        setDeleteData(null)
        refetch()
       })
    }

    
    return (
        <div className='bg-slate-300 w-full md:p-5'>
            <SelerCard sellers={sellers} setVarify={setVarify} setDeleteData={setDeleteData}></SelerCard>
            <VarifyModal varify={varify} setVarify={setVarify} varifySeller={varifySeller}></VarifyModal>
            <Deletconfermation setDeleteData={setDeleteData} deleteUser={deleteUser} DeletData={DeletData}></Deletconfermation>
        </div>
        
    );
};

export default AllSellers;