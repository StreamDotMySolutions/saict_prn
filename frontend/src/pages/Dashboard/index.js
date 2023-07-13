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
const Dashboard = () => {

    const [latest,setLatest] = useState([])

    useEffect(() => {
        //Runs only on the first render
        getLatest(setLatest)
      }, [])

    const listItems = latest.map((item) =>
      
    <tr key={item.id}>
         <td>{item.region_code}</td>
         <td>{item.region_name}</td>
         <td className='text-center'>{item.gsheet_email}</td>
         <td className='text-center'>{item.when}</td>
    </tr>
       
    );

    return (
    <>
        <small>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                <FontAwesomeIcon icon="fas fa-home" />
            </Breadcrumb.Item>

            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        </small>

        <h2>Dashboard</h2>

       
        { latest.length > 0 ? 
            <table className='w-50 table table-striped'>
                <thead>
                    <th>KOD</th>
                    <th>KAWASAN</th>
                    <th className='text-center'>KEYER</th>
                    <th className='text-center'>TARIKH</th>
                </thead>

                <tbody>
                    {listItems}
                </tbody>
            </table>
            : <p className='text-muted'>Tiada data</p>
         }
    </>
    )
}



/**
 * Get latest data PrnNomination
 */
function getLatest(setLatest){

    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-nominations/latest`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        console.log(json.data.data)
        setLatest(json.data.data)
    })
    .catch ( function(error){
        //console.log(error.response.data)
    })
}

export default Dashboard