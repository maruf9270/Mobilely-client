import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BigSpinner from '../Components/BigSpinner';
import { UserContext } from '../Contexts/AuthContexts';
import { useAdmin } from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';

const SellerPrivetRoute = ({children}) => {
    const {user} = useContext(UserContext)
    const [seller,sellerLoading] = useSeller(user?.email);
    const [admin,adminLoading] = useAdmin(user?.email);
    const navigate = useNavigate()

    if(sellerLoading || adminLoading){
        return <BigSpinner></BigSpinner>
    }
    if(seller || admin )
    {
        return children
    }
   else{
    return navigate('/')
   }
};

export default SellerPrivetRoute;