import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { BreadCrumb } from '../../components/BreadCrumb'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useProfileStore from './utils/Store'
import FetchData from './utils/FetchData'
import avatar from './img/avatar.webp'
import ClearStore from './utils/ClearStore'

const ProfileShow = () => {

    useEffect(() => {
        FetchData()
        ClearStore()
    },[useProfileStore])

    const profile = useProfileStore() // get state

    // hide after 2 seconds
    if(profile.message){
        setTimeout(() => {
            useProfileStore.setState({ message: null })
        }, 2000)
    }

    return (
    <>
    <BreadCrumb title='Profile'/>    
    <section>
        <div className="container py-5">
            { profile.message && 
                <div className="col-lg">
                    <div className="alert alert-warning  py-2" role="alert">
                        <FontAwesomeIcon icon="fas fa-triangle-exclamation" /> { profile.message }
                    </div>
                </div>
            }

            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <img src={ profile.avatar ? profile.avatar : avatar } alt="avatar"
                            className="rounded-circle img-fluid" style={{ 'width': '150px' }} />
                            <h5 className="my-3">{profile?.name}</h5>
                            <p className="text-muted mb-1">{profile.email}</p>
                            <p className="text-muted mb-4">{profile.created_at}</p>
                            <div className="d-flex justify-content-center mb-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-header text-white" style={{ 'backgroundColor' : '#999'}}>
                            <h4>Profile</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-2">
                                    <p className="mb-0">Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0"><strong>{profile.name}</strong></p>
                                </div>
                                </div>
                                <hr />
                                <div className="row">
                                <div className="col-sm-2">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0"><strong>{profile.email}</strong></p>
                                </div>
                                </div>

                                <hr />
                                <div className="row">
                                <div className="col-sm-2">
                                    <p className="mb-0">Created At</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0"><strong>{profile.created_at}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <Link to='/profile/edit'>
                            <button className='btn btn-primary'><FontAwesomeIcon icon="fas fa-edit" /> Edit</button>
                        </Link>    
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
} 

export default ProfileShow
