import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
    CardElement
  } from "@stripe/react-stripe-js";
import { toast } from 'react-toastify';

  export default function CheckoutForm  ({data}) {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

     // Creating payment intent for with payid form server 
     useEffect(()=>{
        fetch(`${process.env.REACT_APP_server}/create-payment-intent`,{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({oid: data._id,productId: data.productId})
        })
        .then((res) => res.json())
        .then((data) => {setClientSecret(data.clientSecret)
        console.log(data.clientSecret);
        });

    },[data])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: data.buyer
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                oid: data._id,
                transactionId: paymentIntent.id,
                email: data.buyer,
            }
            console.log(payment);
            fetch(`${process.env.REACT_APP_server}/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                   "token" : localStorage.getItem('token')
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        toast.success('Congrats! your payment completed',paymentIntent.id)
                    }
                })
        }
        setProcessing(false);


    }
    return (
       <>
       <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
       </>
    );
};
