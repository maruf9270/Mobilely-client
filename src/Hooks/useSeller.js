import { useEffect, useState } from "react"

const useSeller =(email)=>{
    const [seller,setSeller] = useState(false)
    const [sellerLoading,setSellerLoading] = useState(false)

  
       useEffect(()=>{
        setSellerLoading(true)
        fetch(`${process.env.REACT_APP_server}/sellerverify/${email}`,{
          headers:{
            "content-type" : "application/json",
              token: localStorage.getItem("token")
          }
  
        })
        .then(res=>res.json())
        .then(data=>{
          setSeller(data.seller)
          setSellerLoading(false)
        })
        .catch(err=>console.log(err))
       },[email])
    return [seller,sellerLoading]

} 

export default useSeller