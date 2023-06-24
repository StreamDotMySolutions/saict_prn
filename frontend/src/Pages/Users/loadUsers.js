import axios from '../../Libs/axios'
const LoadUsers = (props) => {

    // destructure the props passed to the component
    //const { data, setData } = props;
    
    // load users 
    // api/users/index
    console.log('load users from API server')

    // submit as POST to API
    axios({
        url:  process.env.REACT_APP_BACKEND_URL + '/users/index',   
        method: 'get',
    })
    .then( function(response){
        //console.log(response)
        props.setData(response.data.users)
    })
    .catch ( function(error){
        console.log(error.response.data)
    })
}
export default LoadUsers