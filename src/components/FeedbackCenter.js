import React,{useContext, useEffect, useState} from 'react'
import FeedbackContext from "../context/feedbacks/feedbackContext"
import FeedbackItem from "./FeedbackItem"

const FeedbackCenter = (props) => {
    const context = useContext(FeedbackContext)
    const {feedbacks, getFeedbacks}= context

    useEffect(()=>{
        getFeedbacks()        
        // eslint-disable-next-line
    },[])

    return (
        <div className="container my-2">
        <div className = "row my-2 text-center">
            <h2 style={{color:"rgb(224 94 82)"}}>Feedback from Users</h2>
            <div className="container mx-2 text-center">
            {feedbacks.length===0 && 'No feedbacks do display'}
            </div>
            {feedbacks.map((feedback)=>{
                return <FeedbackItem key={feedback._id} feedback={feedback} />            
            }).reverse()}
        </div>
        </div>
    )
}

export default FeedbackCenter
