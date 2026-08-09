// import React from 'react'
// import { useRef, useEffect , useState} from "react";
// const Ref = () => {
//     const [count, setCount] = useState(0)
//     const prevCountRef=useRef()
//     useEffect(()=>{
//         prevCountRef.current=count
//     },[count])
//     const prevCount= prevCountRef.current
//   return (
//     <div>
//         <h2> count: {count} </h2>
//         <h2> previous count: {prevCount} </h2>
// <button onClick={()=> setCount(count + 1)}> increment</button>
//     </div>
//   )
// }

// export default Ref
import './Ref.css'


import{useRef, } from "react"

const RefAccess = () => {
    const cardRef= useRef(null)
    const handleToggleHighlight=()=>{
        if(cardRef.current){
            cardRef.current.classList.toggle("highlight")
        }
    }
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
<div className='card' ref={cardRef}>
    <h2> interactive card</h2>
    <p>click the button to toglee </p>

</div>
<button onClick={handleToggleHighlight}> toggle highlight</button>
    </div>
  )
}

export default RefAccess;