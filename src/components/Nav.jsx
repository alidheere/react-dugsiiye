import { NavLink } from "react-router";
function Nav() {
  return (
    <div className="h-16 bg-gray-100 text-gray-900 ">
      <header className="flex justify-around items-center">
        <h1 className=" text-center text-gray-800 "> may app</h1>
        <nav className="flex justify-center gap-4 font-medium ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline" : undefined
            }
            to="/"
          >
            {" "}
            home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold underline" : undefined
            }
            to="/about"
          >
            {" "}
            about
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold  underline" : undefined
            }
            to="/contact"
          >
            {" "}
            contact
          </NavLink>


            <NavLink className={({isActive})=> (isActive ? 'font-bold underline': undefined)} to="/users"> users</NavLink>
            <NavLink className={({isActive})=> (isActive ? 'font-bold underline': undefined)} to="/dashbourd"> dashbourd</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
