
import React from 'react'
import { useState } from 'react'



const UseForm = (initialvalue) => {
    const [values, setvalues]=useState(initialvalue)
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setvalues({
           ...values, [name]: value,
        })
    }
  return {values, handleChange}
}

export default UseForm;