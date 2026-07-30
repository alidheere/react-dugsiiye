 import UseForm from "./UseForm";
 import React from 'react'
 
 const ContactFrom = () => {
    const {values, handleChange}= UseForm({
        name: '',
        email: '',
        phone: '',

    })
    const handleSubmit=(event)=>{
          event.preventDefault();
    console.log('Form Data:', values);
   
    }
   return (
     <div>
        <form onSubmit={handleSubmit}>
            <div>

    
            <label>
                name
                <input type="text"
                name="name"
                value={values.name} 
                onChange={handleChange}
                required/>
            </label>
                    </div>
            <div>
                      <label>
                email
                <input type="email"
                name="email" 
                value={values.email}
                onChange={handleChange}
                required/>
            </label> 
            </div>
     
            <div>

          
            <label>
                phone
                <input type="tel" 
                value={values.phone}
                name="phone"
                onChange={handleChange}

                required/>
            </label>
        </div>
        <button type="submit"> submit</button>
        </form>
     </div>
   )
 }
 
 export default ContactFrom;