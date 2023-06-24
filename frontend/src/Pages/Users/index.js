import { React, useEffect,useState } from 'react'
import { Link } from "react-router-dom"
import { useStore } from "../../Helpers/Store"
import { BreadCrumb } from '../../Components/BreadCrumb'
import { Pagination } from '../../Components/Pagination'
import UserData from './UserData'
import LoadUsers from './LoadUsers'

const UsersIndex = () => {
    const [data, setData] = useState(null)

    useEffect(() => LoadUsers({setData}),[])

    return (
        <>
            <BreadCrumb title='User Management'/>   
            <h1>User Management</h1>
            <hr />
            { ( data !== undefined && data !== null ) ?
                <> 
                <UserData data={data} />
                <Pagination data={data} />
                </>
                :
                <p>loading ...</p>
            }
        </>
    )
}
export default  UsersIndex