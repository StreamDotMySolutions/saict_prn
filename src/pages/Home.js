import React from 'react'
import { Outlet} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Home = () => {
    return (
        <>
            <Container className="mt-3">
            <Row>
            <Col lg={6} className="mt-3">
                <h3>Pilihan Raya Utama 15</h3>
            </Col>
            </Row>

            <Container className="bg-light text-center">
            <Row>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="https://mypru15.rtm.gov.my/">
                    <img src="img/flags/Malaysia.png" className="img-fluid" width="30%" title="Malaysia" />
                </a>
                </Col>
            </Row>
            </Container>

            <Row className="mt-5">
            <Col lg={6}>
                <h3>Pilihan Raya Negeri</h3>
            </Col>
            </Row>

            <Container className="bg-light text-center">
            <Row>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="/selangor">
                    <img src="img/flags/Selangor.png" className="img-fluid" width="30%" title="Selangor" />
                </a>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="pulau_pinang">
                    <img src="img/flags/PP.png" className="img-fluid" width="30%" title="PP" />
                </a>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="/n9">
                    <img src="img/flags/NS.png" className="img-fluid" width="30%" title="NS" />
                </a>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="/kedah">
                    <img src="img/flags/Kedah.png" className="img-fluid" width="30%" title="Kedah" />
                </a>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="/terengganu">
                    <img src="img/flags/Terengganu.png" className="img-fluid" width="30%" title="Terengganu" />
                </a>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className="my-2">
                <a href="/kelantan">
                    <img src="img/flags/Kelantan.png" className="img-fluid" width="30%" title="Kelantan" />
                </a>
                </Col>
            </Row>
            </Container>

            <hr className="featurette-divider" />

            <Row>
            <Col lg={6}>
                <h3>Statistik Keputusan</h3>
            </Col>
            </Row>

            <Container>
            <div className="mb-4">Pakatan Harapan</div>
            <div className="progress mb-4" role="progressbar" aria-label="PH" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "25px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "65%", backgroundColor: "rgb(216, 35, 43)" }}></div>
            </div>

            <div className="mb-4">Perikatan Nasional</div>
            <div className="progress mb-4" role="progressbar" aria-label="PN" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "25px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "45%", backgroundColor: "rgb(0, 49, 82)" }}></div>
            </div>

            <div className="mb-4">Barisan Nasional</div>
            <div className="progress mb-4" role="progressbar" aria-label="Bn" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "25px" }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "25%", backgroundColor: "rgb(0, 0, 128)" }}></div>
            </div>
            </Container>

            <hr className="featurette-divider" />
        </Container>

        {/* Outlet */}
        <Outlet />
        </>
    )
} 

export default Home