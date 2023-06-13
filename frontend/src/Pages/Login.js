import React from 'react'

const Login = () => {

    // set system variables
    const [message, setMessage] = React.useState('default message'); // system message

    // 1. add event listenr
    // 2. user click submit
    function handleSubmit(event){
        event.preventDefault()
        console.log('form submit')
        setMessage('form submitted')

        // use fetch to send
        // http post to /api/test
        // retrieve the returned
        // message and display
        // back at dom id = message

        const url = 'http://localhost:8000/api/test'
        const options = {
            method: 'post'
        }

        fetch(url,options)
        .then(response => {
            console.log(response.status)

            // response.ok status 200-299
            if(response.ok) {
                console.log('response is ok')
                return response.json()
            }
        })
        .then(json => {
            console.log(json)
            setMessage(json.message)
        })
        .catch( error=>{
            console.log(error.message)
        })

    }


    return (
        <>
            <h1>Login</h1>
            <h2>Message from server : <span id="message">{message}</span></h2>
            <form onSubmit={handleSubmit}> 
                <label>E-mail</label>
                <input type='text' name='email' id='email 'placeholder='Your email' required />
                <br />
                <span id='email_error' style={{ color:'red' }}>validation error for email</span>

                <br />
                <br />

                <label>Password</label>
                <input type='password' name='password' id='password 'placeholder='Your password' required />
                <br />
                <span id='password_error' style={{ color:'red' }}>validation error for password</span>

                <input id='submit' type='submit' value='submit' />
            </form>
        </>
    )
} 

export default Login
