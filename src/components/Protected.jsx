import React from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Protected=(props)=>{
    const {Components}=props;
    const [cookie]=useCookies();
    const navigate=useNavigate();
    const authenticateUser=async(e)=>{
        const res=await fetch('/verify-user',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${cookie.jwt}`
            }
        });
        if(res.status===200){
            console.log("Authentication Successfull");
        }else{
            console.log("Unauthorized");
            navigate('/login')
        }
    }

    useEffect(()=>{
        authenticateUser();
         // eslint-disable-next-line
    },[])

    return(
        <>
        <Components />
        </>
    )
}


export default Protected