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

        <div className="card-group">
            <div className="row row-cols-8">
                {parties.map((party) => (
                    <>
                        {party.total > 0 &&
                            <div className="col mb-4">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <h1 className="card-title">{party.total}</h1>
                                        <p className="card-text">{party.title}</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                ))}
            </div>
        </div>
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
                        <th className="text-center" style={{width:'10px'}}>Kod</th>
                        <th>Nama Kawasan</th>
                        <th className="text-center" style={{width:'150px'}}>Calon</th>
                        <th style={{width:'20px'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {regions.map((region) => (
                    <tr key={region.name}>
                        <td className="text-center">{region.code}</td>
                        <td>
                            <NavLink to={`${region.code}/${region.slug}`} className="text-decoration-none text-dark">
                                {region.name}
                            </NavLink>
                        </td>
                        <td className="text-center">
                            {region.prn_nominations_count !== 0 && (
                            <NavLink to={`${region.code}/${region.slug}`} className="text-decoration-none text-dark">
                                <strong>{region.prn_nominations_count}</strong> calon 
                            </NavLink>
                            )}
                        </td>
                        <td>
                            <NavLink to={`${region.code}/${region.slug}`} className="text-decoration-none text-dark">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </NavLink>
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
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                    <FontAwesomeIcon icon="fas fa-home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{stateName.toUpperCase()}</Breadcrumb.Item>
            </Breadcrumb>
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
