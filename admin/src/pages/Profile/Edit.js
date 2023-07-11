import { useEffect } from 'react'
import { BreadCrumb } from '../../components/BreadCrumb'
import { Avatar } from './Avatar'
import FetchData from './utils/FetchData'
import useProfileStore from './utils/Store'
import FormLayout from './FormLayout'


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

                            <FormLayout />

                        </div>
                    </div>
               
            </div>
        </section>
    </>
    )
} 
export default ProfileEdit
