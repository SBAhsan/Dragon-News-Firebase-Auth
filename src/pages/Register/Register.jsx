import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card w-full mx-auto bg-[#F3F3F3] text-[#403F3F] mt-25 mb-20 max-w-lg shrink-0 shadow-2xl">
      <div className="card-body px-10 py-15 w-full mx-auto">
        <h2 className="font-semibold text-4xl text-center pb-10 border-b border-[#403F3F] ">Register your account</h2>
        <fieldset className="fieldset">
          <label className="label mt-10 text-[#403F3F] font-semibold text-[15px]">Name</label>
          <input type="email" className="input w-full px-4 py-6 text-[#403F3F]" placeholder="Your Name" />
          <label className="label mt-3 text-[#403F3F] font-semibold text-[15px]">Email</label>
          <input type="email" className="input w-full px-4 py-6 text-[#403F3F]" placeholder="Email" />
          <label className="label mt-3 text-[#403F3F] font-semibold text-[15px] border-none outline-0">Password</label>
          <input type="password" className="input w-full px-4 py-6 text-[#403F3F]" placeholder="Password" />
          <button className="btn btn-neutral mt-4 bg-[#403F3F]">Register</button>
        </fieldset>
        <div className="text-center mt-2">
            <Link to={'/auth/login'} className="link link-hover">Already have an account? Please <span className="text-[#D72050] font-semibold">Login</span></Link>
          </div>
      </div>
    </div>
  );
};

export default Register;
