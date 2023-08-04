import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
import {
    useParams, useSearchParams
  } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
//import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import RegionDetails from './components/RegionDetail';
import Candidates from './components/Candidates';

/**
 * @returns HTML
 */
const Regions = () => {
    const { stateName } = useParams()
    const { regionCode } = useParams()
    const { regionName} = useParams()
    const [ candidates, setCandidates] = useState([])
    const [ details, setDetails] = useState([])

    useEffect(() => {
       
        // loading for 1st time
       getData(stateName, regionCode, setCandidates, setDetails)
        
        const intervalId = setInterval(() => {
           getData(stateName, regionCode, setCandidates, setDetails)
        }, 1000 * 5) // in milliseconds

        return () => clearInterval(intervalId)
        
    }, [regionName])

    const flag = (stateName) => {
        return (
            <img alt={stateName}  src={'/img/flags/' + stateName + '.png' }  className="img-fluid" width="60px" />
        )
    }
    const candidateDataUrl = '/' + stateName + '/' + regionCode + '/' + regionName + '/'

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
                <div className="card-body">
                    <RegionDetails details={details} />
                </div>
                <div className="card-body">
                    <Row>
                        <Col sm={6}>
                            <div class="container mt-4">
                                <Candidates 
                                    candidates={candidates} 
                                    candidateDataUrl={candidateDataUrl}
                                />
                            </div>  
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </>
    )
}



/**
 * Get regions under given stateName
 */
function getData(stateName,regionCode,setCandidates, setDetails){
    //console.log(`get candidates from server - ${stateName}-${regionCode}`)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-variables/states/${stateName}/code/${regionCode}/get-candidates-data`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        //console.log(json.data)
        setDetails(json.data.details)
        setCandidates(json.data.candidates)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default Regions