import React, {useContext, useEffect} from 'react'
import articleContext from "../context/articles/articleContext"
import Article from './Article';
import AddArticle from './AddArticle'
import Slider from './Slider';
import Spinner from './Spinner';
import SliderByLanguage from './SliderByLanguage';
import FilterBooks from './FilterBooks';
import SearchAuthor from './SearchAuthor';
import bookContext from "../context/books/bookContext"

const ArticlesCenter = (props) => {
    const context = useContext(articleContext)
    const {articles, getArticles, loading} = context

    const context2 = useContext(bookContext)    
    const {books, getBooks, authorState, booksByAuthor, setauthorState} = context2
    

    useEffect(() => {       
        document.title = `Singh Sabha Canada | ${props.category}`;
        getArticles() 
        setauthorState("")
        getBooks() 
        // eslint-disable-next-line
    }, []) 

    

    return (
        <div className="mt-3">
    <div className="">
        {(localStorage.getItem('token'))?<AddArticle showAlert={props.showAlert}/>:<Slider />}
        <SliderByLanguage />
        {!(localStorage.getItem('token')) && <FilterBooks showAlert={props.showAlert}/>}
        {loading && <Spinner />}
        <div className="row" style={{margin:"1vw"}}>
            <div className="container text-center"> 
                {articles.length===0 && 'No articles to display'}
            </div>
            {authorState?<SearchAuthor category={props.category}/>:articles.map((article, index)=>{
                index++
                return <Article showAlert={props.showAlert} index={index} key={article._id} article={article}/>               
            }).reverse()}           
        </div>
        </div>
        </div> 
    )
}

export default ArticlesCenter
