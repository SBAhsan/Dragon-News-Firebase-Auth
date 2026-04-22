import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import userImg from "../../assets/user.png";

const SocialLogin = () => {
  const { userData, signInWithGoogle, signInWithGithub } = use(AuthContext);

  const handleGoogleLogin = () => {
    console.log("google clicked");

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
    .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  return (
    <div>
      {userData ? (
        <div>
          <h2 className="font-semibold text-[#403F3F]">Your Profile</h2>
          <div className="space-y-3 mt-5 flex items-center gap-3">
            <img
              src={userData.photoURL || "https://placehold.co/40x40?text=U"}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div>
              <p className="font-semibold text-sm">
                {userData.displayName || "User"}
              </p>
              <p className="text-xs text-[#706F6F]">{userData.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-semibold text-[#403F3F]">Login With</h2>
          <div className="space-y-3 mt-5">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full border-[#D72050] text-[#D72050] hover:bg-[#D72050] hover:text-white font-medium"
            >
              <FcGoogle size={20}></FcGoogle>
              Login with Google
            </button>
            <button onClick={handleGithubLogin} className="btn btn-outline w-full text-[#403F3F] hover:bg-[#403F3F] hover:text-white font-medium">
              <FaGithub size={20}></FaGithub>
              Login with Github
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
