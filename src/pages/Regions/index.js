import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
import {
    useParams, useSearchParams
  } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * @returns HTML
 */
const Regions = () => {
    const { stateName } = useParams()
    const { regionCode } = useParams()
    const { regionName} = useParams()
    const [ candidates, setCandidates] = useState([])

    useEffect(() => {
        //Runs only on the first render
        getCandidates(stateName, regionCode, setCandidates)
      }, [regionName])

    const candidateDataUrl = '/' + stateName + '/' + regionCode + '/' + regionName + '/'
    const listItems = candidates.map((candidate) =>
        
    
        <tr key={candidate.candidate_entry}>
            <td>{candidate.candidate_entry}</td>
            <td>
            <Link to={candidateDataUrl + candidate.id + '/' + candidate.slug}>
                {candidate.candidate_title?.toUpperCase()} {candidate.candidate_name?.toUpperCase()}
            </Link>
            </td>
        </tr>
   
     
       
    );

    return (
    <>
        <small>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                <FontAwesomeIcon icon="fas fa-home" />
            </Breadcrumb.Item>

            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" + stateName }}>
                {stateName.toUpperCase()}
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{regionCode} {regionName.toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
        </small>

        <h2>{stateName.toUpperCase()} - {regionCode} {regionName.toUpperCase()}</h2>

       
        { candidates.length > 0 ? 
            <table className='w-100 table table-striped'>
                <thead>
                    <th style={{ width:'5px'}}>ID</th>
                    <th>NAMA</th>
                </thead>

                <tbody>
                    {listItems}
                </tbody>
            </table>
            : <p className='text-muted'>Belum ada pencalonan</p>
         }
    </>
    )
}



/**
 * Get regions under given stateName
 */
function getCandidates(stateName,regionCode,setCandidates){
    //console.log(`get candidates from server - ${stateName}-${regionCode}`)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-variables/states/${stateName}/code/${regionCode}/get-candidates-data`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        //console.log(json.data.data)
        setCandidates(json.data.data)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default Regions