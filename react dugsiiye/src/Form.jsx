
import { useState } from 'react'
function ContorledInput() {
 const [formData, setFormData]=useState({
  userName: '',
  email: ''
 })
const [ errors, setErrors]= useState('');
 const ValidateForm=()=>{
  const errors= {};
  if(!formData.userName.trim()){
    errors.userName='Username is required'
  }
   if(!formData.email.trim()){
    errors.email='Email is required'
  }
  return errors;
 }

     const handleSubmit=(e)=>{
e.preventDefault();
const validationErrors= ValidateForm();
console.log(validationErrors);
console.log(Object.keys(validationErrors));
if(Object.keys(validationErrors).length === 0){
  console.log('Form submitted successfully', formData);
}else{
  setErrors(validationErrors);
}

     }


      const handleChange=(e)=>{
    const {name, value}= e.target;
    setFormData((prevData)=> ({...prevData, [name]: value}))
    if(name === 'email' && !value.includes('@')){
      setErrors((prev)=> ({...prev, email: 'email is valid'}))
    }else{
      setErrors((prev)=> ({...prev,  [name] :""}))
    }
  }
  return (
   
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name='userName'
          placeholder='Enter your name'
          value={formData.userName}
        onChange={handleChange}
          /> <br/>
          {errors.userName && <p style={{color:'red'}}>{errors.userName}</p>}
          <input type="email"
          name='email'
          placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange}
          /> <br/>
          {errors.email && <p style={{color:'tomato'}}>{errors.email}</p>}

            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default ContorledInput;