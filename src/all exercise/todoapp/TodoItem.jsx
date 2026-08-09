import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { useState } from 'react'
 export const TodoItem = ({todo}) => {
  const [isChecked, setIsChecked]=useState(false)
    const {dispatch}=useContext(TodoContext)
  return (
    <>
      

     <li className="bg-rose-50 p-2 mt-2 rounded flex items-center justify-between">

   
      <span className="flex items-center gap-2">
<input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: "toggle", payload: todo.id, }) } />
        <span
          style={{
         textDecoration: todo.completed ? 'line-through' : 'none', cursor: "pointer",
          }}
        onClick={()=> dispatch({type: "toggle", payload: todo.id}) } >
        
          {todo.text} 
        </span>

      </span>

  
      <button
        onClick={() =>
          dispatch({
            type: "dalete",
            payload: todo.id,
          })
        }
        className="text-red-500"
      >
        Delete
      </button>

    </li>
    </>

  )
}

