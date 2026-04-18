import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {

  const {signInUserWithEmail} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess(false);
    setError('');

    signInUserWithEmail(email, password)
    .then(() => {
      navigate(`${location.state ? location.state : '/'}`)
      setSuccess(true);
    })
    .catch(error => {
      console.log(error.message);
      alert(error.message);
      setError(error.message);
    })
  };

  return (
    <div className="card w-full mx-auto bg-[#F3F3F3] text-[#403F3F] mt-20 mb-20 max-w-lg shrink-0 shadow-2xl">
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
          />

          {/* password */}
          <label className="label mt-3 text-[#403F3F] font-semibold text-[15px] border-none outline-0">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input w-full px-4 py-6 text-[#403F3F]"
            placeholder="Password"
          />
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
