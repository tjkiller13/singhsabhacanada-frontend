import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import bookContext from "../context/books/bookContext"

const SearchItem = (props) => {
    const context = useContext(bookContext)
    const { searchBook } = props
    const date = new Date(searchBook.date).toGMTString()

    return (
        <div className="col-md-3 my-3">
            <div className="card">
            <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    left: '0'
                }}> 
                {<span className="badge" style={{backgroundColor:"rgb(248 195 1)",color:"rgb(32 49 127)",borderRadius:"0"}}>Author: {searchBook.author}</span>}
            </div>
                <img src={process.env.PUBLIC_URL + `uploads/${searchBook.bookImg}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to='{book.bookUrl}' id="book-title" target="_blank">{searchBook.title}</Link></h5>
                    <p className="card-title">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem