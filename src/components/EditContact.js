import React from "react";
import { useLocation, useParams } from "react-router-dom";
import contactlistcontext from "../context/contactlistcontext";
import { useState,useContext } from "react";
import { useNavigate} from "react-router-dom";
import addcontactcontext from "../context/addcontactcontext";
export default function EditContact(){
             const loc=useLocation();
             const cont= loc.state.contac;
         const navigate=useNavigate()
        const [state,setstate]=useState({name:cont.name,email:cont.email});
         const r=useContext(addcontactcontext)
    
       const update=(e)=>{
           // e.preventDefault();
            if(state.name==="" || state.email===""){
            alert('fuckk off')
            return;
            }
        r.updatecontacthandler(cont.id,state)
        setstate({name:"",email:""})
        navigate('/')
        }
        return(
            <div className="updatecontact">
                <h2>Update Contact</h2>
                <div>
                    <form onSubmit={update}>
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
                        
                        <button type="submit">Update</button>
                    </form>
                </div>
               
            </div>
        );
    }