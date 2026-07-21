
// const UserCard = ({currentUser, gmail, com}) => {
//     return (
//         <div>
//             <h2> {currentUser}</h2>
//             <p> {gmail}</p>
//             <p> {com}</p>
            
//       <UserCard currentUser={"hamuudali"} gmail={"hamuudali@gmail.com"} />

//       <UserCard currentUser={"ahmed"} gmail={"ahmed@gmail.com"} />

//       <UserCard currentUser={"zahra"} gmail={"zahra@gmail.com"} />

//       <UserCard currentUser={"farhan"} gmail={"farhan@gmail.com"} />

// const [user, setUser] = useState({name: "hamuuda", age: 20, id: "AF123"})
// const updateAge =()=>{
// setUser({...user, id: user.id, age: user.age+1})
//  <p> name: {user.name}, age: {user.age}, id:{user.id}</p>

//     <button onClick={updateAge}> increase age</button>

//         </div>
//     )
// }
import { useState, useEffect } from "react";

  
const   Daaqad=()=>{
      const [width, setWidth] = useState(window.innerWidth);

       useEffect(() =>{
        const handRezise=()=> setWidth(window.innerWidth);
        window.addEventListener("resize", handRezise);
        return ()=>{
            window.removeEventListener('resize', handRezise)
        }

        
      },[])
    return(
        <div>
            <p> width {width}px</p>
        </div>
    )
}




export default Daaqad;
