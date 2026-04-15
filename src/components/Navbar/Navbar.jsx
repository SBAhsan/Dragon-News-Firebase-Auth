import React from "react";
import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/career"}>Career</NavLink>
    </>
  );

  return (
    <div className="flex justify-end mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 space-y-3 text-[15px] text-[#706F6F] rounded-box z-1 mt-3 px-10 py-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[#706F6F] space-x-6 text-[15px] px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          <img src={userImg} alt="" />
          <button className="btn bg-[#403F3F] text-white px-10 py-2">
            <Link to={'/auth/register'}>Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


