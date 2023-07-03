import React from 'react'
import useProfileStore from './utils/Store'
const FormFields = () => {
    const profile = useProfileStore() // get state
    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                    <input 
                        className={ profile.error_name ? 'form-control is-invalid' : 'form-control' } 
                        type="text" 
                        name="name" 
                        value={profile.name }
                        onChange={(event) =>
                            useProfileStore.setState({ name: event.target.value }) // name
                        }
                    />
                    <div className="invalid-feedback">
                        <span>{ profile.error_name ?  profile.error_name : null }</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                    <input 
                        className={ profile.error_email ? 'form-control is-invalid' : 'form-control' } 
                        type="text" 
                        name="email" 
                        value={profile.email }
                        onChange={(event) =>
                            useProfileStore.setState({ email: event.target.value }) // email
                        }
                        />
                    <div className="invalid-feedback">
                        <span>{ profile.error_email ?  profile.error_email : null }</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Password</p>
                </div>
                <div className="col-sm-9">
                    <input 
                        className={ profile.error_newpassword ? 'form-control is-invalid' : 'form-control' } 
                        type="password" 
                        name="newpassword" 
                        onChange={(event) =>
                            useProfileStore.setState({ newpassword: event.target.value }) // name
                        }
                    />
                    <div className="invalid-feedback">
                        <span>{ profile.error_newpassword ?  profile.error_newpassword : null }</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <p className="mb-0">Confirm Password</p>
                </div>
                <div className="col-sm-9">
                    <input 
                        className={ profile.error_newpassword ? 'form-control is-invalid' : 'form-control' } 
                        type="password" 
                        name="newpassword_confirmation" 
                        onChange={(event) =>
                            useProfileStore.setState({ newpassword_confirmation: event.target.value }) // name
                        }
                    />
                </div>
            </div>
        </>
    )
}
export default FormFields