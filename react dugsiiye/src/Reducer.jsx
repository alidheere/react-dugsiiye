const CounterWith =()=>{
    const initialState={count: 0}

    const reducer=(state, action)=>{
        switch(action.type){
            case "increment":
                return { count: state.count+1}
                case 'decrement':
                return{count: state.count-1 }
            default:
            return state
    
        }
    }
    return(
        <>
        <button> increment</button>
        
        <button>  decrement</button>
        </>
    )
}
export default CounterWith;