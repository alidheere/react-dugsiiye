import { useState } from "react";
import React from 'react'

function FormValidation() {
    const [formData, setFormData]= useState({
        userName: '',
        email: '',
        password: '',
        selectedOption: '',
        isChecked: false
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }

    const handleChange=(e)=>{{
        const {name, value , type,checked}= e.target;
        setFormData((prevData)=> ({...prevData, [name]: type ==='checkbox' ? checked : value}))
    }
}

  return (
    <div  className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
      <label>Username:</label> <br/>
      <input type="text" name="userName" value={formData.userName} 
      onChange={handleChange}   className="w-full p-1 border rounded 2xl" />


      <label>Email:</label> <br/>
      <input type="email" name="email" value={formData.email}
      onChange={handleChange}   className="w-full p-1 border rounded 2xl" />


      <label>Password:</label> <br/>
      <input type="password" name="password" value={formData.password}
      onChange={handleChange}   className="w-full p-1 border rounded 2xl" />


      <label>Checkbox:</label> 
        <input type="checkbox" name="isChecked" checked={formData.isChecked}
      onChange={handleChange}   className="w-full p-1 border rounded 2xl"/>

      <label>Select an age:</label> 
     <select name="selectedOption" value={formData.selectedOption}
      onChange={handleChange}   className="w-full p-1 border rounded 2xl">

        <option value="age 10">  age 10</option>
        <option value="age 20">age 20</option>
        <option value="age 30">age 30</option>
        <option value="age 40">age 40</option>
        <option value="age 50">age 50</option>
      </select>


 <button type="submit" className="bg-red-500 text-white w-full border rounded-2xl text-2xl">   submit</button>
        </form>
    </div>
  )
}

export default FormValidation;