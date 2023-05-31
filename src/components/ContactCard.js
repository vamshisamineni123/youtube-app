// import React, { useContext } from "react";
// import contactlistcontext from "../context/contactlistcontext";
// import   CustomDeleteIconChips  from '../mui-comp/delete.js'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from "react";
// import './App.css'
// import { Link } from "react-router-dom";
// import { Grid } from "@mui/material";
// import addcontactcontext from "../context/addcontactcontext";
// const ContactCard=(props)=>{
//         // const contact=useContext(contactlistcontext)
//         const [isClicked, setIsClicked] = useState(false);
//          const del=useContext(addcontactcontext);
         
//   const handleClick = (id) => {
//      del.removecontacthandler(id)
       
//   };

//   const iconColor = isClicked ? 'red' : 'black';
//         return (
//             // <div className="contact-package">
//             // {/* <div>{item.contact.id}</div> */}
//             // <div >
//             // <div>{props.contact.name}</div>
//             // <div>{props.contact.email}</div>
//             // </div>
//             // <div>
//             // <DeleteIcon onClick={handleClick} style={{ color: iconColor }} />
//             // </div>
//             // {/* <DeleteIcon /> */}
//             // </div>
                    
//               <Grid>
//                 <Grid item md={10}>
//                 <Link to={{
//               pathname: '/edit',
//               state: { contac: props.contact }  // Pass the contact object as state
//             }}> 
//                 <div>{props.contact.name}</div>
//                 <div>{props.contact.email}</div>  
//                 </Link>
//                 </Grid>
              
//                 <Grid item md={2}>
//                <DeleteIcon onClick={()=>handleClick(props.contact.id)} />
//                 </Grid>
//             </Grid>
            
           

//         )

// }
// export default ContactCard;
import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <div className="contact-card">
      <div>
        <Link to={`/edit/${contact.id}`}>
          <div>{contact.name}</div>
          <div>{contact.email}</div>
        </Link>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactCard;

