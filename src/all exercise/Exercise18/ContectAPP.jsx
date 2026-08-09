import './Conect.css';
import { useReducer, useState } from "react";
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import ContactList from "./ContactList";
import { initailState, reducer } from "./Reducer";


function ContectAPP() {
    const [state, dispatch]= useReducer(reducer, initailState)
    console.log(state);
    const [editingContact, setIditingContact]=useState(null)
  return (
    <div ClassName='container'>
        <h2> contact managament app</h2>
        <ContactForm
      
  dispatch={dispatch}
  editingContact={editingContact}
  setIditingContact={setIditingContact}
/>
<ContactList
  contacts={state}
  dispatch={dispatch}
  setIditingContact={setIditingContact}
/>

    </div>
  )
}

export default ContectAPP;