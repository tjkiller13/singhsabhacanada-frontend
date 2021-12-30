import React, {useContext, useEffect} from 'react'
import centerContext from "../context/centers/centerContext"

const CenterItem = (props) => {
    const context = useContext(centerContext);
    const {deleteCenter, centers} = context;
    const {center, updateCenter,index} = props

    
    
    return (
        <tr>
            {localStorage.getItem('token')?<th><i className="fas fa-minus" onClick={()=>{deleteCenter(center._id);props.showAlert("Center has been deleted", "success")}}></i> <i className="fas fa-edit" onClick={()=>{updateCenter(center)}}></i></th>:<th>{centers.length-index+1}</th> }            
            <th>{center.namegpk}</th>            
            <th>{center.pracharak}</th>            
            <th>{center.prnumber}</th>            
            <th>{center.prabandhak}</th>            
            <th>{center.pbnumber}</th>            
            <th>{center.sponsored}</th>            
            <th>{center.snumber}</th>            
        </tr>
    )
}

export default CenterItem
