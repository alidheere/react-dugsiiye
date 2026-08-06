
import { useState } from "react"

const FormDev = () => {
const [formData, setFormData]= useState({
    full_name: '',
    email: '',
    role: '',
    experiance: '',
    skils: [],
    agreeToTerms: false,
    notifications: false

})
const handleSubmit=(e)=>{
  e.preventDefault();
}

  return (
    <div>
        <h2> developer  application form</h2>
        <form onSubmit={handleSubmit}>
            <label> full name:</label>
        <input type="text" 
        name="full-name"
        value={formData.full_name}/> <br/>
    <label> email:</label>
        <input type="email" 
        name="email"
        value={formData.email}/> <br/>
    
     
        </form>

    </div>
  )
}

export default FormDev;