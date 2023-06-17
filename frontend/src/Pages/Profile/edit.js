import React from 'react'
import { BreadCrumb } from '../../Components/BreadCrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { Avatar } from './avatar'

export const ProfileEdit = () => {

    // set system variables
    const [message, setMessage] = React.useState('') // system message
    const [data, setData] = React.useState([]) // data from server
    const [errors, setErrors] = React.useState([]) // validation errors
    const token =  localStorage.getItem('token') // API token
  
    // 👇️ fetch protected data from API server
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
               
                localStorage.removeItem('token');
            }
        })
    }

    // 👇️ fetchData running once
    React.useEffect(() => {
        fetchData()
    },[])

     // 👇️ to handle form submission
    const handleSubmit = (event) => {
        console.log('submit')
        setMessage('authentication with server ...')

        // clear the message & errors
        setMessage(null)
        setErrors(null)
 

        event.preventDefault()

        const url =   process.env.REACT_APP_BACKEND_URL + '/profile/store'
        const data = new FormData(event.target);
        const options = {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: data
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
            console.log(json)

        })
        .catch( error =>{

            // console.log(error)
            // field validations at 422
            // wrong username/password at 401
            // laravel validations error
            if(error.status === 422 || error.status === 401 ){
                error.json().then((json) => {                  
                    // validation errors
                    // errors set in Laravel JSON
                    if('errors' in json){
               
                        console.log(json.errors)
                        setErrors(json.errors)
           
                    }
                    // server message 
                    setMessage(json.message)
                })
            }
        })
    }

     // 👇️ JSX element ( HTML )
    return (
    <>
    <BreadCrumb title='Update Profile'/>    
    <form onSubmit={handleSubmit}>
    <section>
    <div className="container py-5">


        <div className="row">
        <div className="col-lg-4">
            <div className="card mb-4">
            <div className="card-body text-center">
                <Avatar />
                <h5 className="my-3">{data?.name}</h5>
                <p className="text-muted mb-1">{data?.email}</p>
                <p className="text-muted mb-4">{data?.created_at}</p>
                <div className="d-flex justify-content-center mb-2">
                </div>
            </div>
            </div>
      
        </div>
  
        <div className="col-lg-8">
            <div className="card mb-4">
                <div className="card-body bg-light">

               
                    <div className="row">

                        <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                            <input 
                                className="form-control" 
                                type="text" 
                                name="name" 
                                value={data?.name}
        
                            />
                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                            <input className="form-control" type="text" name="email" value={data?.email} />
                        </div>
                    </div>
                </div>
            </div>

      
            
            <div className="row">

                <div className="col">
                    <button type="submit" className='btn btn-primary'><FontAwesomeIcon icon="fas fa-save" /> Save</button>
                    &nbsp;
                    <Link to='/profile'>
                    <button className='btn btn-danger'><FontAwesomeIcon icon="fa fa-times" /> Cancel</button>
                    </Link>
                </div>

                
           
            </div>
      </div>
      
    </div>
   
    </div>

    </section>
    </form>
    </>
    )
} 

export default ProfileEdit
