import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { useState } from 'react'
 export const TodoItem = ({todo}) => {
  const [isChecked, setIsChecked]=useState(false)
    const {dispatch}=useContext(TodoContext)
  return (
    <>
        <li> <span   style={{
                textDecoration: todo.completed ? 'line-through' : 'none', cursor: "pointer",}}
                onClick={()=> dispatch({type: "toggle", payload: todo.id})}>
                {todo.text}
        </span>
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
        <button onClick={()=> dispatch({type: "delete", payload: todo.id })} > Delete</button>

    </li>
    </>

  )
}

