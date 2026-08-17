import { useParams } from "react-router";
import { users } from "./UsersList";


function UserProfile() {
    const {userId}= useParams()
const userInfo= users.filter(user=> user.id==userId) [0]
console.log(userInfo)

  return (
    <div>  <h1>UserProfile </h1>
       <p> user id {userInfo.id}</p>
       <p> user name {userInfo.name}</p>
    </div>
  )
}

export default UserProfile;