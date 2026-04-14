import React from "react";
import { NavLink } from "react-router";
import userImg from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-end mt-5">
      <div className="w-3/5 flex justify-between items-center">
        <div className="nav flex gap-5 text-[#706F6F] ml-9">
          <NavLink to={"/"} className={'p-1'}>Home</NavLink>
          <NavLink to={"/about"} className={'p-1'}>About</NavLink>
          <NavLink to={"/career"} className={'p-1'}>Career</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <img src={userImg} alt="" />
          <button className="btn bg-[#403F3F] text-white px-10 py-2">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
