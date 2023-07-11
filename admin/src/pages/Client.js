import React from 'react'

const Client = () => {

    // set system variables
    const [message, setMessage] = React.useState('default message'); // system message
    const [clients, setClients] = React.useState([]); // clients array

    function fetchData(){
        const url = 'http://localhost:8000/api/clients'
        const options = {
            method: 'get'
        }

        fetch(url,options)
            .then(response => {

                // response.ok status 200-299
                if(response.ok) {
                    console.log('response is ok')
                    return response.json()
                } 
                return Promise.reject(response); // reject the promise
            })
            .then(json => {
                console.log(json)
                setMessage(json.message)
                setClients(json.clients)
                console.log(clients)
            })
            .catch( error =>{
    
                // if status code 422
                // laravel validations error
                if(error.status === 422){
                    console.log(error.status)
                    error.json().then((json) => {
                        console.log(json.message);
                        setMessage(json.message)
                    })
                } else {
                    setMessage(`Error ${error.status} - ${error.statusText}`)
                }

            })
    } // fetchData()

    // getdata when page load
    React.useEffect(() => {
        fetchData()
    },[])

    const listItems = clients?.map((client) =>
                <li key={client.id}>{client.id} - {client.name}</li>
            );

    const selectOptions = clients?.map((client) =>
                <option key={client.id} value={client.id}>{client.name}</option>
            );


    return (
        <>
            <h1>Client</h1>
            <h2>Message from server : <span id="message">{message}</span></h2>

            <hr />
         
            <ol>
                {listItems}
            </ol>

            <select name="client_id">
                {selectOptions}
            </select>

        </>
    )
} 

export default Client
