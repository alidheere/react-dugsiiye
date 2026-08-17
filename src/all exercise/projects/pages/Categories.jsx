import React from 'react'
import { categories,  } from './Recipes';
import { Link } from 'react-router';

function Categories() {
  return (
    <div className='min-h-screen bg-gray-100 py-4 '>
        <div className=' bg-white p-6 rounded-lg shadow-md w-5xl  max-w-5xl mx-auto p-4' >
            <h1 className='font-bold text-3xl'> categories</h1>
            <div className=''>
                <ul >
                
                   
                    {
                       categories.map((category)=>(
                            
                            <li key={category.id} className='flex  flex-col  '>
                                        <Link to={`/category/${category.id}`}>
                                    
                  
                                   <span className='font-bold text-2xl p-2 hover:text-rose-600 cursor-pointer '> {category.id} </span>
                                <span className='text-gray-600'> {category.description}</span>
                          
                               </Link>

                            </li>
                        
                            
                        ))
                    }
                  
                </ul>
            </div>
        </div>
 
    </div>
  )
}

export default Categories;