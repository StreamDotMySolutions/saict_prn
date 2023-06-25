const Content = (props) => {
    console.log(props.content)

    return(
        <>
            <h3>{ props.content.title }</h3>
            <p>{ props.content.descriptions }</p>
        </>
    )
}

export default Content