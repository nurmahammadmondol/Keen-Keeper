import "../../index.css"

import { ChartLine, Clock, House } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const manu = (
    <nav className="border rounded-2xl border-gray-200 ">
      <NavLink to={'/'} className="text-[#244D3F] btn font-bold border-none rounded-none rounded-l-2xl"><House /> Home</NavLink>
      <NavLink to={'/timeline'} className="text-[#244D3F] btn  font-bold border-none  rounded-none"><Clock /> Time Line</NavLink>
      <NavLink to={'/stats'} className="text-[#244D3F] btn  font-bold border-none  rounded-none rounded-r-2xl"><ChartLine />Stats</NavLink>
    </nav>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {manu}
          </ul>
        </div>
        
        <a className="btn btn-ghost text-2xl font-bold">Keen <span className="font-normal text-[#244D3F]">Keeper</span></a>
      </div>
      
      <div className="navbar-end hidden md:flex items-center gap-2">{manu}</div>
    </div>
  );
};

export default Navbar;
