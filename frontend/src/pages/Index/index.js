import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import States from './components/States'
import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
//import Card from 'react-bootstrap/Card';
//import { NavLink } from 'react-router-dom'
//import Nav from 'react-bootstrap/Nav';

const Index = () => {

    const [ states, setStates ] = useState([])

    useEffect(() => {
        // loading for 1st time
       getData(setStates)
        const intervalId = setInterval(() => {
           getData(setStates)
        }, 1000 * 5) // in milliseconds

        return () => clearInterval(intervalId)
        
    }, [states])

    const listItem = states.map(state => 
        <Col key={state.id}>
            <States stateName={state.name} />
        </Col>
        )

    return (
        <>
        <Container className="mt-3 mb-3">
          <Row>{listItem.slice(0, 2)}</Row>
          <Row>{listItem.slice(2, 4)}</Row>
          <Row>{listItem.slice(4, 6)}</Row>
        </Container>
      </>
    )
} 

/**
 * Get regions under given stateName
 */
function getData(setStates){
    //console.log(`get candidates from server - ${stateName}-${regionCode}`)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/dashboard/prn15/states`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        //console.log(json.data)
        setStates(json.data.states)

    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}


export default Index