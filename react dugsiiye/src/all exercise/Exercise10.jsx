
import React from "react";
const UserList =({users})=>{
return (
    <>
  {
    users.length > 0 ? (

        <ul>
            {
                users.map((user)=>(
                    <li key={user.id}> {user.name}  ({user.email})</li>
                ))
            }
        </ul>




    ):<p> user not found</p>
  }
    </>
)
}

export default UserList;