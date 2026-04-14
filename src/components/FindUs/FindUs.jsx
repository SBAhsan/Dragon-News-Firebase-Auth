import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import facebookImg from '../../assets/fb.png';
import twitterImg from '../../assets/twitter.png';
import instagramImg from '../../assets/instagram.png';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold text-[#403F3F]">Find Us On</h2>
      <div className="join join-vertical w-full mt-5">
        <button className="btn bg-white text-[#706F6F] justify-start py-7 pl-5 join-item font-medium text-[15px] space-x-1">
            <img src={facebookImg} className="bg-[#F3F3F3] px-3 py-2 rounded-full" />
            <span>Facebook</span></button>
        <button className="btn bg-white text-[#706F6F] justify-start py-7 pl-5 join-item font-medium text-[15px] space-x-1">
            <img src={twitterImg} className="bg-[#F3F3F3] px-2 py-2 rounded-full" />
            <span>Twitter</span></button>
        <button className="btn bg-white text-[#706F6F] justify-start py-7 pl-5 join-item font-medium text-[15px] space-x-1">
            <img src={instagramImg} className="bg-[#F3F3F3] px-2 py-2 rounded-full" />
            <span>Instagram</span></button>
      </div>
    </div>
  );
};

export default FindUs;
