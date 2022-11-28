import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import BigSpinner from '../Components/BigSpinner';
import { UserContext } from '../Contexts/AuthContexts';

const UserPrivetRoute = ({children}) => {
    const navigate = useNavigate()
    let location = useLocation();
    const {user,loading} = useContext(UserContext);
    if(loading ){
        return <BigSpinner></BigSpinner>
    }

    if(user?.uid)
    return (
        <div>
            {
                children
            }
        </div>
    );
    else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default UserPrivetRoute;