import CenterContext from "./centerContext";
import { useState } from "react";

const CenterState = (props) => {
  const host = "https://singhsabhacanada.herokuapp.com"
  const centersInitial = []
  const [centers, setCenters] = useState(centersInitial)
  
  const [index, setIndex] = useState(1) 
  const [loading, setLoading] = useState(true) 

  // Get all Centers
  const getCenters = async () => {
    // API Call 
    setLoading(true)
    const response = await fetch(`${host}/api/centers/fetchallcenters`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = await response.json() 
    setCenters(json)
    setLoading(false)
  }

  // Add a Center
  const addCenter = async (namegpk, pracharak, prnumber, prabandhak, pbnumber, sponsored, snumber) => {
    
    // API Call 
    setLoading(true)
    const response = await fetch(`${host}/api/centers/addcenter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      },
      body: JSON.stringify({namegpk, pracharak, prnumber, prabandhak, pbnumber, sponsored, snumber})
    });

    const center = await response.json();
    setCenters(centers.concat(center)) 
    setLoading(false)   
    
  }

  // Delete a Center
  const deleteCenter = async (id) => {
    // API Call
    setLoading(true)
    const response = await fetch(`${host}/api/centers/deletecenter/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = response.json(); 
    console.log(json)
    const newCenters = centers.filter((center) => { return center._id !== id })
    setCenters(newCenters)
    setLoading(false)
  }

  // Edit a Center
  const editCenter = async (id, namegpk, pracharak, prnumber, prabandhak, pbnumber, sponsored, snumber) => {
    // API Call 
    setLoading(true)
    const response = await fetch(`${host}/api/centers/updatecenter/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      },
      body: JSON.stringify({namegpk, pracharak, prnumber, prabandhak, pbnumber, sponsored, snumber})
    });
    const json = await response.json(); 
    console.log(json)

     let newCenters = JSON.parse(JSON.stringify(centers))
    // Logic to edit in client
    for (let index = 0; index < newCenters.length; index++) {
      const element = newCenters[index];
      if (element._id === id) {
        newCenters[index].namegpk = namegpk;
        newCenters[index].pracharak = pracharak;
        newCenters[index].prnumber = prnumber; 
        newCenters[index].prabandhak = prabandhak; 
        newCenters[index].pbnumber = pbnumber; 
        newCenters[index].sponsored = sponsored; 
        newCenters[index].snumber = snumber; 
        break; 
      }
    }  
    setCenters(newCenters);
    setLoading(false)
  }


  return (
    <CenterContext.Provider value={{ centers, addCenter, deleteCenter, getCenters, editCenter, index, setIndex, loading, setLoading}}>
      {props.children}
    </CenterContext.Provider>
  )

}
export default CenterState;