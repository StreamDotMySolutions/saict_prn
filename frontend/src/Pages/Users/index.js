import { React, useEffect,useState } from 'react'
import { Link } from "react-router-dom"
import { useStore } from "../../Helpers/Store"
import { BreadCrumb } from '../../Components/BreadCrumb'
import { Pagination } from '../../Components/Pagination'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from '../../Libs/axios'
import Data from './data'

const UsersIndex = () => {

    const [data, setData] = useState(null)

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
            //console.log(response)
            setData(response.data.users)
        })
        .catch ( function(error){
            console.log(error.response.data)
        })
    }

    // 👇️ fetchData running once
    useEffect(() => {
        loadUsers()
    },[])
    //console.log(data)

    return (
        <>
            <BreadCrumb title='User Management'/>   
            <h1>User Management</h1>
            <hr />
            { (data !== undefined && data !== null ) ?
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