import React, { useState } from "react";
import './App.css'
import { useContext } from "react";
import addcontactcontext from "../context/addcontactcontext";
import { useNavigate } from "react-router-dom";


export default function AddContact(){
    const navigate=useNavigate()
    const [state,setstate]=useState({name:"",email:""});
     const r=useContext(addcontactcontext)

   const add=(e)=>{
        console.log('titi')
        e.preventDefault();
        if(state.name==="" || state.email===""){
        alert('fuckk off')
        return;
        }
        console.log('before addhandler function')
    r.addcontacthandler(state)
    setstate({name:"",email:""})
    navigate('/')
    }
    return(
        <div className="addcontact">
            <h2>Add Contact</h2>
            <div>
                <form onSubmit={add}>
                    <div>
                        <label>
                        Name
                        </label>
                        <input type="text" name="name" value={state.name} placeholder="Name" onChange={(item)=>setstate({...state,name:item.target.value})}/>
                    </div>
                    <div>
                        <label>
                        Email
                        </label>
                        <input type="email" name="email" value={state.email} placeholder="Email" onChange={(item)=>setstate({...state,email:item.target.value})}/>
                    </div>
                    
                    <button type="submit">Add</button>
                </form>
            </div>
           
        </div>
    );
}