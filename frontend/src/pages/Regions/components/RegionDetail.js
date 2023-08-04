import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const RegionDetails = ({details}) => {

return(
    <Row>
        <Col sm={6}>
        <div class="container mt-4">
            <ul class="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Pengundi berdaftar
                    <span className="badge bg-primary rounded-pill">{ details.registered_voters }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Jumlah undi semasa
                    <span className="badge bg-primary rounded-pill">{ details.votes }</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Peratusan mengundi
                    <span className="badge bg-primary rounded-pill">{ details.percentage ?  details.percentage : 0 } %</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Status
                    <span className="badge bg-primary rounded-pill">{ details.status ?  details.status : null } </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Kemaskini 
                    <span className="badge bg-primary rounded-pill">{ details.last_updated ?  details.last_updated : null }</span>
                </li>
            </ul>
        </div>

        </Col>
    </Row>
    )
}
export default RegionDetails