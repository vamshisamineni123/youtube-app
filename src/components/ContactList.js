import React, { useContext } from "react";
import './App.css'
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import contactlistcontext from "../context/contactlistcontext";

const ContactList=()=>{
   const cont=useContext(contactlistcontext)
    
    const p=cont.map((item)=>{
                    return (
                        <ContactCard contact={item} key={item.id} />
                    )
                })
               
         return (
         <div className="contactlist">
            {console.log('cont', typeof(cont))}
             <Link to='/add'> 
                   <button>AddContact1</button>
                   </Link>
          
            {p}
         </div>
         )
}
export default ContactList;