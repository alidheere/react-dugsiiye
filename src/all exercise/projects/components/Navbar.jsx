import React from 'react'
import { NavLink } from 'react-router';

function Navbar() {
  return (
    <div className='h-16 shadow-md'>
        <header className='flex justify-around items-center mt-2'>


        <h1 className='text-rose-600 text-3xl font-bold'> Recipe Book</h1>
        <nav className='flex gap-4 capitalize '>

        
        <NavLink  to="/"   className="hover:text-rose-700 hover:underline transition"> home</NavLink>
        <NavLink to="/recipes"  className="hover:text-rose-700 hover:underline transition"> recipes</NavLink>
        <NavLink to="/categories"  className="hover:text-rose-700 hover:underline transition"> categories</NavLink>
     </nav>
             </header>
    </div>
  )
}

export default Navbar;