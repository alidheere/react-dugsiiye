
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
      <h2> Todo app</h2>
        <input type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder="inter new todo"
        
        />
        <button onClick={handleAdd}> add</button>
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
