import { React, useEffect,useState } from 'react'
import { BreadCrumb } from '../../Components/BreadCrumb'
import { Pagination } from '../../Components/Pagination'
import UserData from './UserData'
import LoadUsers from './LoadUsers'

const UsersIndex = () => {
    const [data, setData] = useState(null)
    const [page, setPage] = useState(process.env.REACT_APP_BACKEND_URL + '/users/index')
 
    useEffect(() => LoadUsers({setData,page}),[page])

    return (
        <>
            <BreadCrumb title='User Management'/>   
            <h1>User Management</h1>
            <hr />
            { ( data !== undefined && data !== null ) ?
                <> 
                    <UserData 
                        data={data} 
                    />
                    
                    <Pagination 
                        data={data}
                        setPage={setPage} 
                    />
                </>
                :
                <p>loading ...</p>
            }
        </>
    )
}
export default  UsersIndex