const ListItem = ({item,value}) => {
    
    return (
    <>
    <div className="row mb-2">
        <div className="col-2">
            <p className="mb-0">{item}</p>
        </div>
        <div className="col-8">
            <p className="text-muted mb-0">: <strong>{value}</strong></p>
        </div>
    </div>

    </>
    )
    
}

export default ListItem