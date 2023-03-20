import React from "react";

const ContactCard=(item)=>{

    
        return (
            <div>
            <div>{item.contact.id}</div>
            <div>{item.contact.name}</div>
            <div>{item.contact.email}</div>
            </div>
        )

}
export default ContactCard;