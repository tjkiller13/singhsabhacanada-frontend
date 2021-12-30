import BookContext from "./bookContext";
import { useState } from "react";

const BookState = (props) => {
  const host = "https://singhsabhacanada.herokuapp.com"
  const booksInitial = []
  const searchBooksInitial = []
  const [books, setBooks] = useState(booksInitial)   
  const [searchBooks, setSearchBooks] = useState(searchBooksInitial)   
  
  const [authorState, setauthorState] = useState("")
  const [loading, setLoading] = useState(true)

  // Get all Books
  const getBooks = async () => {
    // API Call 
    setLoading(true)
    const response = await fetch(`${host}/api/books/fetchallbooks`, {
      method: 'GET',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = await response.json() 
    setBooks(json)
    setLoading(false)
  }

  // Add a Book
  const addBook = async (author, title, bookUrl, bookImg) => {
    setLoading(true)
    const formData = new FormData()
    formData.append("author", author)
    formData.append("title", title)
    formData.append("bookUrl", bookUrl)
    formData.append("bookImg", bookImg)
    // API Call 
    const response = await fetch(`${host}/api/books/addbook`, {
      method: 'POST',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      },
      body: formData
    });

    const book = await response.json();
    setBooks(books.concat(book))
    setLoading(false)   
    
  }

  // Delete a Book
  const deleteBook = async (id) => {
    // API Call
    setLoading(true)
    const response = await fetch(`${host}/api/books/deletebook/${id}`, {
      method: 'DELETE',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = response.json(); 
    console.log(json)
    const newBooks = books.filter((book) => { return book._id !== id })
    setBooks(newBooks)
    setLoading(false)
  }

  const booksByAuthor = async (author) => {
    setLoading(true)
    // Search by Author
    const response = await fetch(`${host}/api/books/booksByAuthor/${author}`, {
      method: 'POST'
    });
    const json = await response.json() 
    setSearchBooks(json)
    setLoading(false)
  }


  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, getBooks, booksByAuthor,setauthorState, authorState, searchBooks, setSearchBooks, loading, setLoading}}>
      {props.children}
    </BookContext.Provider>
  )

}
export default BookState;