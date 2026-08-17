import { Link } from "react-router";
  export   const users=[
        {
            id: 1, name: 'ahmed'},
            {
            id: 2, name: 'xamuuda'
        }
    ]
function UsersList() {

  return (
    <div>
        <h1> user list</h1>
        <ul>
            {
                users.map((user)=>(
                               <li key={user.id}> 
                   <Link to={`/users/${user.id}`}> {user.name}</Link>
                   
                   
                   
                   </li>
                ))
            
                
            }
        </ul>
    </div>
  )
}

export default UsersList;