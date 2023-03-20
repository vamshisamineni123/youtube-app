import React from "react";
import Header from './Header'
import ContactCard from './ContactCard'
import ContactList from './ContactList'
import './App.css'
import AddContact from "./AddContact";
import { useState } from "react";
export default function App(){
  // const contact=[
  //   {
  //     id:"1",
  //     name:"vamshi",
  //     email:"vamshi@maqsoftware.com"
  //   },
  //   {
  //     id:"2",
  //     name:"ishan",
  //     email:"ishanm@maqsoftware.com"
  //   },
    
  //   {
  //     id:"3",
  //     name:"chaiytanya",
  //     email:"chaiytanyar@maqsoftware.com"
  //   }
  // ]
  const [contact,setcontact]=useState([])
  return (
    <div className="main">
      <div className="header-main">
          <Header />
      </div>   
      <div className="addcontact-main">
          <AddContact/>
      </div>
       
           
      <div className="contactlist-main">
           <ContactList contact={contact} /> 
      </div>
         
    </div>
  )
}