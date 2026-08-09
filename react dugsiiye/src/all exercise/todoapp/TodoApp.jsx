
import React, { useReducer } from 'react'
import { useContext } from 'react'
import { initialState, reducer } from './Reducer'
import TodoContext from './TodoContext'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'


export const TodoApp = () => {
    const [state, dispatch]=useReducer( reducer,initialState)
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
   <TodoContext.Provider value={{state, dispatch}}>
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md"> 
        <h2 className='text-center font-medium'> my tasks todo app</h2>
           <TodoForm/>
        <TodoList/>
  
    </div>
   </TodoContext.Provider>
  
    </div>
  )
}
