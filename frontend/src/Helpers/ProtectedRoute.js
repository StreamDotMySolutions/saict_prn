import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { useStore } from "./Store"

const ProtectedRoute = () => {

    const isLoggedIn = useStore(state => state.isLoggedIn) // using zustand

    if(!isLoggedIn){
        return <Navigate to='/sign-in' replace />
    }

    return <Outlet />
}
export default ProtectedRoute