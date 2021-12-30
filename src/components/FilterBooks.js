import React,{useContext,useEffect, useState} from "react";
import bookContext from "../context/books/bookContext"

const FilterBooks = () => {
    const context = useContext(bookContext)
    const {books, getBooks, setauthorState} = context
    

    useEffect(() => {    
      setauthorState("")
        // eslint-disable-next-line
    }, [])
    
    const onClick =(e)=> {
      const eAuthor = e.target.value;
      setauthorState(eAuthor)
    }
    
    const arr = books.map((book)=>{
        return book.author
    })
    
    const set = new Set(arr)
    const newArr = [...set]

    const showAll = () => {
      setauthorState("")
    }

    // var newArray = new Array(set)
    // const result = newArray.map((value, key) => ({ key: value }));
    // console.log(arrayNew);

  return (
    <div className="my-1">
      <div className="dropdown d-flex justify-content-end">
        <button className="btn btn-secondary dropdown-toggle" onClick={showAll} type="button" id="dropdowntoggle" data-bs-toggle="dropdown" aria-expanded="false">
          Author
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {newArr.map((element, index) => {
                    index++
                    return <li id={element} key={index}><button className="dropdown-item mydropdownitem" value={element} onClick={onClick}>{element}</button></li>                                       
        })} 
        </ul>
      </div>
    </div>
  );
};

export default FilterBooks;
