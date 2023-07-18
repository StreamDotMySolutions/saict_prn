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
    const [candidates, setCandidates] = useState(0);

    useEffect(() => {
        getRegions(stateName, setRegions, setCandidates);
    }, [stateName]);


    const renderParty = () => {
        return (
        <>
        <strong>Parti bertanding :</strong>
           <ol>
                <li>UMNO ( 20 kerusi )</li>
                <li>PKR ( 16 kerusi )</li>
            </ol> 
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
            <h1 className='text-center'>
                <img src="/img/flags/Kedah.png" className="img-fluid" width="80px" title="Kedah" />
                &nbsp;
                {stateName.toUpperCase()}
            </h1>
            {renderParty()}
            {renderTable()}
        </Container>
        </>
    );
};

function getRegions(stateName, setRegions, setCandidates) {
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
        //console.log(response);
    })
    .catch((error) => {
        console.log(error.response.data);
    });
}

export default States;
