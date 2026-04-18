import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {userData, loading} = use(AuthContext);

    if (loading) return <span className="loading loading-spinner loading-lg"></span>;

    if(userData && userData.email){
        return children;
    }       
    return <Navigate to={'/auth/login'}></Navigate>

};

export default PrivateRoute;