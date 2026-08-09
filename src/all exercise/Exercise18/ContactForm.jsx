import {useState, useEffect}from 'react'

function ContactForm({ dispatch, editingContact, setIditingContact }) {

    const [contact, setContact]= useState(
        editingContact ||{id: null , name: '', email: '', phone: ''}
    )
    const [isEditing, setIsEditing]= useState(false)
    useEffect(()=>{
        if(editingContact){
            setContact(editingContact)
            setIsEditing(true)
        }
    }, [editingContact])
    const handleChange=(e)=>{
        const{name, value}= e.target
        setContact({...contact, [name]: value})
    }
    const handleSubmit=(e)=>{
         e.preventDefault();
         if(contact.name && contact.email && contact.phone){
            if(isEditing){
                dispatch({type: 'edit',payload : contact})
                setIsEditing(false)
            }else{
                     dispatch({
          type: 'add',
          payload: { ...contact, id: Date.now(), favorite: false },
        });
            }
              setContact({id: null , name: '', email: '' , phone: ''})
         }
       
    }

    const handleCancelEdit=()=>{
            setContact({id: null , name: '', email: '' , phone: ''})
            setIsEditing(false)
       
    }
  return (
    <div>
        <form onSubmit={ handleSubmit}>
            <h3> {isEditing ? 'edit contact': 'add new contact'}</h3>
            <div>
                <label>
                    name
                    <input type="text"
                    name='name' 
                    value={contact.name}
                    onChange={handleChange}
                    required/>
                </label>
            </div>
            <div>
                         <label>
                    email
                    <input type="email"
                    name='email' 
                    value={contact.email}
                    onChange={handleChange}
                    required/>
                </label>
                <div>
                             <label>
                    phone
                    <input type="tel"
                    name='phone' 
                    value={contact.phone}
                    onChange={handleChange}
                    required/>
                </label>
                </div>
            </div>
    <button type="submit"> {isEditing ? 'update': 'add'}</button>
        <button type="button" onClick={handleCancelEdit}>
  Cancel
</button>
        </form>
    </div>
  )
}

export default ContactForm;