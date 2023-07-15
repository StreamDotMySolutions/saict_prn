import { React, useState , useEffect} from 'react'
import axios from '../../../libs/axios'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * @return JSX
 */
const LatestCandidate = () => {

    const [latestCandidates,setLatestCandidates] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    // useEffect(() => {
    //     getLatestCandidates(setLatestCandidates)
    //   }, [])

    useEffect(() => {
       
        const intervalId = setInterval(() => {
            getLatestCandidates(setLatestCandidates,setIsLoading)
        }, 1000 * 5) // in milliseconds

        return () => clearInterval(intervalId)
        
    }, [])
    

    const listCandidates = latestCandidates.map((item) =>
        <tr key={item.id}>
            <td>
                <small>
                    {item.candidate_title} {item.candidate_name} mewakili parti {item.party_name} di {item.region_name} , {item.state_name}
                    <br />
                    <span className='text-muted'><FontAwesomeIcon icon="fas fa-clock" /><i>&nbsp;{item.when}</i></span>
                </small>
            </td>
        </tr>
    );

    return (
    <>
        { latestCandidates.length > 0 ? 
            <table className='w-100 table table-striped'>
                <thead>
                    <tr>
                        <th>
                        <FontAwesomeIcon icon="fas fa-user" /> CALON 
                        &nbsp; { isLoading ? <FontAwesomeIcon icon="fa-solid fa-spinner" /> : null }
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {listCandidates}
                </tbody>
            </table>
            : <p className='text-muted'>Tiada data</p>
         }
    </>
    )
}


/**
 * Get latest data PrnNomination via AXIOS
 * @param useState setLatestCandidates
 * @return useState setLatestCandidates
 */
function getLatestCandidates(setLatestCandidates,setIsLoading){

    setIsLoading(true)
    axios({
        url:  `${process.env.REACT_APP_BACKEND_URL}/prn-nominations/latest/candidates`,   
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( function(json){
        //console.log(json.data.data)
        setLatestCandidates(json.data.data)
        setIsLoading(false)
    })
    .catch ( function(error){
        //console.log(error.response.data)
        setIsLoading(false)
    })
}

export default LatestCandidate