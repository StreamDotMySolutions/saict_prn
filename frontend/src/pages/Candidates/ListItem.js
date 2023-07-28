const ListItem = ({item,value}) => {
    
    return (
    <>
    <div className="row mb-2">
        <row>
            <div className="col-2 mx-3">
                <b className="mb-0">{item}</b>
            </div>
        </row>
        <row>
            <div className="col-8 mt-1">
                <p className="text-dark mb-3 mx-3">{value}</p>
            </div>
        </row>


    </div>

    </>
    )
    
}

export default ListItem