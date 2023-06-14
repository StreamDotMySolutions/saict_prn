import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from "../Helpers/Store";


export function handleLogout({setIsLoggedIn}) {

    // set store isLoggedIn to false
    setIsLoggedIn(false)

    // tell the server to destroy the token
    const url = 'http://localhost:8000/api/logout'
    const options = {
        method: 'get',
    }

    fetch(url,options)
    .then(response => {
        // response.ok status 200-299
        if(response.ok) {
            return response.json()
        } 
        return Promise.reject(response); // reject the promise
    })
    .then(json => {

    })
    .catch( error =>{
        console.log(error)
    })

    // delete token from localstorage
    localStorage.removeItem('token');
  }
