import { useState, useEffect } from "react"



const UseFetch = (url) => {
    const [Data, setData]= useState('')
    const [loading, setLoading]= useState(false)
    const[error, setError]= useState(null)

useEffect(()=>{
let isMounted= true
const fetchdata= async()=> {
    try{
const response = await fetch(url)
if(!response.ok){
    throw new error(`http error! status ${response.status}`)
}
const reselt= await response.json()
if(isMounted){
    setData(reselt)
    setLoading(false)
}

    } catch(error){
      if(isMounted){
        setError(error)
        setLoading(false)
      }
    }
}
fetchdata()
return ()=>{
    isMounted = false
}

},[url])

  return {Data,loading, error}
}

export default UseFetch