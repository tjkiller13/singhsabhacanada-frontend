import React,{useContext, useEffect} from 'react'
import bookContext from "../context/books/bookContext"
import SearchItem from './SearchItem';
import Spinner from './Spinner';

const SearchAuthor = (props) => {
    const context = useContext(bookContext)
    const {authorState, booksByAuthor, setauthorState, searchBooks, loading} = context
    
    useEffect(() => {
        // setauthorState(authorState)
        document.title = `Singh Sabha Canada | ${props.category}` 
        booksByAuthor(authorState)
        // eslint-disable-next-line 
              
    }, []) 
    
    return (
        <div className="container">
            {loading && <Spinner />}
        <div className="row">
            {searchBooks.map((searchBook) => {
                    return <SearchItem key={searchBook._id} searchBook={searchBook} showAlert={props.showAlert} />
            }).reverse()} 
        </div>
        </div>
    )
}

export default SearchAuthor
