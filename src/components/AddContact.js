// import React, { useState } from "react";
// import './App.css'
// import { useContext } from "react";
// import addcontactcontext from "../context/addcontactcontext";
// import { useNavigate } from "react-router-dom";


// export default function AddContact(){
//     const navigate=useNavigate()
//     const [state,setstate]=useState({name:"",email:""});
//      const r=useContext(addcontactcontext)

//    const add=(e)=>{
//         console.log('titi')
//         e.preventDefault();
//         if(state.name==="" || state.email===""){
//         alert('fuckk off')
//         return;
//         }
//         console.log('before addhandler function')
//     r.addcontacthandler(state)
//     setstate({name:"",email:""})
//     navigate('/')
//     }
//     return(
//         <div className="addcontact">
//             <h2>Add Contact</h2>
//             <div>
//                 <form onSubmit={add}>
//                     <div>
//                         <label>
//                         Name
//                         </label>
//                         <input type="text" name="name" value={state.name} placeholder="Name" onChange={(item)=>setstate({...state,name:item.target.value})}/>
//                     </div>
//                     <div>
//                         <label>
//                         Email
//                         </label>
//                         <input type="email" name="email" value={state.email} placeholder="Email" onChange={(item)=>setstate({...state,email:item.target.value})}/>
//                     </div>
                    
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
           
//         </div>
//     );
// }
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../actions/contactActions';
// import { useNavigate } from 'react-router-dom';

// const AddContact = (props) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [state, setState] = useState({ name: '', email: '' });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (state.name === '' || state.email === '') {
//       alert('Please enter name and email.');
//       return;
//     }
//     props.addContact(state);
//     setState({ name: '', email: '' });
//     navigate('/');
//     //props.addContact(); // Optional callback to trigger any additional actions
//   };

//   return (
//     <div className="add-contact">
//       <h2>Add Contact</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={state.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={state.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default AddContact;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../reducers/contactsReducer';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddContact = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({ name: '', email: '' });

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
    const k={...state,id: uuidv4()}
    // dispatch(addContact(k));
    props.addContact(k)
    setState({ name: '', email: '' });
    navigate('/');
  };

  return (
    <div className="add-contact">
      <h2>Add Contact</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
