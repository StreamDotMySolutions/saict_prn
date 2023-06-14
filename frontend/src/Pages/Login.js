import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from "../Helpers/Store";

const Login = () => {

    // set system variables
    const [message, setMessage] = React.useState('default message'); // system message
    const [errors, setErrors] = React.useState([]); // validation errors


    const isLoggedIn = useStore( (state) => state.isLoggedIn ) // get state
    const setIsLoggedIn = useStore((state) => state.setIsLoggedIn) // set state

    // 1. add event listenr
    // 2. user click submit
    function handleSubmit(event){

        // clear the message & errors
        setMessage(null)
        setErrors(null)

        event.preventDefault()
        setMessage('form submitted')

        // use fetch to send
        // http post to /api/test
        // retrieve the returned
        // message and display
        // back at dom id = message

        const url = 'http://localhost:8000/api/test'
        const data = new FormData(event.target);
        const options = {
            method: 'post',
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

            // authentication success
            setMessage(json.message)

            //save token to localstorage
            localStorage.setItem('token', json.token)

            // update the global store
            setIsLoggedIn(true)
        })
        .catch( error =>{

            //console.log(error)
            // field validations at 422
            // wrong username/password at 401
            // laravel validations error
            if(error.status === 422 || error.status === 401 ){
                error.json().then((json) => {                  
                    // validation errors
                    // errors set in Laravel JSON
                    if('errors' in json){
                        console.log(json)
                        setErrors(json.errors)
                    }
                    // server message 
                    setMessage(json.message)
                })
            }
        })
    }

    if (isLoggedIn === true) {
        return <Navigate to='/dashboard' replace />
    }



    return (
        <>
            <h1>Login</h1>
            <h3>Message from server : <span id="message" style={{ color:'green' }}>{message}</span></h3>
            <form onSubmit={handleSubmit}> 
                <label>E-mail</label>
                <input type='text' name='email' id='email 'placeholder='Your email'  />
                <br />
                <span id='email_error' style={{ color:'red' }}>{errors?.email}</span>

                <br />
                <br />

                <label>Password</label>
                <input type='password' name='password' id='password 'placeholder='Your password'/>
                <br />
                <span id='password_error' style={{ color:'red' }}>{errors?.password}</span>
                <br />
                <br />
                <input id='submit' type='submit' value='submit' />
            </form>
        </>
    )
} 

export default Login
