import React from 'react'
import axios from '../../libs/axios'
import {
    useParams
  } from "react-router-dom";

/**
 * @returns HTML
 */
const States = () => {
    const { state_name } = useParams()

    const regions = getRegion(state_name)

    return (
        <>
            <h1>States : {state_name}</h1>
        </>
    )
}


/**
 * Get regions under given stateName
 */
function getRegion(stateName){
    console.log(`get region from server -${stateName}`)
}

export default States