import { useState,useEffect } from "react";
const Timers=()=>{
    const [timer, setTimer]=useState(0)
const[isrunning, setIsrunning]= useState(false)
    useEffect(()=>{
let timerId
        if(isrunning){
           timerId = setInterval(()=>{
        setTimer((prev)=> prev+1)
     },1000)    
        }
    
        
     return()=> clearInterval(timerId);
    },[isrunning])
const handlestar=()=>{
    setIsrunning(true)
}
const hadlereset=()=>{
    setIsrunning(false)
    setTimer(0)
}

const handlestop=()=>{
    setIsrunning(false)
}
    return(
        <div>
            <h2> stopwach {timer}secodns</h2>
            <button  disabled={isrunning}onClick={handlestar}> start </button>
            <button onClick={handlestop} disabled={!isrunning}> stop </button>
            <button onClick={hadlereset}> reset</button>
        </div>
    )
}

export default Timers;