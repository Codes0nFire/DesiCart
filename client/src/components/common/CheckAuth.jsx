import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({isAuthenticated,user,children}) {

  
const location=useLocation()

// Case1 if the user is not authenticated and is trying to acces the shoping page or is trying to
// acces the admin page redirect that use back to login paage

if(!isAuthenticated && (location.pathname.includes("admin") || location.pathname.includes("shop")) ){

    return <Navigate to="/auth/login"/>

}

// Case 2 if the user is autheticated and then try to acces the login or register page 
// in that case we have two options 
//  if the user is admin send himn to /admin/dashboard
// otherwise send user to /shop/home

if(isAuthenticated && (location.pathname.includes("login")
 || location.pathname.includes("register"))){

    if(user?.role=="admin"){
        return <Navigate to="/admin/dashbaord" />
    }
    else{
        return <Navigate to="/shop/home" />
    }
}


// Case 3 if the user is not admin and try to acces admin routes
// in that case just redirect him to unauth page or acces denied page 

if(isAuthenticated && user.role!=="admin" && location.pathname.includes("admin")){
    return <Navigate to="/unauth" />
}


// Case 4 if the user is admin and then try to shop with admin account 
//  redirect the user to /admin/dashboard
if(isAuthenticated && user?.role==="admin" && location.pathname.includes("shop")){
    return <Navigate to="/admin/dashboard" />
}

// if non of the above route matches
return <>{children}</>

}

export default CheckAuth
