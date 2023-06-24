import React from 'react'
import { Link } from "react-router-dom"
import { useStore } from "../../Helpers/Store"
import { BreadCrumb } from '../../Components/BreadCrumb'
import { Pagination } from '../../Components/Pagination'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Data from './data'

const UsersIndex = () => {
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