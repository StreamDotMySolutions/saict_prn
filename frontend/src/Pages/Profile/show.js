import React from 'react'
import { Link } from "react-router-dom"
import { useStore } from "../../Helpers/Store"
import { BreadCrumb } from '../../Components/BreadCrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProfileShow = () => {

    // set system variables
    const [message, setMessage] = React.useState('default message') // system message
    const [data, setData] = React.useState([]) // dat from server
    const [errors, setErrors] = React.useState([]) // validation errors
    const token =  localStorage.getItem('token') // API token
    const setIsLoggedIn = useStore((state) => state.setIsLoggedIn) // set state

  
    function fetchData(){
       
        const url =   process.env.REACT_APP_BACKEND_URL + '/user'

        const options = {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        fetch(url,options)
        .then(response => {
            if(response.ok) {
                return response.json()
            } 
            return Promise.reject(response); // reject the promise
        })
        .then(json => {
            // authentication success
            setData(json)
        })
        .catch( error =>{
            //console.log(error)
            if(error.status === 401){
                //console.log('401')
                setIsLoggedIn(false)
                localStorage.removeItem('token');
            }
        })
    }

    // getdata when page load
    React.useEffect(() => {
        fetchData()
    },[])


    return (
    <>
    <BreadCrumb title='Profile'/>    
    <section>
    <div className="container py-5">


        <div className="row">
        <div className="col-lg-4">
            <div className="card mb-4">
            <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                className="rounded-circle img-fluid" style={{ 'width': '150px' }} />
                <h5 className="my-3">{data?.name}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                </div>
            </div>
            </div>
      
        </div>
        <div className="col-lg-8">
            <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{data?.name}</p>
                </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">{data?.email}</p>
                </div>
                </div>

                <hr />
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
           
            </div>
      </div>
      
    </div>
    <Link to='/profile/edit'>
        <button className='btn btn-primary'><FontAwesomeIcon icon="fas fa-edit" /> Edit</button>
    </Link>    
  </div>

</section>
        </>
    )
} 

export default ProfileShow
