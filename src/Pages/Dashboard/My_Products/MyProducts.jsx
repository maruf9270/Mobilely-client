import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../Contexts/AuthContexts';
import ProductCard from './ProductCard';
import smallModal from '../../../Components/smallModal'
import SmallSpinner from '../../../Components/SmallSpinner';
import Smodal from '../../../Components/Smodal';
import { toast } from 'react-toastify';
import DeletConfirm from './Components/DeletConfirm';

const MyProducts = () => {
    const {user} = useContext(UserContext)
    const [modalData,setModaldata] = useState({})
    const [pid,setPid] = useState('')
    // Handling delete _id
    const [deleteID,setdeleteID] = useState(null)



    // Fetchig data for page
    const {data: products=[],isLoading,isError,refetch} = useQuery({
        queryKey:[`my_products${user?.email}`]
        ,queryFn: ()=>fetch(`${process.env.REACT_APP_server}/products/${user?.email}`,{
                    headers:{
                        "token":"Maruf"
                    }
                    })
                     .then(res=>res.json())
    })

 
       
    // Handling confirm advestise
    const handleAdvertisement = () =>{
        const id = pid._id
        fetch(`${process.env.REACT_APP_server}/advertise`,
        {method:"put"
        ,headers:{"content-type":"application/json"}
        ,body: JSON.stringify({id: id})})
        .then(res=>res.json())
        .then(data=>{
            toast.success("Advertised successfully")
            console.log(data);
            refetch()
            
        })
        .catch(err=>{
            toast.error("Someting went wrong try again letter.")
        })
    }

    // Handling delete 
    const handleDelete = () =>{
        fetch(`${process.env.REACT_APP_server}/product`,{
            method:"delete",
            headers:{
                "content-type":"application/json"
                ,"token":"maruf"
            },
            body: JSON.stringify({id:deleteID._id})
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Product deleted successfully")
            refetch()
        })
        .catch(err=>{
            console.log(err);
            toast.error("Something went wrong try again letter")
        })
    }
    console.log(deleteID);


    return (
        <div className='bg-slate-300 w-full grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 p-5 gap-3 '>
            {
               isLoading ? <SmallSpinner></SmallSpinner> : products?.map(p=><ProductCard key={p._id} data={p} setModaldata={setModaldata} setPid={setPid} setdeleteID={setdeleteID}></ProductCard>)
            }
           <Smodal setPid={setPid} handleAdvertisement={handleAdvertisement}></Smodal>
           <DeletConfirm setdeleteID={setdeleteID} handleDelete={handleDelete} ></DeletConfirm>

        </div>
    );
};

export default MyProducts;