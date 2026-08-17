import React, { useContext } from 'react'
import { AuthContext } from './Authcontext';
import { Navigate } from 'react-router';

function ProtectedRoute({element}) {

   const {isAuthencated} = useContext(AuthContext)
if(!isAuthencated){
    return <Navigate to="/login" replace/>
}
  return element;
}

export default ProtectedRoute;