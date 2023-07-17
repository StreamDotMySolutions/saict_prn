const ListItem = ({item,value}) => {
    
    return (
    <>
    <div className="row mb-2">
        <div className="col-4">
            <p className="mb-0">{item}</p>
        </div>
        <div className="col-8">
            <p className="text-muted mb-0">: {value}</p>
        </div>
    </div>

    </>
    )
    
}

export default ListItem