import FeedbackContext from "./feedbackContext";
import { useState } from "react";

const FeedbackState = (props) => {
  const host = "http://localhost:5000"
  const feedbacksInitial = []
  const [feedbacks, setFeedbacks] = useState(feedbacksInitial) 
  

  // Get all Feedbacks
  const getFeedbacks = async () => {
    // API Call 
    const response = await fetch(`${host}/api/feedbacks/fetchallfeedbacks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = await response.json() 
    setFeedbacks(json)
  }

  // Add a Feedback
  const addFeedback = async (name, email, subject, message) => {
    
    // API Call 
    const response = await fetch(`${host}/api/feedbacks/addfeedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      },
      body: JSON.stringify({name, email, subject, message})
    });

    const feedback = await response.json();
    setFeedbacks(feedbacks.concat(feedback))    
    
  }

  // Delete a Feedback
  const deleteFeedback = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/feedbacks/deletefeedback/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = response.json(); 
    console.log(json)
    const newFeedbacks = feedbacks.filter((feedback) => { return feedback._id !== id })
    setFeedbacks(newFeedbacks)
  }
  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback, deleteFeedback, getFeedbacks}}>
      {props.children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackState;