import {useForm} from 'react-hook-form'

const HookReactForm = () => {
    const {register, handleSubmit,  watch,formState : {errors}}=useForm()
    console.log(errors.username)
    const onSubmit=(data)=>{
        console.log(data)
    }
    const password= watch('password')
  return (
    <div> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor=""> username</label>
      <input type="text"  {...register('username', {required: 'username is required'}) }/>
            {errors.username && <p> {errors.username.message}</p>}
            </div>
      <div>
        <label htmlFor=""> email</label>

      
            <input type="email" {...register('email', {required: 'email is required', pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'is valid email addares'}})} />
             {errors.email && <p> {errors.email.message}</p>}
        
            </div>
    <div>
        <label htmlFor=""> password</label>
        <input type="password" {...register( 'password', {required: 'password is required', minLength:{value: 6, message: 'password at list must be 6 charactars'}})}/>
                   {errors.password && <p> {errors.password.message}</p>}
    </div>

    <div>
        <label htmlFor="">comfirmPassowrd</label>
             <input type="comfirmpassword" {...register( 'comfirmPassword', {required: 'comfirmpassword is required', validate: (value)=> value === password || 'passwprd do not much'})}/>
                   {errors.comfirmPassword && <p> {errors.comfirmPassword.message}</p>}

    </div>
    <div>
        <label>    I accept the terms and conditions
        <input type="checkbox" {...register('terms', {required: 'you must accpect the terms'})} />
        </label>
      {errors.terms && <p> {errors.terms.message}</p>}
    </div>
                <button type='submit'> submit</button>
        </form>
    </div>
  )
}

export default HookReactForm