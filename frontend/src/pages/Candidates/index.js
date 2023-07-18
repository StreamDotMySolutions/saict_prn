import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
import {
    useParams, useSearchParams
  } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListItem from './ListItem';
import Container from 'react-bootstrap/esm/Container';

const Candidate = () => {
    const { stateName } = useParams()
    const { regionCode } = useParams()
    const { regionName} = useParams()

    const { candidateId } = useParams()
    const [ candidate, setCandidate] = useState(null)

    /**
     * To fetch data from API
     * @param Int candidateId
     */
    useEffect(() => {
        //Runs only on the first render
        getCandidateData(candidateId, setCandidate)
    }, [candidateId])



    return (
    <>
        <Container>
        <small>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" + stateName  + "/" + regionCode + "/" + regionName }}>
                <FontAwesomeIcon icon="fas fa-arrow-circle-left" />
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{regionCode} {regionName.toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
        </small>

        
        { candidate ? 
            <>
                <h2>{candidate.candidate_title} {candidate.candidate_name}</h2>
                <br />
                <div className='col'>
                    <ListItem item='Gelaran' value={candidate.candidate_title} />
                    <ListItem item='Nama' value={candidate.candidate_name} />
                    <ListItem item='Party' value={candidate.party_name} />
                    <ListItem item='Jawatan dalam parti' value={candidate.candidate_party_job} />
                    <ListItem item='Gabungan' value={candidate.party_coalition} />
                    <ListItem item='Status Perkahwinan' value={candidate.candidate_marital_status} />
                    <ListItem item='Pendidikan' value={candidate.candidate_education} />
                    <ListItem item='Pekerjaan' value={candidate.candidate_career} />
                </div>
            </>
            : <p className='text-muted'>Belum ada pencalonan</p>
        }
        </Container>
    </>
    )
}




/**
 * 
 * Get detailed Candidate data from API
 * and return as JSON
 * 
 * @param Int candidateId
 * @return JSON 
 * 
 */
function getCandidateData(candidateId, setCandidate){
    console.log(`get candidate from server - ${candidateId}`)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-nominations/${candidateId}/show-candidate-data`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        console.log(json.data.data)
        setCandidate(json.data.data)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default Candidate