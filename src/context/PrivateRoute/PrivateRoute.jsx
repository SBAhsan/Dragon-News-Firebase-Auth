import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../components/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {userData, loading} = use(AuthContext);
    const location = useLocation();

    if (loading) return <Loading></Loading>

    if(userData && userData.email){
        return children;
    }       
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>

};

export default PrivateRoute;