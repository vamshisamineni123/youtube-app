// import React from "react";
// import { useLocation, useParams } from "react-router-dom";
// import contactlistcontext from "../context/contactlistcontext";
// import { useState,useContext } from "react";
// import { useNavigate} from "react-router-dom";
// import addcontactcontext from "../context/addcontactcontext";
// export default function EditContact(){
//              const loc=useLocation();
//              const cont= loc.state.contac;
//          const navigate=useNavigate()
//         const [state,setstate]=useState({name:cont.name,email:cont.email});
//          const r=useContext(addcontactcontext)
    
//        const update=(e)=>{
//            // e.preventDefault();
//             if(state.name==="" || state.email===""){
//             alert('fuckk off')
//             return;
//             }
//         r.updatecontacthandler(cont.id,state)
//         setstate({name:"",email:""})
//         navigate('/')
//         }
//         return(
//             <div className="updatecontact">
//                 <h2>Update Contact</h2>
//                 <div>
//                     <form onSubmit={update}>
//                         <div>
//                             <label>
//                             Name
//                             </label>
//                             <input type="text" name="name" value={state.name} placeholder="Name" onChange={(item)=>setstate({...state,name:item.target.value})}/>
//                         </div>
//                         <div>
//                             <label>
//                             Email
//                             </label>
//                             <input type="email" name="email" value={state.email} placeholder="Email" onChange={(item)=>setstate({...state,email:item.target.value})}/>
//                         </div>
                        
//                         <button type="submit">Update</button>
//                     </form>
//                 </div>
               
//             </div>
//         );
//     }
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../actions/contactActions';
import { useNavigate, useLocation } from 'react-router-dom';

const EditContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const contact = location.state.contact;
  const [state, setState] = useState({ name: contact.name, email: contact.email });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name === '' || state.email === '') {
      alert('Please enter name and email.');
      return;
    }
    dispatch(updateContact(contact.id, state));
    setState({ name: '', email: '' });
    navigate('/');
  };

  return (
    <div className="edit-contact">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
