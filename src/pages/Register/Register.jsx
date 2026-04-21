import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUserWithEmail, setUserData, updateUserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, photo, email, password);

    createUserWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUserData({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error.code);
            setUserData(user);
          });

        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleToggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="card w-full mx-auto bg-[#F3F3F3] text-[#403F3F] mt-10 mb-20 max-w-lg shrink-0 shadow-2xl">
      <h2 className="font-semibold py-15 mx-5 text-4xl text-center pb-10 border-b border-[#403F3F]">
        Register your account
      </h2>
      <form
        onSubmit={handleRegister}
        className="card-body px-10 pb-10 w-full mx-auto"
      >
        <fieldset className="fieldset">
          {/* name field */}
          <label className="label mt-8 text-[#403F3F] font-semibold text-[15px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input w-full px-4 py-6 text-[#403F3F]"
            placeholder="Your Name"
            required
          />

          {/* photo url */}
          <label className="label mt-3 text-[#403F3F] font-semibold text-[15px]">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            className="input w-full px-4 py-6 text-[#403F3F]"
            placeholder="Photo URL"
            required
          />

          {/* email field */}
          <label className="label mt-3 text-[#403F3F] font-semibold text-[15px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input w-full px-4 py-6 text-[#403F3F]"
            placeholder="Email"
            required
          />

          {/* password field */}
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
            <button
              onClick={handleToggleShowPassword}
              className="btn btn-sm border-0 bg-transparent hover:shadow-none absolute top-2 right-2"
            >
              {!showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </button>
          </div>

          {error && <p className="text-red-600">{error}</p>}

          {/* register button */}
          <button type="submit" className="btn btn-neutral mt-4 bg-[#403F3F]">
            Register
          </button>
        </fieldset>
        <div className="text-center mt-2">
          <p>
            Already have an account? Please{" "}
            <Link
              to={"/auth/login"}
              className="link link-hover text-[#D72050] font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
