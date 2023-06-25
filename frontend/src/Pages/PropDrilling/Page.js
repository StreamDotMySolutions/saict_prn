import { useState } from 'react'
import Form from './Form'
import Content from './Content'

const PropDrilling = () => {

    const [ content, setContent ] = useState({
        'title' : null,
        'descriptions' : null
    })

    // JSX is HTML
    return (
        <>
            <Content/>
            <Form />
        </>
    )
}
export default PropDrilling