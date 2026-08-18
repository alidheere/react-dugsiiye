// import { useContext } from "react";
// import { Link, Outlet, useNavigate } from "react-router";
// import { AuthContext } from "./login page/Authcontext";

import TailwindProject from "./all exercise/Exercise21";



function App() {
// const {isAuthencated,logout}=useContext(AuthContext)
// const navigate= useNavigate()
// const hadleLogout=()=>{
//   logout()
//   navigate()
// }
  return (
<div >
<TailwindProject/>

{/*   
<nav className="flex items-center bg-gray-500 text-3xl text-white  space-x-4">
  <Link to="/login"> login </Link>
  {
    isAuthencated && (
    <>
      <Link to="/dashbrod"> dashbrod</Link>
      <Link to="/cources"> cources</Link>
  <button className="bg-red-500 text-white p-2" onClick={hadleLogout}> logout</button>
    
    
    </>
    )
  }

</nav>

<Outlet/>  */}


</div>
  );
}
export default App;
