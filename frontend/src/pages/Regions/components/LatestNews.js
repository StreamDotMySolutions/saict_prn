import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const LatestNews = ({logs}) => {

    const listItems = logs?.map((log) => 
    <>
        <Row key={log.id}>
            <Col md={3}>{log.status}</Col>
            <Col md={2}>{log.last_updated}</Col>
            <Col>
            <p>
                {log.candidate_coalition && (
                    <span>
                        Calon dari Parti <strong>{log.candidate_coalition}</strong>, {" "}
                    </span>
                )}
                
                {log.candidate_name && (
                    <span>
                        <strong>{log.candidate_name}</strong>{" "}
                    </span>
                )}
        
                {log.candidate_votes && (
                    <span>
                        mengumpul <strong>{log.candidate_votes}</strong> undi ( majoriti <strong>{log.majority}</strong> undi )
                    </span>
                )}
            </p>
            </Col>
        </Row>
    </>
    )

    return listItems
}
export default LatestNews