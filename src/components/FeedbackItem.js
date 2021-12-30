import React, {useContext} from 'react'
import feedbackContext from "../context/feedbacks/feedbackContext"


const Feedbackitem = (props) => {
    const context = useContext(feedbackContext);
    const { deleteFeedback } = context;
    const { feedback } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body overflow-auto">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{feedback.subject}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteFeedback(feedback._id)}}></i>
                    </div>
                    <p className="card-text">{feedback.name}</p>
                    <p className="card-text">{feedback.message}</p>
                    <p className="card-text">{feedback.author}</p>
                    <p className="card-text">{feedback.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Feedbackitem