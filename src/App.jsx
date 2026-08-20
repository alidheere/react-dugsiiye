// import { useContext } from "react";
// import { Link, NavLink,  useNavigate } from "react-router-dom";
// import { AuthContext } from "./login page/Authcontext";

// import { Outlet } from "react-router-dom";




// function App() {
// const {isAuthencated,logout}= useContext(AuthContext)
// const navigate= useNavigate()
// const hadleLogout=()=>{
//   logout()
//   navigate()
// }
//   return (
// <div className=" h-screen  mx-auto mt-5 p-5 bg-white rounded-lg shadow-md" >


  
// <nav  className="flex space-x-4 bg-yellow-50 items-center justify-center">
// <NavLink to="/"  className="font-bold"> home</NavLink>
//   {isAuthencated ? (
//     <>
//       <NavLink to="/create" className="  font-bold hover:bg-blue-600 text-white p-2">Create Post</NavLink>

//       <button onClick={hadleLogout} className=" font-bold hover:bg-red-500 text-white p-2">Logout</button>
//     </>
//   ) : (
//     <NavLink to="/login">Login</NavLink>
//   )}
// </nav>

// <Outlet/> 


// </div>
//   );
// }
// export default App;

import { useContext } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "./login page/Authcontext";

function App() {
  const { isAuthencated, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">

      <nav className="flex space-x-4 bg-yellow-50 items-center justify-center p-3">

        <NavLink
          to="/"
          className="font-bold"
        >
          Home
        </NavLink>

        {isAuthencated ? (
          <>
            <NavLink
              to="/create"
              className="font-bold  text-black p-2 rounded  hover:bg-blue-500 "
            >
              Create Post
            </NavLink>

            <button
              onClick={handleLogout}
              className="font-bold  text-black p-2 rounded   hover:bg-red-500 "
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="font-bold"
          >
            Login
          </NavLink>
        )}

      </nav>

      <Outlet />

    </div>
  );
}

export default App;
