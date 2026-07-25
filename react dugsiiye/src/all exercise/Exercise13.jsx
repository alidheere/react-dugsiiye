import { useReducer } from "react";
const initialStatte = { counterA: 0, counterB: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_A": {
      return {...state, counterA: state.counterA + 1 };
    }
    case "DECREMENT_A": 
    
        return {
        ...state,
        counterA: state.counterA > 0 ? state.counterA - 1 : 0,
      };
    case "INCREMENT_B": {
      return {...state, counterB: state.counterB + 1 };
    }
    case "DECREMENT_B": 
   
    
      return {
        ...state,
        counterB: state.counterB > 0 ? state.counterB - 1 : 0,
      }
      case 'reset all':
        return initialStatte
    default:
      return state;
  }
};

const Counters = () => {
  const [state, dispath] = useReducer(reducer, initialStatte);

  return (
    <div>
      <h1> double counter</h1>
      <h2> countA: {state.counterA}</h2>
      <button onClick={() => dispath({ type: "INCREMENT_A" })}  > A+</button>
      <button onClick={() => dispath({ type: "DECREMENT_A" })} disabled={state.counterA===0}> A-</button>
      <div>
        <h2> countB: {state.counterB}</h2>
        <button onClick={() => dispath({ type: "INCREMENT_B" }) } > B+</button>
        <button onClick={() => dispath({ type: "DECREMENT_B" })} disabled={state.counterB===0}> B-</button>
      </div>
      <button onClick={()=> dispath({type: 'reset all'})}> reset all</button>
    </div>
  );
};
export default Counters;
