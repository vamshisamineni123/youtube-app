import React from "react";
import {useState, useEffect } from "react";

export default function(){
    const [state,setstate]=useState(null)
    useEffect(()=>{
       fetch("https://localhost:3006/contacts") .then(state => {
        setstate(state);
      }).catch(error => {
        console.log(error)
      });
    }
       
    
    ,[])

    return(<div>{state}</div>)
}