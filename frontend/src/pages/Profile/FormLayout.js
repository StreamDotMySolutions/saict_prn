import { React } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import FormFields from './FormFields'
import useProfileStore from './utils/Store'
import axios from '../../libs/axios'

const FormLayout = () => {
    const profile = useProfileStore() // get state
    const navigate = useNavigate() // useNavigate

    const handleSubmit = (e) => {
        e.preventDefault()

        useProfileStore.setState({ error_name: null }) 
        useProfileStore.setState({ error_email: null }) 

        const formData = new FormData()
        formData.append('name', profile.name) // name
        formData.append('email', profile.email) // email

        // submit as POST to API
        axios({
            url:  process.env.REACT_APP_BACKEND_URL + '/profile/store',   
            method: 'post',
            data: formData,
        })
        .then( function(json){
            //console.log(json)
            navigate('/profile');
        })
        .catch ( function(error){
            if( error.response.status === 422 ){
        
                const validation =  error.response.data.errors
                console.log(validation.name)
                console.log(validation.email)
                // set validation error
                useProfileStore.setState({ error_name: validation.name }) 
                useProfileStore.setState({ error_email: validation.email })
            }
        })
    }
    
    return(
       <>
        <form>
            <div className="card mb-4">
                <div className="card-header text-white" style={{ 'backgroundColor' : '#999'}}>
                    <h4>Update Profile</h4>
                </div>
                <div className="card-body bg-light">
                    <FormFields />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button 
                        onClick={handleSubmit}
                        type="button" 
                        className='btn btn-primary'
                        ><FontAwesomeIcon icon="fas fa-save" /> Save</button>
                    &nbsp;
                    <Link to='/profile'>
                        <button className='btn btn-danger'><FontAwesomeIcon icon="fa fa-times" /> Cancel</button>
                    </Link>
                </div>
            </div>
        </form>
        </> 
    )
}
export default FormLayout