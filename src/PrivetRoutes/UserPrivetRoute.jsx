import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BigSpinner from '../Components/BigSpinner';
import { UserContext } from '../Contexts/AuthContexts';

const UserPrivetRoute = ({children}) => {
    const navigate = useNavigate()
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
        return navigate('/login')
    }
};

export default UserPrivetRoute;