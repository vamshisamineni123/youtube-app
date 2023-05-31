// import React, { useContext } from "react";
// import './App.css'
// import { Link } from "react-router-dom";
// import ContactCard from "./ContactCard";
// import contactlistcontext from "../context/contactlistcontext";

// const ContactList=()=>{
//    const cont=useContext(contactlistcontext)
    
//     const p=cont.map((item)=>{
//                     return (
//                         <ContactCard contact={item} key={item.id} />
//                     )
//                 })
               
//          return (
//          <div className="contactlist">
//             {console.log('cont', typeof(cont))}
//              <Link to='/add'> 
//                    <button>AddContact1</button>
//                    </Link>
          
//             {p}
//          </div>
//          )
// }
// export default ContactList;
import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContact }) => {
    if (!Array.isArray(contacts)) {
        // If it's not an array, display a message or handle the error appropriately
        return <div>No contacts available</div>;
      }
  const contactList = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      deleteContact={deleteContact}
    />
  ));

  return (
    <div className="contact-list">
      <Link to="/add">
        <button>Add Contact</button>
      </Link>
      {contactList}
    </div>
  );
};

export default ContactList;
