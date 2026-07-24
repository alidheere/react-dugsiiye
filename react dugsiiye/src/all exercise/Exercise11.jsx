

import { useState } from "react";
const Fromlogin =()=>{

const[username, setUserName]=useState('')
const[password,setPassword]= useState('')
const [isloggin, setIslogging]=useState(false)

const handloging=(event)=>{
    event.preventDefault();
    if(username && password){
        setIslogging(true)
    }
}

const hadllogout=()=>{
    setUserName('')
    setPassword('')
    setIslogging(false)
}
if (isloggin){
    return (
        <div>
            <h1> welcome, {username}!</h1>
            <button onClick={hadllogout}> logout</button>
        </div>
    )
}
    return (
<form onSubmit={handloging}>
    <h2> login</h2>
    <div>
        <label> username</label>
        <input type="text" 
        value={username}
        onChange={(e)=> setUserName(e.target.value)}
        required/>
    </div>
    <div>
        <label> password</label>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required />
    </div>
    <button type="submit" > login</button>
</form>
    )
}

export default Fromlogin;