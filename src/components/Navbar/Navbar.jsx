import React from "react";
import { NavLink } from "react-router";
import userImg from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-end mt-5">
      <div className="flex justify-between items-center gap-x-[438px]">
        <div className="flex gap-5 text-[#706F6F] m">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <img src={userImg} alt="" />
          <button className="bg-[#403F3F] text-white px-10 py-2">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
