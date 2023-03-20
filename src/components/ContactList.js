import React from "react";
import './App.css'
import ContactCard from "./ContactCard";
const ContactList=(props)=>{
    const p=props.contact.map((item)=>{
                    return (
                        <ContactCard contact={item} key={item.id} />
                    )
                })
         return (
         <div className="contactlist">
                {p}
         </div>
         )
}
export default ContactList;