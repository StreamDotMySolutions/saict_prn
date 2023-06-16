import React from 'react'
import { useStore } from "../Helpers/Store";

const MyAccount = () => {

    // set system variables
    const [message, setMessage] = React.useState('default message') // system message
    const [data, setData] = React.useState([]) // dat from server
    const [errors, setErrors] = React.useState([]) // validation errors
    const token =  localStorage.getItem('token') // API token
    const setIsLoggedIn = useStore((state) => state.setIsLoggedIn) // set state

    function fetchData(){
       
        const url = 'http://localhost:8000/api/user'

        const options = {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        fetch(url,options)
        .then(response => {
            //console.log(response)
            // response.ok status 200-299
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
            <h1>MyAccount</h1>
            <ul  style={{ listStyle:'none' }} >
                <li>ID: {data?.id}</li>
                <li>Email: {data?.email}</li>
                <li>Created: {data?.created_at}</li>
            </ul>
        </>
    )
} 

export default MyAccount
