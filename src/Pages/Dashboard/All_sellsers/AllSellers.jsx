import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import BigSpinner from '../../../Components/BigSpinner';
import Deletconfermation from './Deletconfermation';
import SelerCard from './SelerCard';
import VarifyModal from './VarifyModal';

const AllSellers = () => {
    

    // Fetching all the sellers 
    const {data: sellers=[],isLoading,isError,refetch} =useQuery({
        queryKey:["sellers"],
        queryFn: ()=>fetch(`${process.env.REACT_APP_server}/sellers`,{headers:{ token: localStorage.getItem("token")}})
                    .then(res=>res.json())
    })

    // Loading state for Variefy and delete button
    const [tloadign, setTloading] = useState((false))

    // Varifying releted code
    const [varify,setVarify] = useState(null);
    const varifySeller = () =>{
        setTloading(true)
       fetch(`${process.env.REACT_APP_server}/varify`,{
        method:"put",
        headers:{
            "content-type":"application/json",
            token: localStorage.getItem("token")
        },
        body:JSON.stringify({id:varify._id})
       })
       .then(res=>res.json())
       .then(data=>{
        toast.success("Successfully Varified the seller");
        refetch()
        setTloading(false)
       })
       .catch(err=>{
        setTloading(false)
        toast.error("Something went wrong. Try again letter")
       })

    }

    // Deleting seller
    const [DeletData,setDeleteData] = useState(null)
    const deleteUser = () =>{
        setTloading(true)
       fetch(`${process.env.REACT_APP_server}/users/${DeletData._id}`,{
        method:"delete",
        headers:{
           token: localStorage.getItem('token')
        }
       })
       .then(res=>res.json())
       .then(data=>{
        toast.success("User Deleted Successfylly")
        setTloading(false)
        setDeleteData(null)
        refetch()
       })
       .catch(er=>{
        toast.error("Something Went Wrong Please Try again letter")
        setTloading(false)
       })
    }

    
    return (
        <div className='border border-stone-300 w-[98%] md:p-5 rounded-md md:mx-4 sm:mx-auto'>
            <h5 className=' text-center font-bold text-2xl my-6 '>All Sellers</h5>
            {
              isLoading ? <BigSpinner></BigSpinner> : !sellers.length > 0  ? "No Selers Found" : 
                <SelerCard sellers={sellers} setVarify={setVarify} setDeleteData={setDeleteData} tloadign={tloadign}></SelerCard>
                
            }
            <VarifyModal varify={varify} setVarify={setVarify} varifySeller={varifySeller}></VarifyModal>
            <Deletconfermation setDeleteData={setDeleteData} deleteUser={deleteUser} DeletData={DeletData}></Deletconfermation>
        </div>
        
    );
};

export default AllSellers;