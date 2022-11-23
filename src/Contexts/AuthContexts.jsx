import React, { createContext, useEffect, useState } from 'react';
import  { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
const GoogleProvider = new GoogleAuthProvider()
export const UserContext = createContext('');


const AuthContexts = ({children}) => {
    // State for setting up the user
    const [user,setUser] = useState('')
    // Loading states
    const [loading, setLoading] = useState(true);
    // Auth
    const auth = getAuth(app)

    // 1. creating user with email and password
    const signUpWithEmail = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // 2. creating user with google 
    const signWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider)
    }

    // 3. signing in with email and password
    const loginWithEmail = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }

    // 4. Sign out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    // 5. Updating user
    const update = (photo,userName) =>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:userName,
            photoURL:photo
        });
    }

    // 6. Forgot password 
    const forgot = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);

    }

    // observing auth for user changes
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
            setLoading(false)

        })
        return ()=> unsubscribe()
    },[])

    //! Auth context values
    const AuthValues = {
                        loading,
                        setLoading,
                        signUpWithEmail,
                        signWithGoogle,
                        loginWithEmail,
                        logOut,
                        user,
                        update,
                        forgot

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