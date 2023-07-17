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

    useEffect(() => {
    getRegions(stateName, setRegions);
    }, [stateName]);

    const renderTable = () => {
    if (regions.length === 0) {
        return <p>No regions found.</p>;
    }

    return (
        <Table striped bordered hover>
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
                        {region.candidates !== 0 && (
                        <small>
                            <strong>{region.candidates}</strong> calon
                        </small>
                        )}
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        );
    };

    return (
        <>
        <small>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            <FontAwesomeIcon icon="fas fa-home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{stateName.toUpperCase()}</Breadcrumb.Item>
        </Breadcrumb>
        </small>

        <Container>
        <h1 className='text-center'>
            {stateName.toUpperCase()}
        </h1>
        {renderTable()}
        </Container>
        </>
        );
    };

function getRegions(stateName, setRegions) {
    axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/prn-variables/states/${stateName}/get-region-data`,
        method: 'get',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then((response) => {
        setRegions(response.data.data);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}

export default States;
