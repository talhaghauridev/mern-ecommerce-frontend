import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({ children: Children }) => {
    const auth = true;

    if (!auth) {
        return <Navigate to={"/login"} />
    }


    return <Children /> ? <Children /> : <Outlet />
}

export default ProtectRoute
