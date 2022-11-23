import React, { createContext } from 'react';
export const UserContext = createContext('');


const AuthContexts = ({children}) => {

    //! Auth context values
    const AuthValues = {

       test: "testing value"
    }
    return (
        <UserContext.Provider value={AuthValues}>
            {
                children
            }
        </UserContext.Provider>
    );
};

export default AuthContexts;