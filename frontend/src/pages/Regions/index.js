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
    const [ details, setDetails] = useState([])

    // useEffect(() => {
    //     //Runs only on the first render
    //     getCandidates(stateName, regionCode, setCandidates)
    // }, [regionName])

    // 3 seconds interval
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
        <img src={'/img/flags/' + stateName + '.png' }  className="img-fluid" width="60px" />
        )
    }
    const candidateDataUrl = '/' + stateName + '/' + regionCode + '/' + regionName + '/'

    const listItems = candidates.map((candidate) =>
        // <li key={candidate.candidate_entry} className="list-group-item">
        //     {candidate.candidate_entry}. &nbsp;
            
        //     {candidate.url ? (
        //         <img alt={candidate.candidate_name} style={{ width: '70px' }} className="rounded" src={candidate.url} />
        //         ) : (
        //         <img style={{ width: '70px' }} className="rounded" src="/img/no-image.png" />
        //     )}
            
        //     <Link alt={candidate.candidate_name}  to={candidateDataUrl + candidate.id + '/' + candidate.slug} className='text-decoration-none text-dark'>
        //         <strong>{candidate.candidate_title?.toUpperCase()} {candidate.candidate_name?.toUpperCase()}</strong>
        //     </Link>
        //     <span class="ms-3 badge bg-primary rounded-pill">123</span>
                             
        // </li>

        <li className="list-group-item d-flex justify-content-between align-items-center">
            {candidate.url ? (
                 <img alt={candidate.candidate_name} style={{ width: '70px' }} className="rounded" src={candidate.url} />
                 ) : (
                <img style={{ width: '70px' }} className="rounded" src="/img/no-image.png" />
            )}

            <Link alt={candidate.candidate_name}  to={candidateDataUrl + candidate.id + '/' + candidate.slug} className='text-decoration-none text-dark'>
                <strong>{candidate.candidate_title?.toUpperCase()} {candidate.candidate_name?.toUpperCase()}</strong>
            </Link>
            <div class="row">
                <span className="badge bg-success pill">rasmi - { candidate.official_count }</span>
                <span className="badge bg-danger pill">tidak rasmi - { candidate.unofficial_count }</span>
            </div>
     

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
                <div className="card-body">
                    <Row>
                        <Col sm={3}>
                            
                            <ul class="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                   Pengundi berdaftar
                                    <span className="badge bg-primary rounded-pill">{ details.registered_voters }</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Jumlah undi semasa
                                    <span className="badge bg-primary rounded-pill">{ details.votes }</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                   Peratusan
                                    <span className="badge bg-primary rounded-pill">{ details.percentage ?  details.percentage : 0 } %</span>
                                </li>
                            </ul>

                        </Col>
                
                    </Row>
                </div>
                <div className="card-body">
                    <Row>
                        <Col sm={6}>
                            <ul className="list-group list-group-flush">
                                {listItems}
                            </ul>
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
        console.log(json.data)
        setDetails(json.data.details)
        setCandidates(json.data.candidates)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default Regions