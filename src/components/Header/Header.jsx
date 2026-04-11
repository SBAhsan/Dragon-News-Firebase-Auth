import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-[#706F6F] mt-10">
      <img className="w-[400px] mb-2" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="font-medium">
        <span className="text-[#403F3F]">{format(new Date(), "EEEE,")}</span>{" "}
        {format(new Date(), "MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
