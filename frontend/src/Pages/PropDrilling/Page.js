import { useState } from 'react'

const PropDrilling = () => {

    const [ content, setContent ] = useState({
        'title' : 'Hello World',
        'descriptions' : 'Lorem Ipsum...'
    })

    const changeContent = () => {


        setContent({
            'title' : 'Lorem Ipsum',
            'descriptions' : 'Hello World'
        })
    }

    // JSX is HTML
    return (
        <>
            <h3>{ content.title }</h3>
            <p>{ content.descriptions }</p>

            <label>Title</label> <br />
            <input 
                type="text" 
                name="title" 
                onChange={ (event) =>         
                    setContent({
                        ...content, // spread operator
                        'title' : event.target.value // form event
                    })}
            />
            <br />
            <br />

            <label>Description</label><br />
            <textarea 
                name="descriptions"
                onChange={ (event) =>         
                    setContent({
                        ...content, // spread operator
                        'descriptions' : event.target.value // form event
                    })}
                ></textarea><br />

            <br />

            <input 
                type="button" 
                onClick={ () => changeContent() }
                value="Submit"
            />
        </>
    )
}

export default PropDrilling