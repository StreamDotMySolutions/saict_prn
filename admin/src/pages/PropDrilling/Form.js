import useStore from './store'
const Form = (props) => {

    const title = useStore((state) => state.title);
    const description = useStore((state) => state.description);
    const setTitle = useStore((state) => state.setTitle);
    const setDescription = useStore((state) => state.setDescription);

    const processForm = (event) => {
        event.preventDefault()
        console.log(title)
        console.log(description)
    }

    return(
        <form method='post'>
            <label>Title</label> <br />
            <input 
                type="text" 
                name="title" 
                onChange={ (event) =>         
                    setTitle(event.target.value)    
                }
            />
            <br />
            <br />
            <label>Description</label><br />
            <textarea 
                name="descriptions"
                onChange={ (event) =>         
                    setDescription(event.target.value)    
                }
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