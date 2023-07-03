import { React } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import FormFields from './FormFields'
import useProfileStore from './utils/Store'
import clearStore from './utils/ClearStore'
import axios from '../../libs/axios'

const FormLayout = () => {
    const profile = useProfileStore() // get state
    const navigate = useNavigate() // useNavigate

    const handleSubmit = (e) => {
        e.preventDefault()
        clearStore() // clear validation error store

        // send formdata using FormData()
        const formData = new FormData()
        formData.append('name', profile.name) // name
        formData.append('email', profile.email) // email
        profile.newpassword && formData.append('newpassword', profile.newpassword) // password
        profile.newpassword && formData.append('newpassword_confirmation', profile.newpassword_confirmation) // confirm password

        // submit as POST to API
        axios({
            url:  process.env.REACT_APP_BACKEND_URL + '/profile/store',   
            method: 'post',
            data: formData,
        })
        .then( function(json){
            //console.log(json)
            useProfileStore.setState({ message: 'Profile updated' }) 
            navigate('/profile');
        })
        .catch ( function(error){
            if( error.response.status === 422 ){
                
                // validation from laravel
                const validation =  error.response.data.errors
                validation.name && useProfileStore.setState({ error_name: validation.name }) 
                validation.email && useProfileStore.setState({ error_email: validation.email })
                validation.newpassword && useProfileStore.setState({ error_newpassword: validation.newpassword })
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