import React from 'react'
import ContactItem from './ContactItem'
const ContactList = ({contacts ,dispatch,  setIditingContact}) => {
  return (
    <div>
        <h3>contacts</h3>
            {contacts?.length > 0 ? (
                <ul>
                    {contacts.map((contact)=>(
                    <ContactItem
                    key={contact.id}
                    contact={contact}
                    dispatch={dispatch}
                     setIditingContact={setIditingContact}/>
                    ))}
                </ul>
            ): (
        <p>No contacts available.</p>
      )}

    
    </div>
  )
}

export default ContactList;