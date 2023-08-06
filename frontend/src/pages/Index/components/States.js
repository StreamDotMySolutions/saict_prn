import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const States = ({stateName}) => {

    return (
    <Card className='m-1'>
        <Card.Body>
            <Card.Title>{stateName}</Card.Title>
            <Row>
                <Col>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                            Pengundi Berdaftar
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                            Jumlah kawasan
                            <span className="badge bg-primary rounded-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                        Calon bertanding
                            <span className="badge bg-primary rounded-pill">1</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                        Parti bertanding
                            <span className="badge bg-primary rounded-pill">1</span>
                        </li>
                    </ul>
                </Col>
                <Col>
                <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                            Undi sehingga kini
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                            Kemaskini terakhir
                            <span className="badge bg-primary rounded-pill">8.45 malam</span>
                        </li>
               
                    </ul>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}
export default States