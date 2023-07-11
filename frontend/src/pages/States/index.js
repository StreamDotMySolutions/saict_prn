import { React, useState , useEffect} from 'react'
import axios from '../../libs/axios'
import {
    useParams, useSearchParams
  } from "react-router-dom";

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
        <li key={region.name}>{region.name}</li>
    );

    return (
    <>
        <h1>States : {stateName}</h1>
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
    console.log(`get region from server - ${stateName}`)
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