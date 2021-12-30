import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import bookContext from "../context/books/bookContext"

const BookItem = (props) => {
    const context = useContext(bookContext)
    const {deleteBook} = context
    const { book } = props

    return (
        <div className="col-md-3 my-3">
            <div className="card">
            <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    left: '0'
                }}> 
                {<span className="badge" style={{backgroundColor:"rgb(224 94 82)",color:"white",borderRadius:"0"}}>Author: {book.author}</span>}
               {(localStorage.getItem('token')) && <i className="far fa-trash-alt mx-2" onClick={()=>{deleteBook(book._id);props.showAlert("Book has been deleted","warning")}}></i>}
            </div>
                <img src={process.env.PUBLIC_URL + `uploads/${book.bookImg}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link id="book-title" target="_blank" to={`//${book.bookUrl}`}>{book.title}</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default BookItem
