import React,{useEffect,useContext, useState} from 'react'
import feedbackContext from "../context/feedbacks/feedbackContext"

const Contact = (props) => {

    useEffect(() => {
        document.title = `Singh Sabha Canada | ${props.category}`;
        // eslint-disable-next-line
    }, [])
    const context = useContext(feedbackContext);
    const {addFeedback} = context;

    const [feedback, setFeedback] = useState({name:"", email:"", subject:"", message:""})

    const handleClick = (e) =>{
        e.preventDefault()
        addFeedback(feedback.name, feedback.email, feedback.subject, feedback.message)
        setFeedback({name:"", email:"", subject:"", message:""})
        props.showAlert("Feedback has been sent","success")
    }
    const onChange = (e) =>{
        setFeedback({...feedback,[e.target.name]:e.target.value})
    }
    return (
        <div className="mb-3 mt-3">
            <div className="container">
                <div className="input-group mb-2">
                    <span className="input-group-text myinput" id="basic-addon1">Name</span>
                    <input type="text" name="name" value={feedback.name} id="name" className="form-control" placeholder="Enter your Full Name" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} minLength={5} required />
                </div>
                <div className="input-group mb-2">
                    <input type="email" name="email" value={feedback.email} id="email" className="form-control" placeholder="Enter a valid email" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onChange} minLength={5} required />
                    <span className="input-group-text myinput" id="basic-addon2">@example.com</span>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text myinput" id="basic-addon1">Subject</span>
                    <input type="text" name="subject" value={feedback.subject} id="subject" className="form-control" placeholder="Subject of your message" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} minLength={10} required />
                </div>
                <div className="input-group mb-2">
                    <input type="text" name="message" value={feedback.message} id="message" className="form-control" placeholder="Type your thoughts" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onChange} minLength={10} required />
                    <span className="input-group-text myinput" id="basic-addon2">Message</span>
                </div>
                <div className="container d-flex justify-content-center">
                    <button type="button" disabled={feedback.name.length<5 || feedback.email.length<5 || feedback.subject.length<10 || feedback.message.length<10} className="btn btn-light" id="submit" onClick={handleClick}>Submit Your Feedback</button>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center d-flex justify-content-center float-left mx-auto">                    
                        <div className="card" style={{width: '20em'}}>
                        <div className="card-header mycardheader" style={{backgroundColor:"rgb(224 94 82)"}}>Email Us</div>
                        <div className="card-body">
                        <p className="card-text">infor@singhsabhacanada.com</p>
                        <p className="card-text">ssicanada01@gmail.com</p>
                        
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6 container text-center d-flex justify-content-center float-right mx-auto">                    
                        <div className="card" style={{width: '20em'}}>
                        <div className="card-header mycardheader" style={{backgroundColor:"rgb(224 94 82)"}}>Reach us on Facebook</div>
                        <div className="card-body">
                        <p className="card-text">https://www.facebook.com/singhsabhacanada/</p>
                        <p className="card-text">https://www.facebook.com/profile.php?id=100001653938304</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
