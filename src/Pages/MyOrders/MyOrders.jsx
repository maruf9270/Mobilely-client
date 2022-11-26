import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import SmallSpinner from '../../Components/SmallSpinner';
import { UserContext } from '../../Contexts/AuthContexts';
import OrderTable from './Components/OrderTable';

const MyOrders = () => {
    const {user, loading} = useContext(UserContext) 
    const emaeil = user?.email;

    const {data: myOrders=[],isLoading} = useQuery({
        queryKey:["MyOrders"],
        queryFn: ()=>fetch(`${process.env.REACT_APP_server}/orders/${emaeil}`)
                        .then(res=>res.json())
        ,
        enabled: !!emaeil
    })
    console.log(myOrders);
    return (
        <div className='bg-slate-300 max-w-screen-xl mx-auto p-5 '>
           {
            isLoading ? <SmallSpinner></SmallSpinner>:  <OrderTable myOrders={myOrders}></OrderTable>
           }
          

            
        </div>
    );
};

export default MyOrders;