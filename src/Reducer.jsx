import { useReducer } from "react"

const CounterWith =()=>{
    const initialState={count: 0}

    const reducer=(state, action)=>{
        switch(action.type){
            case "increment":
                return { count: state.count+1}
                case 'decrement':
                return{count: state.count-1 }
                case 'reset' :return initialState
            default:
            return state
    
        }
    }

    const[state, dispath]=useReducer(reducer, initialState)
    return(
        <>
        <h2> {state.count}</h2>
        <button onClick={()=> dispath({type:"increment"})}> incrementA+</button>
        
        <button onClick={()=> dispath({type: "decrement"})}>  decrementA-</button>
        <button onClick={()=> dispath({type: "reset"})}> reset</button>
        </>
    )
}
export default CounterWith;