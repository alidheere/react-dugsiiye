import { useState, useEffect } from "react";

const MuoseTrack =()=>{

    const[mousetrack, setMouseTrack]= useState({x:0, y: 0})

    useEffect(()=>{
      const handlmousemove=(e)=>{
        setMouseTrack({  x: e.clientX, y: e.clientY  })
      }
      window.addEventListener("mousemove", handlmousemove)
      return()=>{
        window.removeEventListener("mousemove",handlmousemove)
      }
    },[])

    return(
        <div>
            <p> mouse: x{mousetrack.x}</p>
            <p> mouse: y{mousetrack.y}</p>

          
        </div>
    )
}

export default MuoseTrack;