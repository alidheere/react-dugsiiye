
import { useForm } from "react-hook-form"
const StudentForm = () => {
        const {register, handleSubmit,  watch,formState : {errors}}=useForm()
    console.log(errors.studentname)

        const onSubmit=(data)=>{
          console.log('submited form', data)
              alert('Registration successful!\n' + JSON.stringify(data, null, 2));
        }
  return (
    <div className="max-w-md mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">
        <h2 className="font-bold flex intems-center "> student registarion</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label> student name</label>
        <div>
            <input type="text"  {...register('studentname', {required: 'student name is required', minLength:{value:6, message: 'studentname at list 5 charactors'}})}
            className="w-full p-1 border rounded 2xl"/>
            {errors.studentname && <p className="text-red-500 text-sm"> {errors.studentname.message}</p>}
        </div>
        <div> 
            <label> email</label>
            <input type="email" {...register('email', {required: 'email is reqiured',
                pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'is valid email addares'}
            })} 
                   className="w-full p-1 border rounded 2xl"/>
                {errors.email && <p className="text-red-500 text-sm"> {errors.email.message}</p>}
        </div>
        <div>
            <label> Grade level</label>
            <select {...register('gradelevel', {required: 'plase select a grade'})}        className="w-full p-1 border rounded 2xl">
                      <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
            </select>
                    {errors.gradelevel && <p className="text-red-500 text-sm"> {errors.gradelevel.message}</p>}
        </div>
        <div>
            <label> select  subject</label>
            <label className="flex items-cente">        somali</label>
            <div className="space-y-2">
                <input type="checkbox"  {...register('subject', {required: 'select at list one subject'})}
                value={"math"}
                    className="w-5 h-5"/>
                
            </div>
            xisaab
            <label  className="flex items-cente"> 
                <input type="checkbox" {...register('subject')} 
                value={"science"}
                    className="w-5 h-5"/>
            </label>
                 Science
                 <label   className="flex items-cente">
            <input type="checkbox" {...register('subject')}
            value={"english"} 
          className="w-5 h-5"/>

                 </label >
                   {errors.subject && <p className="text-red-500 text-sm"> {errors.subject.message}</p>}
        </div>
        <button type="submit" className="bg-red-500 text-white w-full border rounded-2xl text-2xl"> Register</button>
    </form>

    </div>
  )
}

export default StudentForm;