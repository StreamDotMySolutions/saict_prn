import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
import { useParams } from "react-router-dom"
import { NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/**
 * @returns HTML
 */
const States = () => {
    const { stateName } = useParams()
    const [regions, setRegions] = useState([])
    

    useEffect(() => {
        //Runs only on the first render
        getRegions(stateName, setRegions)
      }, [stateName])

    const listItems = regions.map((region) =>
        <li key={region.name}><strong>{region.code}</strong> 
            {/* <Nav.Link  className="" as={NavLink} to="/">{region.name}</Nav.Link> */}
            &nbsp;
            <NavLink 
                className="" 
                to={ region.code + '/' + region.slug }
            >{region.name}</NavLink>
            &nbsp;
            { region.candidates != 0 && 
                <small><i><strong>{region.candidates}</strong> calon</i></small> 
            }
        </li>
    );

    return (
    <>
        <small>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                <FontAwesomeIcon icon="fas fa-home" />
            </Breadcrumb.Item>

            <Breadcrumb.Item active>{stateName.toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
        </small>
        
        <h1>{stateName.toUpperCase()}</h1>
        <ol>
            {listItems}
        </ol>
    </>
    )
}

/**
 * Get regions under given stateName
 */
function getRegions(stateName, setRegions){
    //console.log(`get region from server - ${stateName}`)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-variables/states/${stateName}/get-region-data`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        //console.log(json.data.data)
        setRegions(json.data.data)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default States