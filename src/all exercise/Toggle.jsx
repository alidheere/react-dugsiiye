import { useState } from "react";

const Toggle=()=>{
const [isvisible, setIsvisible]=useState(false)
const Togglemassege =()=> setIsvisible(!isvisible)
return (
    <div>
        <button onClick={Togglemassege}>
            {isvisible ? "hide ": "show"} massege
        </button>
        {
            isvisible && <p> this is avaible messege </p>
        }
    </div>
)
}

export  default Toggle;