import React, { useContext } from 'react'
import { AuthContext } from './Authcontext';
import { Navigate } from 'react-router';

function ProtectedRoute({children}) {

   const {isAuthencated} = useContext(AuthContext)
if(!isAuthencated){
      <Navigate to="/login" state={{ from: location }} replace />
}
  return children;
}

export default ProtectedRoute;