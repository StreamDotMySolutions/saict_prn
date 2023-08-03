import { React, useState, useEffect } from 'react';
import axios from '../../../libs/axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * @return JSX
 */
const LatestCandidate = () => {
    const { stateName } = useParams(); 
    const [latestCandidates, setLatestCandidates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    // loading for 1st time
    getLatestCandidates(stateName, setLatestCandidates, setIsLoading);

    const intervalId = setInterval(() => {
        getLatestCandidates(stateName, setLatestCandidates, setIsLoading);
    }, 1000 * 5); // in milliseconds

    return () => clearInterval(intervalId);
    }, [stateName]);

    const listCandidates = latestCandidates.map((item) => (
    <tr key={item.id}>
        <td className="text-center">
        {item.url !== '' && <img src={item.url} className="rounded" style={{ width: '50px' }} />}
        </td>
        <td>
            <small>
                Data calon {''}
                <Link
                to={ '/' + item.state_name_slug + '/' + item.region_code + '/' + item.region_name + '/' + item.id + '/' +  item.slug }
                >
                <b>{item.candidate_title} {item.candidate_name} {''}</b>
                </Link>
                dari parti {item.party_name} {''}
                di kawasan {''}
                <Link to={ '/' + item.state_name + '/' + item.region_code + '/' + item.region_name } >
                <b>{item.region_code} {item.region_name}</b>, {''}
                </Link>
                <Link to={'/' + item.state_name_slug}>
                    <b>{item.state_name}</b>
                </Link> {''}
                telah dikemaskini
                <br />
                <span className="text-muted">
                <FontAwesomeIcon icon="fas fa-clock" />
                <i>&nbsp;{item.when}</i>
                </span>
            </small>
        </td>
    </tr>
    ));

    return (
    <>
        {latestCandidates.length > 0 ? (
        <table className="w-100 table table-striped">
            <thead>
                <tr>
                    <th colSpan="2">
                    <FontAwesomeIcon icon="fas fa-user" /> CALON &nbsp;{' '}
                    {isLoading ? <FontAwesomeIcon icon="fa-solid fa-spinner" /> : null}
                    </th>
                </tr>
            </thead>

            <tbody>
                {listCandidates}
            </tbody>
        </table>
        ) : (
            <p className="text-muted">Tiada data</p>
        )}
    </>
    );
};

/**
 * Get latest data PrnNomination via AXIOS
 * @param useState setLatestCandidates
 * @return useState setLatestCandidates
 */
function getLatestCandidates(stateName, setLatestCandidates, setIsLoading) {
    setIsLoading(true);
    axios({
    url: `${process.env.REACT_APP_BACKEND_URL}/prn-nominations/latest/candidates`,
    method: 'get',
    headers: {
    Accept: 'application/json',
    },
    })
    .then(function (json) {
      //console.log(json.data.data)
        setLatestCandidates(json.data.data);
        setIsLoading(false);
    })
    .catch(function (error) {
      //console.log(error.response.data)
        setIsLoading(false);
    });
}

export default LatestCandidate;
