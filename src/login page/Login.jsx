import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './Authcontext';
import { Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Login() {

    const {login, isAuthencated}= useContext(AuthContext)
    const navigate= useNavigate()
    const location=useLocation()
    if(isAuthencated){

<Navigate to="/create" replace />
}
const handleLogin=()=>{
login()
  const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
}
  return (
    <div className='text-xl items-center m-4'>
    
            <h2>Login</h2>
      <p>You must log in to access the Create Post page.</p>
      <button onClick={handleLogin} className=' rounded-xl p-4 bg-blue-600 text-white'>Log In</button>



    </div>


  )
}

export default Login;
