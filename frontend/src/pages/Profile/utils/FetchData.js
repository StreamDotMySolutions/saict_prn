import useProfileStore from './Store'

const FetchData = () => {
    const token =  localStorage.getItem('token') // API token
    console.log('fetching...')
    const url =   process.env.REACT_APP_BACKEND_URL + '/profile/show'

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
        //console.log(json)
        useProfileStore.setState({ name: json.data.name }) // setter
        useProfileStore.setState({ email: json.data.email }) // setter
        useProfileStore.setState({ avatar: json.data.avatar }) // setter
        useProfileStore.setState({ created_at: json.data.created_at }) // setter
    })
    .catch( error =>{
        //console.log(error)
        if(error.status === 401){
            //console.log('401')
            localStorage.removeItem('token');
        }
    })

}
export default FetchData