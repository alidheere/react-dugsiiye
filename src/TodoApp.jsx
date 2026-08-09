import { useReducer, useState } from "react"

const initialState=[]
const reducer=(state, action)=>{
    switch(action.type){
        case 'add':
            return[...state, action.payload]
            case 'toggle':
                return state.map((todo)=> todo.id===action.payload? {...todo, completed: !todo.completed}:todo)
                case 'dalete':
                    return state.filter((todo)=> todo.id !==action.payload)

                     default:
                    return state

    }
   
}



const TodoApp =()=>{
    const[state, dispatch]=useReducer(reducer,initialState)
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
        <ul>
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
        </ul>
    </div>
)
}
export default TodoApp;