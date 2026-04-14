import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold text-[#403F3F]'>Login With</h2>
            <div className='space-y-3 mt-5'>
                <button className="btn btn-outline w-full border-[#D72050] text-[#D72050] hover:bg-[#D72050] hover:text-white font-medium">
                    <FcGoogle size={20}></FcGoogle>
                    Login with Google
                    </button>
                <button className="btn btn-outline w-full text-[#403F3F] hover:bg-[#403F3F] hover:text-white font-medium">
                    <FaGithub size={20}></FaGithub>
                    Login with Github
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;