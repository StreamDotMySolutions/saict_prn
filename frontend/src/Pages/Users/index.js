import { React, useEffect,useState } from 'react'
import { Link } from "react-router-dom"
import { useStore } from "../../Helpers/Store"
import { BreadCrumb } from '../../Components/BreadCrumb'
import { Pagination } from '../../Components/Pagination'
import Data from './data'
import loadUsers from './loadUsers'

const UsersIndex = () => {
    const [data, setData] = useState(null)

    useEffect(() => loadUsers({setData}),[])

    return (
        <>
            <BreadCrumb title='User Management'/>   
            <h1>User Management</h1>
            <hr />
            { ( data !== undefined && data !== null ) ?
                <> 
                <Data />
                <Pagination data={data} />
                </>
                :
                <p>loading ...</p>
            }
        </>
    )
}
export default  UsersIndex