import React from 'react'

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <form>
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
