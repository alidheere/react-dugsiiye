
import { useState, useContext } from 'react'
import { useReducer,  } from 'react'
import TodoContext from './TodoContext'
import { initialState, reducer } from './Reducer'


export const TodoForm = () => {
        // const[state, dispatch]=useReducer(reducer,initialState)
          const { dispatch } = useContext(TodoContext);
        const [text, setText] =useState('')
    
    
        const handleAdd=()=>{
            if(text.trim()){
                const newtodo={
                    id: Date.now(),
                    text,
                    completed: false
                }
                      dispatch({type: "add", payload: newtodo});
                      setText('')
                     
            }
      
        }
  return (
    <div>
    
        <input type="text"
     className=" bg-gray-100 border-none rounded px-1 py-1 mr-2"
  
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder="inter new todo"
         className="w-2/3 p-1 border rounded 2xl"
        />
        <button onClick={handleAdd} className="bg-violet-600 text-white p-1 px-2 ml-2 rounded 2xl"> add</button>
        {/* <ul>
            {
                state.map(todo=>(
                    <li key={todo.id}>
                        <span     style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
                         > {todo.text}</span>
                        <button onClick={()=> dispatch({type: "dalete", payload: todo.id})}> dalete</button>

                    </li>
                ))
            }
        </ul> */}
    </div>
    
  )
}
