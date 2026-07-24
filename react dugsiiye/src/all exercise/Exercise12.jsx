import { useState } from "react";
import Botton from "../Botton";
const Counter =()=>{
 const[count, setcount]=useState(0)

    return (
        <>
           <h1> count {count}</h1>
           <button onClick={() => setcount(count-1)} disabled={count==0}> decrment</button>
           <button onClick={()=> setcount(count+1)}> increment</button>
        </>
     
        
    )
}
export default Counter;