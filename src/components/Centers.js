// rafce

import React,{useContext, useEffect, useRef, useState} from 'react'
import centerContext from "../context/centers/centerContext"
import AddCenter from './AddCenter'
import Centeritem from "./CenterItem"

const Centers = (props) => {

    const context = useContext(centerContext)
    const {centers, getCenters, editCenter}= context

    useEffect(()=>{
        getCenters()
        // eslint-disable-next-line
    },[])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [center, setCenter] = useState({id:"", enamegpk:"", epracharak:"", eprnumber:"", eprabandhak:"", epbnumber:"", esponsored:"", esnumber:""})

    const updateCenter = (currentCenter)=>{
        ref.current.click()
        setCenter({id : currentCenter._id, enamegpk : currentCenter.namegpk, epracharak : currentCenter.pracharak, eprnumber : currentCenter.prnumber, eprabandhak : currentCenter.prabandhak, epbnumber : currentCenter.pbnumber, esponsored : currentCenter.sponsored, esnumber : currentCenter.snumber})
        
    }

    const handleClick = (e) =>{
        refClose.current.click()
        editCenter(center.id, center.enamegpk, center.epracharak, center.eprnumber, center.eprabandhak, center.epbnumber, center.esponsored, center.esnumber)
        props.showAlert("Center has been updated","success")
    }
    const onChange = (e) =>{
        setCenter({...center,[e.target.name]:e.target.value})
    }

    return (
        <div className="new overflow-auto" style={{"height":"74vh"}}>
        <div className="table-responsive">
            <table cellPadding={0} cellSpacing={0} className="table table-stripped table-bordered">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>G.P.K</th>
                        <th>Pracharak</th>
                        <th>Pracharak's No.</th>
                        <th>Prabandhak</th>
                        <th>Prabandak's No.</th>
                        <th>Sponsored</th>
                        <th>Sponsored's No.</th>
                    </tr>
                    {(localStorage.getItem('token')) && <AddCenter showAlert={props.showAlert}/>}
                </thead>
                <tbody>
                    
                    {centers.map((center, index)=>{
                                index++
                                return <Centeritem showAlert={props.showAlert} index={index} key={center._id} center={center} updateCenter={updateCenter}/>
                                    
                    }).reverse()}      
                </tbody>
            </table>  
            
            <div className="container my-3 text-center">
                {centers.length===0 && 'No centers to display'}
            </div>

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Center</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3 headers">
                        <label htmlFor="namegpk" className="form-label">Name of GPK</label>
                        <input type="text" className="form-control" id="enamegpk" name="enamegpk" aria-describedby="emailHelp" value={center.enamegpk} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3 headers">
                        <label htmlFor="pracharak" className="form-label">Name of Pracharak</label>
                        <input type="text" className="form-control" id="epracharak" name="epracharak" aria-describedby="emailHelp" value={center.epracharak} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3 headers">
                        <label htmlFor="prnumber" className="form-label">Number of Pracharak</label>
                        <input type="number" className="form-control" id="eprnumber" name="eprnumber" aria-describedby="emailHelp" value={center.eprnumber} onChange={onChange} minLength={10} required/>
                    </div>
                    <div className="mb-3 headers">
                        <label htmlFor="prabandhak" className="form-label">Name of Prabandhak</label>
                        <input type="text" className="form-control" id="eprabandhak" name="eprabandhak" aria-describedby="emailHelp" value={center.eprabandhak} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3 headers">
                        <label htmlFor="pbnumber" className="form-label">Number of Prabandhak</label>
                        <input type="number" className="form-control" id="epbnumber" name="epbnumber" aria-describedby="emailHelp" value={center.epbnumber} onChange={onChange} minLength={10} required/>
                    </div>
                    <div className="mb-3 headers">
                        <label htmlFor="sponsored" className="form-label">Name of Sponsored</label>
                        <input type="text" className="form-control" id="esponsored" name="esponsored" aria-describedby="emailHelp" value={center.esponsored} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3 headers">
                        <label htmlFor="snumber" className="form-label">Number of Sponsored</label>
                        <input type="number" className="form-control" id="esnumber" name="esnumber" aria-describedby="emailHelp" value={center.esnumber} onChange={onChange} minLength={10} required/>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button disabled={center.enamegpk.length<5||center.epracharak.length<5||center.eprabandhak.length<5||center.esponsored.length<5||center.eprnumber.length<10||center.epbnumber.length<10||center.esnumber.length<10} type="button" className="btn btn-primary" onClick={handleClick}>Update Center</button>
                </div>
                </div>
            </div>
            </div>         
        </div>
        </div>
    )
}

export default Centers
