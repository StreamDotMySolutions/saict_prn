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
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';


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
    // useEffect(() => {
    //     //Runs only on the first render
    //     getCandidateData(candidateId, setCandidate)
    // }, [candidateId])

    useEffect(() => {
       
        // loading for 1st time
       getCandidateData(candidateId, setCandidate)
        
        const intervalId = setInterval(() => {
           getCandidateData(candidateId, setCandidate)
        }, 1000 * 5) // in milliseconds

    

        return () => clearInterval(intervalId)
        
    }, [candidateId])
    



    return (
    <>
        <Container>
   
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    <FontAwesomeIcon icon="fas fa-home" />
            </Breadcrumb.Item>

            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" + stateName }}>
                {stateName.toLocaleUpperCase()}
            </Breadcrumb.Item>

            
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" + stateName  + "/" + regionCode + "/" + regionName }}>
                {regionCode} {regionName.toUpperCase()}
            </Breadcrumb.Item>

            <Breadcrumb.Item active>Maklumat calon</Breadcrumb.Item>
        </Breadcrumb>
     

        
        { candidate ? 
            <>
                <Row>
                    <h2>{candidate.candidate_title?.toUpperCase()} {candidate.candidate_name?.toUpperCase()}</h2>
                </Row>

                <Row className='mt-3'>
                    
                    <Col md={3} className='mt-2'>
                        {candidate.url ? (
                            <Image src={candidate.url} style={{ width:'200px', border: '1px solid #DCDCDC'}} thumbnails />
                        ) : (
                            <Image src="/img/no-image.png" style={{ width:'200px', border: '1px solid #DCDCDC'}} thumbnails />
                        )}
                    </Col>


                    <Col md={5} className='mt-2'>
                        <ListItem item='Wakil' value={`${stateName?.toUpperCase()} - ${regionCode} - ${regionName?.toUpperCase()}`} />
                        <ListItem item='Parti' value={candidate.party_name?.toUpperCase()} />
                        <ListItem item='Calon' value={candidate.party_coalition?.toUpperCase()} />
                    </Col>
                </Row>
                
                <Row>

                </Row>
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
    //console.log(`get candidate from server - ${candidateId}`)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-nominations/${candidateId}/show-candidate-data`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        //console.log(json.data.data)
        setCandidate(json.data.data)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default Candidate