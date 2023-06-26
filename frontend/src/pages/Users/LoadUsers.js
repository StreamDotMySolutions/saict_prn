import axios from '../../libs/axios'
const LoadUsers = (props) => {

    // load users 
    // api/users/index
    //console.log('load users from API server is')
    //console.log(props.page)

    // submit as POST to API
    axios({
       // url:  process.env.REACT_APP_BACKEND_URL + '/users/index',   
        url:  props.page, 
        method: 'get',
    })
    .then( function(response){
        console.log(response.data.data)
        //console.log(response.data.meta.links)
        props.setData(response.data)
    })
    .catch ( function(error){
        console.log(error.response.data)
    })
}
export default LoadUsers