import { React } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LatestCandidate from './components/LatestCandidate'
import LatestRegion from './components/LatestRegion'

const Dashboard = () => {
    return (
    <>
        <small>
            <Breadcrumb >
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    <FontAwesomeIcon icon="fas fa-home" />
                </Breadcrumb.Item>

                <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
        </small>
        <h2><FontAwesomeIcon icon="fas fa-list" /> Dashboard</h2>
        <hr />
        <LatestCandidate />
        <LatestRegion />
    </>
    )
}
export default Dashboard