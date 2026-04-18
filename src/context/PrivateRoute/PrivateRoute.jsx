import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {userData, loading} = use(AuthContext);
    const location = useLocation();

    if (loading) return <span className="loading loading-infinity loading-xl h-screen flex w-1/12 mx-auto items-center justify-center"></span>

    if(userData && userData.email){
        return children;
    }       
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>

};

export default PrivateRoute;