import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe("pk_test_51M6Ie7LisduRvP51uZL86XLunTiGVbqCcbU6BRBDR97MCw9Ur5tFTil7JEyPsIdNBdSIgrAT31gl0RYoWcxJngya006LtreT4T")


const Payment = () => {
    const data = useLoaderData()
    // const [clientSecret, setClientSecret] = useState('');
    
    // // Creating payment intent for with payid form server 
    // useEffect(()=>{
    //     fetch(`${process.env.REACT_APP_server}/create-payment-intent`,{
    //         method:"POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({oid: data._id,productId: data.productId})
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {setClientSecret(data.clientSecret)
    //     console.log(data.clientSecret);
    //     });

    // },[data])

    // const appearance = {
    //     theme: 'stripe',
    // }
    // const options = {
    //     clientSecret,
    //     appearance,
    //   };
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