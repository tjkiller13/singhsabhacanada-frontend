// rafce

import React,{useContext,useState, useEffect} from 'react'
import centerContext from "../context/centers/centerContext"

const AddCenter = (props) => {

    const context = useContext(centerContext);
    const { addCenter, centers} = context;

    const [center, setCenter] = useState({namegpk:"", pracharak:"", prnumber:"", prabandhak:"", pbnumber:"", sponsored:"", snumber:""})

    const handleClick = (e) =>{
        e.preventDefault()
        addCenter(center.namegpk, center.pracharak, center.prnumber, center.prabandhak, center.pbnumber, center.sponsored, center.snumber)
        setCenter({namegpk:"", pracharak:"", prnumber:"", prabandhak:"", pbnumber:"", sponsored:"", snumber:""})

    }
    const onChange = (e) =>{
        setCenter({...center,[e.target.name]:e.target.value})
    }

    return (
            <tr>
                <th><i className={`fas fa-plus ${center.namegpk.length<5||center.pracharak.length<5||center.prabandhak.length<5||center.sponsored.length<5||center.prnumber.length<10||center.pbnumber.length<10||center.snumber.length<10 ? "customDisable":""}`} onClick={handleClick}></i></th>
                <th><input type="text" id="namegpk" name="namegpk" value={center.namegpk} onChange={onChange} minLength={5} required /></th>
                <th><input type="text" id="pracharak" name="pracharak" value={center.pracharak} onChange={onChange} minLength={5} required /></th>
                <th><input type="number" id="prnumber" name="prnumber" value={center.prnumber} onChange={onChange} minLength={10} required /></th>
                <th><input type="text" id="prabandhak" name="prabandhak" value={center.prabandhak} onChange={onChange} minLength={5} required /></th>
                <th><input type="number" id="pbnumber" name="pbnumber" value={center.pbnumber} onChange={onChange} minLength={10} required /></th>
                <th><input type="text" id="sponsored" name="sponsored" value={center.sponsored} onChange={onChange} minLength={5} required /></th>
                <th><input type="number" id="snumber" name="snumber" value={center.snumber} onChange={onChange} minLength={10} required /></th>
            </tr>
        
    )
}

export default AddCenter
