const Form = (props) => {

    const processForm = (event) => {
        event.preventDefault()
        console.log(props.content)
    }

    return(
        <form method='post'>
            <label>Title</label> <br />
            <input 
                type="text" 
                name="title" 
                onChange={ (event) =>         
                    props.setContent({
                        ...props.content, // spread operator
                        'title' : event.target.value // form event
                    })}
            />
            <br />
            <br />
            <label>Description</label><br />
            <textarea 
                name="descriptions"
                onChange={ (event) =>         
                    props.setContent({
                        ...props.content, // spread operator
                        'descriptions' : event.target.value // form event
                    })}
            ></textarea>
            <br />
            <br />
            <input 
                type="button" 
                onClick={ (event) => processForm(event) }
                value="Submit"
            />
        </form>
    )
}
export default Form