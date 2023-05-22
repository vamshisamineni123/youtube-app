import React from "react";
import Header from './Header'
import ContactCard from './ContactCard'
import ContactList from './ContactList'
import './App.css'
import axios from "axios";
import AddContact from "./AddContact";
import { useState ,useEffect,useContext} from "react";
import { v4 as uuid } from "uuid";
// import { json } from "react-router-dom";
import FullWidthGrid from "./FullWidthGrid";
import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import addcontactcontext from '../context/addcontactcontext'
import contactlistcontext from "../context/contactlistcontext";
import  r from '../api/contact'
import { ControlPointSharp } from "@mui/icons-material";
export default function App(){
  const [contacts,setcontacts]=useState([]);
  // const addcontacthandler=(data)=>{
  //   console.log("add",contacts)
  //        const r={...data,id:uuid()}
  //        console.log('out')
  //        const response=fetch('http://localhost:3007/contacts/',{
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
      
  //         body: JSON.stringify(r)
  //        }
  //        )
  //        console.log('in');
  //        const d=(response.json())
  //        setcontacts({...contacts,d})
  // }
  const addcontacthandler = (data) => {
    const r = { ...data, id: uuid() };
    fetch('http://localhost:3007/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(r)
    })
    .then(response => response.json())
    .then(data => {
      setcontacts(prevContacts => [...prevContacts, r]);
    })
    .catch(error => {
      console.error('Error adding contact:', error);
    });
  }
  
  const removecontacthandler=async(id)=>{
         const response= await fetch(`http://localhost:3007/contacts/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
         })
         const filteredContacts = contacts.filter(contact => contact.id !== id);
       setcontacts(filteredContacts)
  }
  
  useEffect(() => {
    const fetchData =async() => {
      try {
       
        const response = await fetch('http://localhost:3007/contacts');
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        const data =await response.json();
        // console.log('inti ', data, typeof(data))
        setcontacts(prev=>[...prev,...data]);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
     // console.log(contacts)
    };

     fetchData();
    // console.log(contacts)
    
  }, []);
  return (
    <div className="main">
     
      <addcontactcontext.Provider value={{addcontacthandler, removecontacthandler}} >
        <contactlistcontext.Provider value={contacts}>
     <Router>
          <Header />
          <Routes>
         <Route path='/add' element={<AddContact/>}>
            </Route>
            
            <Route  exact path='/' element={<ContactList/>}>
            </Route>  
           </Routes>
      </Router>
      </contactlistcontext.Provider>
      </addcontactcontext.Provider>
    
    {/* <FullWidthGrid /> */}
      
    </div>
  )
}
