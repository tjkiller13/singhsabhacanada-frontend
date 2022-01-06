import React, {useContext, useState} from 'react'
import bookContext from "../context/books/bookContext"

const AddBook = (props) => {
    const context = useContext(bookContext);
    const {addBook} = context;

    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const [bookUrl, setBookUrl] = useState("")
    const [bookImg, setBookImg] = useState("")

    const handleClick = (e) =>{
        e.preventDefault()
        addBook(author, title, bookUrl, bookImg)
        setAuthor("")
        setTitle("")
        setBookUrl("")
        setBookImg("")
        props.showAlert("Book has been added","success")
    }
   
    const onChange = (e) =>{
        setAuthor(e.target.value)
    }
    const onChange1 = (e) =>{
        setTitle(e.target.value)
    }
    const onChange2 = (e) =>{
        setBookUrl(e.target.value)
    }
    const onChange3 = (e) =>{
        setBookImg(e.target.files[0])
    }
    
    return (
        <div className="container">
                <form className="row">
                <div className="col-2">
                    <input type="text" className="form-control" id="author" value={author} name="author" aria-describedby="emailHelp" placeholder="Author" onChange={onChange} minLength={3} required/>
                </div>
                <div className="col-3">
                    <input type="text" className="form-control" id="title" name="title" value={title} aria-describedby="emailHelp" placeholder="Title" onChange={onChange1} minLength={3} required/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" id="bookUrl" name="bookUrl" value={bookUrl} aria-describedby="emailHelp" placeholder="Book Url" onChange={onChange2} minLength={3} required/>
                </div>
                <div className="col-3">
                    <input type="file" className="form-control" id="bookImg" name="bookImg" defaultValue={bookImg} aria-describedby="emailHelp" onChange={onChange3} minLength={3} required/>
                </div>
                <div className="col-2">
                    <button disabled={author.length<3 || title.length<3 || bookUrl.length<3 || bookImg.length<3} id="submit" type="submit" className="btn btn-primary form-control" onClick={handleClick}>Add Book</button>
                </div>
                </form>        
        </div>
    )
}

export default AddBook
