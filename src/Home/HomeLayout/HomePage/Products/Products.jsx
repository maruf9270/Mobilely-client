import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BigSpinner from '../../../../Components/BigSpinner';
import { UserContext } from '../../../../Contexts/AuthContexts';
import BookingConfirmModal from '../Components/BookingConfirmModal';
import ReportConfirmModal from '../Components/ReportConfirmModal';
import SingleProductCard from '../Components/SingleProductCard';

const Products = () => {
    const data = useLoaderData()
    const {user,loading} = useContext(UserContext)
    // Booking the product for the user
    const [book,setBook]= useState(null);
    const ConfirmBooking = () =>{
     
    }

    // Reporting the product
    const [report,setReport] = useState(null)
    const handleReport = () =>{
       const reportfordb = {
        reportedBy : user?.email,
        reportedPID: report?._id,
        seller: report?.user
       }
       
       fetch(`${process.env.REACT_APP_server}/reports`,{
        method:"put",
        headers:{
            "Content-type":"application/json"
            ,token: localStorage.getItem('token')
        },
        body: JSON.stringify(reportfordb)
       })
       .then(res=>res.json())
       .then(res=>{
        toast.success("Reported Successfylly")
       
       })
       .catch(err=>{
        console.log(err);
        toast.error("Something went wrong. Please try again letter")
       })
    }
    const navigate =useNavigate()
    
    
    if(loading){
        return <BigSpinner></BigSpinner>
    }


    if(user?.uid){
        return (
            <div className='max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10'>
               {
                data?.map(d=><SingleProductCard key={d._id} data={d} setBook={setBook} setReport={setReport}></SingleProductCard>)
               }
                
                <BookingConfirmModal setBook={setBook} book={book} ConfirmBooking={ConfirmBooking}></BookingConfirmModal>
                <ReportConfirmModal handleReport={handleReport} setReport={setReport} report={report}></ReportConfirmModal>
            </div>
        );
    }
    else{
        return navigate('/login')
    }
    
  
};

export default Products;