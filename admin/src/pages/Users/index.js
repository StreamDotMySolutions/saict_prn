import { React, useEffect,useState } from 'react'
import { BreadCrumb } from '../../components/BreadCrumb'
import { Pagination } from '../../components/Pagination'
import UserData from './UserData'
import LoadUsers from './LoadUsers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UsersIndex = () => {
    const [data, setData] = useState(null)
    const [page, setPage] = useState(process.env.REACT_APP_BACKEND_URL + '/users/index')
    const [sorting, setSorting] = useState(null)
    useEffect(() => LoadUsers({setData,page}),[page,sorting]) // load data from Laravel

    return (
        <>
            <BreadCrumb title='User Management'/>   
            
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>User Management</h1>
                </div>
                <div className='col-lg-6'>
                    <div className='float-end'>
                        <button className='btn btn-primary'><FontAwesomeIcon icon="fa-solid fa-plus " /> Create User</button>
                    </div>
                </div>
            </div>
            <hr />
            { data ?
                <> 
                    <UserData 
                        data={data} 
                        page={page} 
                        setPage={setPage} 
                        setSorting={setSorting}
                    />
                    
                    <Pagination 
                        data={data}
                        sorting={sorting}
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