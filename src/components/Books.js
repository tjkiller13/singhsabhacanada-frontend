import React,{useContext, useEffect} from 'react'
import bookContext from "../context/books/bookContext"
import BookItem from './BookItem';
import AddBook from './AddBook'
import FilterBooks from './FilterBooks';
import SearchAuthor from './SearchAuthor';
import Spinner from './Spinner';


const Books = (props) => {

    const context = useContext(bookContext)    
    const {books, getBooks, authorState, booksByAuthor, setauthorState, loading} = context
    
    useEffect(() => {       
        setauthorState("")       
        document.title = `Singh Sabha Canada | ${props.category}`;
        getBooks() 
        // eslint-disable-next-line
    }, [])   

    return ( 
        <>
        <div className={(localStorage.getItem('token'))?"container":""}>
        {(localStorage.getItem('token')) && <AddBook showAlert={props.showAlert}/>}
        {!(localStorage.getItem('token')) && <FilterBooks showAlert={props.showAlert}/>}
        {loading && <Spinner />}
        <div className="row" style={{margin:"1vw"}}>
            <div className="container text-center"> 
                {books.length===0 && 'No books to display'}
            </div>
            {authorState?<SearchAuthor category={props.category}/>:books.map((book) => {
                    return <BookItem key={book._id} book={book} showAlert={props.showAlert} />
            }).reverse()}            
        </div>
        </div>
        </> 
    )
}

export default Books
