

import { useState }from "react"
const Toggle = ()=>{

    const [ison , setIson]= useState (false)
    const tagglle= ()=>{
        setIson(!ison)
    }

    return (
        <>
        <p> the botton is {ison ? "on" : "off"}</p>
        <button onClick={tagglle}> turn {ison ? "off" : "on"}</button>
        </>
    )
}

export default Toggle;