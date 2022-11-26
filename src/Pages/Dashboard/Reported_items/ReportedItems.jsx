import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SmallSpinner from '../../../Components/SmallSpinner';
import DeleteModal from './DeleteModal';
import ProsuctTable from './ProsuctTable';

const ReportedItems = () => {
    const {data: reportedItems=[],isLoading ,refetch} = useQuery({
        queryKey:["reportedItems"],
        queryFn: ()=>fetch(`${process.env.REACT_APP_server}/reports`,{headers:{token: localStorage.getItem('token')}})
                    .then(res=>res.json())
    })

    const [deletereported,setDelete] = useState(null)
    const handleDelete=()=>{
        console.log(deletereported);
        fetch(`${process.env.REACT_APP_server}/deletereported/${deletereported._id}`,
        {
            method:"delete",
            headers:{
                token: localStorage.getItem('token')
            }
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Deleted Repored Successfully")
            refetch()
        })
        .catch(err=>{
            console.log(err);
            toast.error("Something went wrong")
        })

    }

    return (
        <div className='bg-slate-300 w-full min-h-screen p-5'>
            <h2 className='text-2xl font-bold'>Reported Items</h2>
            {
                isLoading ? <SmallSpinner></SmallSpinner>:<ProsuctTable reportedItems={reportedItems} setDelete={setDelete}></ProsuctTable>
            }
            <DeleteModal handleDelete={handleDelete} setDelete={setDelete} deletereported={deletereported}></DeleteModal>
        </div>
    );
};

export default ReportedItems;