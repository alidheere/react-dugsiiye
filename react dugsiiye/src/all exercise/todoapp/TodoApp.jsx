
import React, { useReducer } from 'react'
import { useContext } from 'react'
import { initialState, reducer } from './Reducer'
import TodoContext from './TodoContext'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'

export const TodoApp = () => {
    const [state, dispatch]=useReducer( reducer,initialState)
  return (
   <TodoContext.Provider value={{state, dispatch}}>
    <div> 
        <h2> todo app wich context and reducer</h2>
           <TodoForm/>
        <TodoList/>
     
    </div>
   </TodoContext.Provider>
  )
}
