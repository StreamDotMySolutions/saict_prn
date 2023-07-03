import { React, useState }  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

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

    const [active, setActive] = useState(null)

    const sort = (field,direction) => {
        console.log(field)
        console.log(direction)
        setActive({
                field:field,
                direction:direction
            })
        
        // build the query 
        let query = "&field=" + field + "&direction=" + direction    
        //props.setSorting(query)  
        props.setPage(props.page + query)  
    }
    console.log(active)
   
    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name 
               
                    &nbsp;
                    <Link onClick={ () => sort('name','ASC')}>
                        <FontAwesomeIcon 
                            icon="fa-solid fa-arrow-up"
                            style={ active?.field === 'name' && active?.direction ==='ASC' ? { color: "red" } : {} }
                        />
                    </Link>
                    &nbsp;
                    <Link onClick={ () => sort('name','DESC')}>
                    <FontAwesomeIcon 
                            icon="fa-solid fa-arrow-down"
                            style={ active?.field === 'name' && active?.direction ==='DESC' ? { color: "red" } : {} }
                        />
                    </Link>
        
                    </th>
                    <th scope="col">Email 
                    &nbsp;
                    <Link onClick={ () => sort('email','ASC')}>
                        <FontAwesomeIcon 
                            icon="fa-solid fa-arrow-up"
                            style={ active?.field === 'email' && active?.direction ==='ASC' ? { color: "red" } : {} }
                        />
                    </Link>
                    &nbsp;
                    <Link onClick={ () => sort('email','DESC')}>
                    <FontAwesomeIcon 
                            icon="fa-solid fa-arrow-down"
                            style={ active?.field === 'email' && active?.direction ==='DESC' ? { color: "red" } : {} }
                        />
                    </Link>
                    </th>
                    <th scope="col">Created On 
                    &nbsp;
                    <Link onClick={ () => sort('created_at','ASC')}>
                        <FontAwesomeIcon 
                            icon="fa-solid fa-arrow-up"
                            style={ active?.field === 'created_at' && active?.direction ==='ASC' ? { color: "red" } : {} }
                        />
                    </Link>
                    &nbsp;
                    <Link onClick={ () => sort('created_at','DESC')}>
                    <FontAwesomeIcon 
                            icon="fa-solid fa-arrow-down"
                            style={ active?.field === 'created_at' && active?.direction ==='DESC' ? { color: "red" } : {} }
                        />
                    </Link>
                    </th>
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