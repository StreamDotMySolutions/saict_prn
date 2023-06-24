import React from 'react'

export const Pagination = (props) => {
    console.log(props.data)

    const pages = props.data.links
    const pageItems = pages.map( (page) => 
        <li key={page.label} className="page-item"><a className="page-link" href="#">
             <span dangerouslySetInnerHTML={{__html: page.label}} />
        </a></li>
    )
    
    
    return (
        <div className='row'>
            <div className='col'>Showing {props.data.from} to {props.data.to} of {props.data.total} </div>
            <div className='col'>
            <nav>
                <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                        <a className="page-link" href="#">First</a>
                    </li>
       
                    {pageItems}
                    
                    <li className="page-item disabled">
                        <a className="page-link" href="#">Last</a>
                    </li>
                </ul>
            </nav>

            </div>
        </div>

    )
}
