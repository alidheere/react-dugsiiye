import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './Authcontext';
import { Navigate, useNavigate } from 'react-router';

function Login() {

    const {login, isAuthencated}= useContext(AuthContext)
    const navigate= useNavigate()
    if(isAuthencated){
    return <Navigate to="/dashbrod" replace/>
}
const handleLogin=()=>{
login()
navigate('/dashbrod')
}
  return (
    <div>Login page

    <button className='bg-rose-600 p-2 text-white items-center' onClick={handleLogin}>  login </button>

    </div>


  )
}

export default Login;