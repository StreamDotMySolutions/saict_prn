import React from 'react'
import { useStore } from "../Helpers/Store"
import Cookies from 'js-cookie'
import axios from '../Libs/axios'
import env from "react-dotenv";
import { BreadCrumb } from '../Components/BreadCrumb';

const MyAccount = () => {

    // set system variables
    const [message, setMessage] = React.useState('default message') // system message
    const [data, setData] = React.useState([]) // dat from server
    const [errors, setErrors] = React.useState([]) // validation errors
    const token =  localStorage.getItem('token') // API token
    const setIsLoggedIn = useStore((state) => state.setIsLoggedIn) // set state

  
    function fetchData(){
       
        const url =   process.env.REACT_APP_BACKEND_URL + '/api/user'

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
            <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ 'color': '#333333' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                </li>
        
                </ul>
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
  </div>
</section>
        </>
    )
} 

export default MyAccount
