import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const UserData = (props) => {

    //console.log(props.data.data)
    const users = props.data.data
    //console.log(users)
    const listUsers = users.map( (user) => 
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xl" />&nbsp;
                        <FontAwesomeIcon icon="fa-solid fa-edit" size="xl" />&nbsp;
                        <FontAwesomeIcon icon="fa-solid fa-trash" size="xl" /> 
                        </td>
                    </tr>
                )
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> <FontAwesomeIcon icon="fa-solid fa-arrow-down" /></th>
                    <th scope="col">Email <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> <FontAwesomeIcon icon="fa-solid fa-arrow-down" /></th>
                    <th scope="col">Created On <FontAwesomeIcon icon="fa-solid fa-arrow-up" /> <FontAwesomeIcon icon="fa-solid fa-arrow-down" /></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listUsers}
            </tbody>
        </table>
    )
}
export default UserData