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
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

/**
 * @returns HTML
 */
const Regions = () => {
    const { stateName } = useParams()
    const { regionCode } = useParams()
    const { regionName} = useParams()
    const [ candidates, setCandidates] = useState([])

    // useEffect(() => {
    //     //Runs only on the first render
    //     getCandidates(stateName, regionCode, setCandidates)
    // }, [regionName])

    // 3 seconds interval
    useEffect(() => {
       
        // loading for 1st time
       getCandidates(stateName, regionCode, setCandidates)
        
        const intervalId = setInterval(() => {
           getCandidates(stateName, regionCode, setCandidates)
        }, 1000 * 5) // in milliseconds

        return () => clearInterval(intervalId)
        
    }, [regionName])

    const flag = (stateName) => {
        return (
        <img src={'/img/flags/' + stateName + '.png' }  className="img-fluid" width="60px" />
        )
    }
    const candidateDataUrl = '/' + stateName + '/' + regionCode + '/' + regionName + '/'

    const listItems = candidates.map((candidate) =>
        <li key={candidate.candidate_entry} className="list-group-item">
            {candidate.candidate_entry}. &nbsp;
            
            {candidate.url ? (
                <img style={{ width: '70px' }} className="rounded" src={candidate.url} />
                ) : (
                <img style={{ width: '70px' }} className="rounded" src="/img/no-image.png" />
            )}
            
            <Link to={candidateDataUrl + candidate.id + '/' + candidate.slug} className='text-decoration-none text-dark'>
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
      
            <div className="card">
                <div className="card-body">
                    <Row>
                        <Col sm={1}>
                            {flag(stateName)}
                        </Col>
                        <Col md={7}>
                            <h5 className="card-title">{stateName.toUpperCase()} - {regionCode} {regionName.toUpperCase()}</h5>
                        </Col>
                    </Row>
                </div>
                <ul className="list-group list-group-flush">
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