import React from 'react'
import { BreadCrumb } from '../../Components/BreadCrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { Avatar } from './avatar'

export const ProfileEdit = () => {

    // set system variables
    const [message, setMessage] = React.useState('') // system message
    const [data, setData] = React.useState([]) // data from server
    const [errors, setErrors] = React.useState([]) // validation errors
    const token =  localStorage.getItem('token') // API token
    const navigate = useNavigate() // useNavigate

    // form field
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    // 👇️ fetch protected data from API server
    function fetchData(){
        console.log('fetching...')
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

            // set formdata with JSON object
            setForm({
                ...form,
                name: json.name,
                email: json.email,
            });
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
            navigate('/profile');

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
    <React.Fragment>
        <BreadCrumb title='Update Profile'/>    
        <section>
            <div className="container py-5">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* FORM - Avatar */}
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <Avatar />
                                    <h5 className="my-3">{form?.name}</h5>
                                    <p className="text-muted mb-1">{form?.email}</p>
                                    <p className="text-muted mb-4">{form?.created_at}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    </div>
                                </div>
                            </div>
                    
                        </div>
            
                        {/* FORM - Profile */}
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-header text-white" style={{ 'background-color' : '#999'}}>
                                    <h4>Profile</h4>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row">

                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input 
                                                onChange={e => {
                                                    setForm({
                                                        ...form,
                                                        name: e.target.value
                                                    });
                                                }}
                                                
                                                className="form-control" 
                                                type="text" 
                                                name="name" 
                                                value={ form.name }
                                            />
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input 
                                                onChange={e => {
                                                    setForm({
                                                        ...form,
                                                        email: e.target.value
                                                    });
                                                }}
                                                className="form-control" 
                                                type="text" 
                                                name="email" 
                                                value={ form.email}
                                                />
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
                </form>
            </div>
        </section>
    </React.Fragment>
    )
} 
export default ProfileEdit
