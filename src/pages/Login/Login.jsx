import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const {signInUserWithEmail, resetUserPassword} = useContext(AuthContext);
  const emailRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setError('');

    signInUserWithEmail(email, password)
    .then(() => {
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(error => {
      setError(error.code);
    });   
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;

    if(!email){
      alert("Please enter your email");
      return;
    }

    resetUserPassword(email)
    .then(() => {
      alert("Password reset email sent")
    })
    .catch(error => {
      console.log(error.code);
    });
  }

  const handleToggleShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  return (
    <div className="card w-full mx-auto bg-[#F3F3F3] text-[#403F3F] mt-10 mb-20 max-w-lg shrink-0 shadow-2xl">
      <h2 className="font-semibold py-15 mx-5 text-4xl text-center pb-10 border-b border-[#403F3F]">
        Login to your account
      </h2>
      <form
        onSubmit={handleLogIn}
        className="card-body px-10 pb-15 w-full mx-auto"
      >
        <fieldset className="fieldset">
          {/* email */}
          <label className="label mt-10 text-[#403F3F] font-semibold text-[15px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input w-full px-4 py-6 text-[#403F3F]"
            placeholder="Email"
            required
          />

          {/* password */}
          <label className="label mt-3 text-[#403F3F] font-semibold text-[15px] border-none outline-0">
            Password
          </label>
          <div className="relative">
            <input
            type={!showPassword ? "password" : "text"}
            name="password"
            className="input w-full px-4 py-6 text-[#403F3F]"
            placeholder="Password"
            required
          />
          <button onClick={handleToggleShowPassword} className="btn btn-sm border-0 bg-transparent hover:shadow-none absolute top-2 right-2">
            {
              !showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
            } 
          </button>
          </div>

          {
            error && <p className="text-red-600">{error}</p>
          }

          <div><a onClick={handleResetPassword} className="link link-hover">Forgot password?</a></div>

          <button type="submit" className="btn btn-neutral mt-4 bg-[#403F3F]">
            Login
          </button>
        </fieldset>
        <div className="text-center mt-2">
          <p>
            New here? Please{" "}
            <Link
              to={"/auth/register"}
              className="link link-hover text-[#D72050] font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
