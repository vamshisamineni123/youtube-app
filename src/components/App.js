// import React from "react";
// import Header from './Header'
// import ContactCard from './ContactCard'
// import ContactList from './ContactList'
// import './App.css'
// import axios from "axios";
// import EditContact from "./EditContact";
// import AddContact from "./AddContact";
// import { useState ,useEffect,useContext} from "react";
// import { v4 as uuid } from "uuid";
// // import { json } from "react-router-dom";
// import FullWidthGrid from "./FullWidthGrid";
// import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import addcontactcontext from '../context/addcontactcontext'
// import contactlistcontext from "../context/contactlistcontext";
// import  r from '../api/contact'
// import { ControlPointSharp } from "@mui/icons-material";
// export default function App(){
//   const [contacts,setcontacts]=useState([]);
//   const [data,setdata]=useState();
//   // const addcontacthandler=(data)=>{
//   //   console.log("add",contacts)
//   //        const r={...data,id:uuid()}
//   //        console.log('out')
//   //        const response=fetch('http://localhost:3007/contacts/',{
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json'
//   //         },
      
//   //         body: JSON.stringify(r)
//   //        }
//   //        )
//   //        console.log('in');
//   //        const d=(response.json())
//   //        setcontacts({...contacts,d})
//   // }
//   const addcontacthandler = (data) => {
//     const r = { ...data, id: uuid() };
//     fetch('http://localhost:3008/contacts/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(r)
//     })
//     .then(response => response.json())
//     .then(data => {
//       setcontacts(prevContacts => [...prevContacts, r]);
//     })
//     .catch(error => {
//       console.error('Error adding contact:', error);
//     });
//   }
  
//   const removecontacthandler=async(id)=>{
//          const response= await fetch(`http://localhost:3008/contacts/${id}`,{
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//          })
//          const filteredContacts = contacts.filter(contact => contact.id !== id);
//        setcontacts(filteredContacts)
//   }
//   // const updatecontacthandler=()=>{

//   // }
//   const updatecontacthandler = async (id, updatedData) => {
//     const updatedContact = { ...updatedData, id };
//     try {
//       const response = await fetch(`http://localhost:3008/contacts/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedContact)
//       });
  
//       if (response.ok) {
//         const updatedContactData = await response.json();
//         const updatedContacts = contacts.filter(contact =>contact.id!==id);
//         setcontacts([...contacts,updatedContacts]);
//       } else {
//         throw new Error('Failed to update contact.');
//       }
//     } catch (error) {
//       console.error('Error updating contact:', error);
//     }
//   }
  
  
  
//   useEffect(() => {
//     const fetchData =async() => {
//       try {
       
//         const response = await fetch('http://localhost:3008/contacts');
//         console.log(response)
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         console.log(response)
//         const data =await response.json();
//         // console.log('inti ', data, typeof(data))
//         setcontacts(prev=>[...data]);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//      fetchData();
    
//   }, []);
//   return (
//     <div className="main">
     
//       <addcontactcontext.Provider value={{addcontacthandler, removecontacthandler,updatecontacthandler}} >
//         <contactlistcontext.Provider value={contacts}>
    
//      <Router>
//           <Header />
//           <Routes>
//          <Route path='/add' element={<AddContact/>}/>
            
            
//             <Route  exact path='/' element={<ContactList/>}/>
//             <Route  exact path='/edit' element={<EditContact/>}/>
            
//            </Routes>
//       </Router>
//       </contactlistcontext.Provider>
//       </addcontactcontext.Provider>
    
//     {/* <FullWidthGrid /> */}
      
//     </div>
//   )
// }
import React from "react";
import Header from './Header';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import './App.css';
import AddContact from "./AddContact";
import { connect } from "react-redux";
import { addContact, deleteContact, updateContact } from "../actions/contactActions";
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import EditContact from './EditContact';
import { useEffect } from "react";
const App = ({ contacts, addContact, deleteContact, updateContact,setContacts }) => {
  const handleAddContact = (contact) => {
    addContact(contact);
  };

  const handleDeleteContact = (id) => {
    deleteContact(id);
  };

  const handleUpdateContact = (id, updatedContact) => {
    updateContact(id, updatedContact);
  };
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3008/contacts");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, [setContacts]);
  return (
    <div className="main">
      <Router>
        
        <Header />
        {/* <Switch> */}
        <Routes>
          <Route exact path="/" render={() => <ContactList contacts={contacts} deleteContact={handleDeleteContact} />} />
          <Route path="/add" render={() => <AddContact addContact={handleAddContact} />} />
          <Route path="/edit/:id" render={({ match }) => (
            <EditContact
              contactId={match.params.id}
              contacts={contacts}
              updateContact={handleUpdateContact}
            />
          )} />
        {/* </Switch> */}
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    deleteContact: (id) => dispatch(deleteContact(id)),
    updateContact: (id, updatedContact) => dispatch(updateContact(id, updatedContact))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
