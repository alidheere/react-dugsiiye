import { useState ,useEffect} from "react";

const Uses = ()=>{

const[title, setTitle]= useState("welcome")
const [name, setName]= useState('')

  useEffect(() =>{
    document.title=title;
   if(!name){
    document.title= 'welcome'
   }else{
    document.title=` ${title}, ${name}  `
   }
    console.log(title)
  },)
    return(
        <div>
            <h3> inter your name</h3>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}

            />
             <h3> change name</h3>

            <input
             type="text"
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
            />
        </div>
    )
}

export default Uses;