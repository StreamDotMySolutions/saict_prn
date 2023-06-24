import { React, useEffect,useState } from 'react'
import { Link } from "react-router-dom"
import { useStore } from "../../Helpers/Store"
import { BreadCrumb } from '../../Components/BreadCrumb'
import { Pagination } from '../../Components/Pagination'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from '../../Libs/axios'
import Data from './data'

const UsersIndex = () => {

    function loadUsers(){
        // load users 
        // api/users/index
        console.log('load users from API server')

        // submit as POST to API
        axios({
            url:  process.env.REACT_APP_BACKEND_URL + '/users/index',   
            method: 'get',
        })
        .then( function(response){
            console.log(response)
        })
        .catch ( function(error){
            console.log(error.response.data)
        })
    }

    useEffect( loadUsers , [])


    return (
        <>
            <BreadCrumb title='User Management'/>   
            <h1>User Management</h1>
            <hr />
            <Pagination />
            <Data />
            <Pagination />
        </>
    )
}

export default  UsersIndex