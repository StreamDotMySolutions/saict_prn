import { useEffect } from 'react'
import { BreadCrumb } from '../../Components/BreadCrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { Avatar } from './avatar'
import FetchData from './utils/FetchData';
import Form from './form'
import useProfileStore from './utils/store'

export const ProfileEdit = () => {

    useEffect(() => {
        FetchData()
    },[useProfileStore])

    const profile = useProfileStore() // get state
    // const profile = useContentsStore.getState()

    // JSX element ( HTML )
    return (
    <>
        <BreadCrumb title='Update Profile'/>    
        <section>
            <div className="container py-5">
                
                    <div className="row">
                        {/* FORM - Avatar */}
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <Avatar />
                                    <h5 className="my-3">{ profile.name }</h5>
                                    <p className="text-muted mb-1">{ profile.email }</p>
                                    <p className="text-muted mb-4">{ profile.created_at }</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    </div>
                                </div>
                            </div>
                    
                        </div>
            
                        {/* FORM - Profile */}
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-header text-white" style={{ 'backgroundColor' : '#999'}}>
                                    <h4>Update Profile</h4>
                                </div>
                                <div className="card-body bg-light">
                                    <Form />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <button type="submit" className='btn btn-primary'><FontAwesomeIcon icon="fas fa-save" /> Save</button>
                                    &nbsp;
                                    <Link to='/profile'>
                                    <button className='btn btn-danger'><FontAwesomeIcon icon="fa fa-times" /> Cancel</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </div>
        </section>
    </>
    )
} 
export default ProfileEdit
