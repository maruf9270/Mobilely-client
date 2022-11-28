import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe("pk_test_51M6Ie7LisduRvP51uZL86XLunTiGVbqCcbU6BRBDR97MCw9Ur5tFTil7JEyPsIdNBdSIgrAT31gl0RYoWcxJngya006LtreT4T")


const Payment = () => {
    const data = useLoaderData()
  
    return (
        <div className='max-w-screen-xl mx-auto min-h-[80vh]'>
           <div className='lg:p-24 p-9 border border-stone-400 mt-6 rounded-lg'>
           <Elements stripe={stripePromise}>
            <CheckoutForm data={data}></CheckoutForm>
           </Elements>
           </div>
        </div>
    );
};

export default Payment;