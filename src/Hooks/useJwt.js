import { useEffect, useState } from "react";

const useJwt = (email) =>{
    const [token,setToken] = useState('')
    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_server}/jwt/${email}`)
            .then(res=>res.json())
            .then(data=>{
                const token = data.token;
                localStorage.setItem('token',token)
                setToken(token)

            })
        }
    },[email])
    return [token]
}
export default useJwt
