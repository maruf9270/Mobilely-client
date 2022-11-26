import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingConfirmModal from '../Components/BookingConfirmModal';
import SingleProductCard from '../Components/SingleProductCard';

const Products = () => {
    const data = useLoaderData()
    // Booking the product for the user
    const [book,setBook]= useState(null);
    const ConfirmBooking = () =>{
        console.log(book);
    }
    
    return (
        <div className='max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
           {
            data?.map(d=><SingleProductCard key={d._id} data={d} setBook={setBook}></SingleProductCard>)
           }
            
            <BookingConfirmModal setBook={setBook} book={book} ConfirmBooking={ConfirmBooking}></BookingConfirmModal>
        </div>
    );
};

export default Products;