import React from 'react'

const UserData = (props) => {

    //console.log(props.data.data)
    const users = props.data.data
    const listUsers = users.map( (user) => 
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                    </tr>
                )
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Created On</th>
                </tr>
            </thead>
            <tbody>
                {listUsers}
            </tbody>
        </table>
    )
}
export default UserData