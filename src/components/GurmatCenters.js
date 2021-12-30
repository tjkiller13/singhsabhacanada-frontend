// rafce

import React,{useEffect, useContext} from 'react'
import Centers from "./Centers"
import Spinner from './Spinner';
import centerContext from "../context/centers/centerContext"


const GurmatCenters = (props) => {
    useEffect(() => {
        document.title = `Singh Sabha Canada | ${props.category}`;
        // eslint-disable-next-line
    }, [])
    const context = useContext(centerContext)
    const {loading}= context
    const {showAlert} = props
    return (
        <div>
            {loading && <Spinner />}
            <Centers showAlert={showAlert}/>
        </div>
    )
}

export default GurmatCenters
