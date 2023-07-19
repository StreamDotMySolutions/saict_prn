import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
import {
    useParams, useSearchParams
  } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/esm/Container';

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
        <li  key={candidate.candidate_entry} className="list-group-item">
            {candidate.candidate_entry}. &nbsp;
            <Link to={candidateDataUrl + candidate.id + '/' + candidate.slug}>
                {candidate.candidate_title?.toUpperCase()} {candidate.candidate_name?.toUpperCase()}
            </Link>
        </li>
    );

    return (
    <>
        <Container>
      
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    <FontAwesomeIcon icon="fas fa-home" />
                </Breadcrumb.Item>

                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" + stateName }}>
                    {stateName.toUpperCase()}
                </Breadcrumb.Item>

                <Breadcrumb.Item active>{regionCode} {regionName.toUpperCase()}</Breadcrumb.Item>
            </Breadcrumb>
      
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{stateName.toUpperCase()} - {regionCode} {regionName.toUpperCase()}</h5>
                    <p class="card-text">Penyandang ialah ...</p>
                </div>
                <ul class="list-group list-group-flush">
                    {listItems}
                </ul>
            </div>

        </Container>
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