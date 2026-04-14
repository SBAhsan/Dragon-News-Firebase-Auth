import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-[#F3F3F3] p-3">
      <h2 className="font-semibold text-[#403F3F]">Q-Zone</h2>
      <div className="ml-4 mt-5 space-y-3">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
