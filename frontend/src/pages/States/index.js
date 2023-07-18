import React, { useState, useEffect } from 'react';
import axios from '../../libs/axios';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const States = () => {
    const { stateName } = useParams();
    const [regions, setRegions] = useState([]);
    const [parties, setParties] = useState([]);
    const [candidates, setCandidates] = useState(0);

    useEffect(() => {
        getRegions(stateName, setRegions,setParties, setCandidates);
    }, [stateName]);


    const renderParty = () => {
        if (parties.length === 0) {
            return <p>No parties found.</p>;
        }

        return (
        <>
        <strong>Parti bertanding - </strong>

        {parties.map((party) => (
                    <>
                    {party.total > 0  &&
                        <li key={party.title}>{party.title} ( {party.total} )</li>
                    }
                    </>
                )
            )}
        <hr />
        </>
        )
    }

    const renderTable = () => {
        if (regions.length === 0) {
            return <p>No regions found.</p>;
        }

        return (
            <>
            Jumlah calon : <strong>{candidates} orang</strong>
            <Table className='mt-1'striped bordered hover>
                <thead>
                    <tr>
                        <th>Kod Kawasan</th>
                        <th>Nama Kawasan</th>
                        <th>Calon</th>
                    </tr>
                </thead>
                <tbody>
                    {regions.map((region) => (
                    <tr key={region.name}>
                        <td>{region.code}</td>
                        <td>
                            <NavLink to={`${region.code}/${region.slug}`} className="text-decoration-none text-dark">
                                {region.name}
                            </NavLink>
                        </td>
                        <td>
                            {region.prn_nominations_count !== 0 && (
                            <small>
                                <strong>{region.prn_nominations_count}</strong> calon
                            </small>
                            )}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </>
        );
    }; // renderTable()

    return (
        <>
        <Container>
            <small>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                <FontAwesomeIcon icon="fas fa-home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{stateName.toUpperCase()}</Breadcrumb.Item>
            </Breadcrumb>
            </small>
            <h1>
           
                {stateName.toUpperCase()}
            </h1>
            {renderParty()}
            {renderTable()}
        </Container>
        </>
    );
};

function getRegions(stateName, setRegions,setParties, setCandidates) {
    axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/prn-variables/states/${stateName}/get-region-data`,
        method: 'get',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((response) => {
        setCandidates(response.data.candidates);
        setRegions(response.data.regions);
        setParties(response.data.parties);
        //console.log(response);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}

export default States;
