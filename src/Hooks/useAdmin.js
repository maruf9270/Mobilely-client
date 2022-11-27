const { useState, useEffect } = require("react")

export const useAdmin = (email) =>{
    const [admin,setAdimn] = useState(false);
    const [adminLoading, SetAdminLoading] = useState(true)
    useEffect(()=>{
        SetAdminLoading(true)
        fetch(`${process.env.REACT_APP_server}/admin/${email}`,{
            headers:{
                token: localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>{setAdimn(data.admin)})
        SetAdminLoading(false)
    },[email])

    return [admin,adminLoading]
}