import React from 'react'
import { useNavigate } from "react-router-dom"
import useProfileStore from './utils/store'

const Form = () => {
    // set system variables
    const [message, setMessage] = React.useState('') // system message
    const [data, setData] = React.useState([]) // data from server
    const [errors, setErrors] = React.useState([]) // validation errors
    const token =  localStorage.getItem('token') // API token
    const navigate = useNavigate() // useNavigate

    const handleSubmit = (event) => {
        console.log('submit')
        setMessage('authentication with server ...')

        // clear the message & errors
        setMessage(null)
        setErrors(null)
 
        event.preventDefault()

        const url =   process.env.REACT_APP_BACKEND_URL + '/profile/avatar/store'
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

    return (
        <>
    
        <form onSubmit={handleSubmit}>
                <div className="row">

                    <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                        <input 
                 
                            className="form-control" 
                            type="text" 
                            name="name" 
                         
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
                  
                            className="form-control" 
                            type="text" 
                            name="email" 
                           
                            />
                    </div>
                </div>
            </form>
        </>
    )

}
export default Form