import { Outlet } from "react-router-dom";
import Navbar from "./all exercise/projects/components/Navbar";

;

// import { useContext } from "react";
// import { NavLink, useNavigate, Outlet } from "react-router-dom";
// import { AuthContext } from "./login page/Authcontext";

function App() {
  // const { isAuthencated, logout } = useContext(AuthContext);

  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/login");
  // };

  return (
    // <div className="min-h-screen mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">

    //   <nav className="flex space-x-4 bg-yellow-50 items-center justify-center p-3">

    //     <NavLink
    //       to="/"
    //       className="font-bold"
    //     >
    //       Home
    //     </NavLink>

    //     {isAuthencated ? (
    //       <>
    //         <NavLink
    //           to="/create"
    //           className="font-bold  text-black p-2 rounded  hover:bg-blue-500 "
    //         >
    //           Create Post
    //         </NavLink>

    //         <button
    //           onClick={handleLogout}
    //           className="font-bold  text-black p-2 rounded   hover:bg-red-500 "
    //         >
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <NavLink
    //         to="/login"
    //         className="font-bold"
    //       >
    //         Login
    //       </NavLink>
    //     )}

    //   </nav>

    //   <Outlet />

    // </div>

    <div>
    <Navbar/>

    <Outlet/>
    </div>
  );
}

export default App;
