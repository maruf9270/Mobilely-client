import { useEffect, useState } from "react"

const useSeller =(email)=>{
    const [seller,setSeller] = useState(true)
    const [sellerLoading,setSellerLoading] = useState(false)
  
       useEffect(()=>{
        setSellerLoading(true)
        fetch(`${process.env.REACT_APP_server}/sellerverify/:${email}`,{
          headers:{
              token: localStorage.getItem("token")
          }
  
        })
        .then(res=>res.json())
        .then(data=>{
          setSeller(data.seller)
          setSellerLoading(false)
        })
     
       },[email])
    return [seller,sellerLoading]

} 

export default useSeller