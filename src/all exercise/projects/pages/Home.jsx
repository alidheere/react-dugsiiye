import React from 'react'
import { Link } from 'react-router';

function Home() {
  return (
    <div className='h-16  flex items-center flex-col mt-4'>
        <h2  className='font-bold text-3xl'> welcome back to recipe</h2>
        <p className='text-gray-600'> waxaa diyara dooqa , karintu waxay qadaysa daqiiqado</p>
      
      <div className='grid grid-cols-2 gap-4 mt-4'>
        <div className='flex items-center bg-rose-500 text-white flex-col shadow-md rounded p-4 '>
            <Link to="/recipes" className='flex items-center flex-col'>
                            <h2 className='font-bold '> Browser recipe</h2>
            <p> explore your collection of delicious resipes</p>
            </Link>

        </div>
        <div className='flex items-center bg-rose-500 text-white flex-col shadow-md rounded p-4'>
            <Link to="/categories" className='flex items-center flex-col'>
                 <h2 className='font-bold'>  Recipes categories</h2>
            <p> find recipe by categories</p>
            </Link>
   
        </div>
      </div>
    </div>
  )
}

export default Home;