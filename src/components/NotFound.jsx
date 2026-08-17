import React from 'react'
import { useRouteError } from 'react-router';

const NotFound = () => {
  const error= useRouteError()
  return (
    <div><h2> error</h2>
    <p> this page is not exsit {error.statusText}</p>

    </div>
  )
}

export default NotFound;