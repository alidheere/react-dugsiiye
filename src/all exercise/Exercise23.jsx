
import { useState } from "react"

const FormDev = () => {
const [formData, setFormData]= useState({
    fullName: '',
    email: '',
    role: '',
    experiance: '',
    skills: [],
    agreeToTerms: false,
    notifications: false

})
const [errors, setErrors]=useState({})
const roles= [
  'frontend devoloper',
  'backend devoloper',
  'full stack devoloper',
  'ui/ux desiner',

]

const skillsOptions=[
  'react',
  'node.js',
  'next.js',
  'java',
  'python',
  'ui desing'
]
const validateField = (name, value) => {
  let error = "";

  switch (name) {
    case "fullName":
      if (!value.trim()) {
        error = "Full name is required";
      }
      break;

    case "email":
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Invalid email";
      }
      break;

    case "role":
      if (!value) {
        error = "Please select a role";
      }
      break;

    case "experiance":
      if (!value) {
        error = "Experience is required";
      }
      break;

    default:
      break;
  }

  setErrors((prev) => ({
    ...prev,
    [name]: error,
  }));
};

const handleChange=(e)=>{
  const {name, value, type, checked}=e.target
  const newValue=type=== 'checkbox' ? checked: value

    setFormData((prev) => ({
    ...prev,
    [name]: newValue,
  }));

  validateField(name, newValue);

}
 const handleSkillChange=(skill)=>{
  setFormData((prev)=>{
        const skills = prev.skills.includes(skill)
      ? prev.skills.filter((s) => s !== skill)
      : [...prev.skills, skill];

    return {
      ...prev,
      skills,
    };
  })

}


  const handleSubmit = (e) => {
  e.preventDefault();

  validateField("fullName", formData.fullName);
  validateField("email", formData.email);
  validateField("role", formData.role);
  validateField("experiance", formData.experiance);

  if (formData.skills.length === 0) {
    setErrors((prev) => ({
      ...prev,
      skills: "Please select at least one skill",
    }));
    return;
  }

  if (!formData.agreeToTerms) {
    setErrors((prev) => ({
      ...prev,
      agreeToTerms: "You must agree to the terms",
    }));
    return;
  }

  console.log(formData);
};


  return (
    <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">
        <h2 className="text-2lx text-center"> developer  application form</h2>
        <form onSubmit={handleSubmit}>
            <label> full name:</label>
        <input type="text" 
        name="fullName"
        value={formData.fullName}  onChange={handleChange}   className="w-full p-1 border rounded 2xl" />
            {errors.fullName &&  (<p   className="mt-2 text-sm text-red-600"> {errors.fullName}</p>)} 
        <div>
        <label> email:</label>
        <input type="email" 
        name="email"
        value={formData.email}   onChange={handleChange}
   className="w-full p-1 border rounded 2xl"/> 
         {errors.email && (<p   className="mt-2 text-sm text-red-600"> {errors.email}</p>)}
        </div>
        <label> role</label>
        <div>
          <select name="role" value={formData.role} onChange={handleChange}    className="w-full p-1 border rounded 2xl">
   <option value=""> select a role</option>
        {
          roles.map((role)=>(
            <option  key={role} value={role}> {role}</option>
          ))
        }
          </select>
                   {errors.role && (<p   className="mt-2 text-sm text-red-600"> {errors.role}</p>)}
        </div>
        <div>
          <label htmlFor=""> years of experience</label>
          <input type="number" name="experiance"  value={formData.experiance} onChange={handleChange}
          min="0"
          max="30"
             className="w-full p-1 border rounded 2xl"
          />
           {errors.experiance&& (<p   className="mt-2 text-sm text-red-600"> {errors.experiance}</p>)}
        </div>
        <div  className="grid grid-cols-2 gap-4 space-x-2">
         <label> skills</label>
          {
            skillsOptions.map((skill)=> (
               <label key={skill}> 
              <input 
              type="checkbox"
              checked={formData.skills.includes(skill)}
                 onChange={() => handleSkillChange(skill)}
              />
                    <span className="text-sm text-zinc-600">{skill}</span>
              
                    </label>
            ))
            
          }
              {errors.skills && (<p   className="mt-2 text-sm text-red-600"> {errors.skills}</p>)}
      
          
        </div>
        <div>
          <input type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
           />
              <label className="text-sm text-zinc-700">
              I agree to the terms and conditions
            </label>
                       {errors.agreeToTerms && (<p   className="mt-2 text-sm text-red-600"> {errors.agreeToTerms}</p>)}
        </div>
      <button type="submit" className="bg-red-600 text-center text-white w-full rounded-2xl mt-2 p-2" > submit applition</button>
     
        </form>

    </div>
  )
}

export default FormDev;