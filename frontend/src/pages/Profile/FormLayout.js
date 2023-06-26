import { React } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import FormFields from './FormFields'

const FormLayout = () => {
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
                    <button type="submit" className='btn btn-primary'><FontAwesomeIcon icon="fas fa-save" /> Save</button>
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