import { useState,useEffect } from "react";

const Goorshegto=()=>{

    const [time,setTime]=useState(0)
    const[socod, setSocod]=useState(false)
      const [timeLeft, setTimeLeft] = useState(0);
    useEffect(()=>{
        let timerId
        if(socod){
           timerId= setInterval(()=>{
            setTime((prev)=> prev-1)
        },1000)   
        }
      
        return()=> clearInterval(timerId)
    },[socod,timeLeft])
    
    const hadlestar=()=>{
       
        if(timeLeft>0){
            setSocod(true)
        }
    }

    const hadlesstop=()=>{
        setSocod(false)
    }

    const hadlesreset=()=>{
        setSocod(false)
        setTime(timeLeft)
    }
    const handleInputchange=(e)=>{
        const value =Number(e.target.value)
        setTimeLeft(value)
        setTime(value)
        setSocod(false)
    }

return(
    <div>
        <h2> countdown time</h2>
        <p>set time (secons): </p> 
        <input type="number"
        onChange={handleInputchange}
        value={time} />
        <div>
           <p> time left {time} secons</p>
            <button onClick={hadlestar} disabled={socod || timeLeft === 0}> star</button>
            <button onClick={hadlesstop} disabled={!socod}> stop</button>
            <button onClick={hadlesreset}> reset</button>
           
        </div>
    </div>
)
}

export default Goorshegto;