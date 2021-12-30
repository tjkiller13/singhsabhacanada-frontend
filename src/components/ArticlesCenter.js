import React, {useContext, useEffect} from 'react'
import articleContext from "../context/articles/articleContext"
import Article from './Article';
import AddArticle from './AddArticle'
import Slider from './Slider';
import Spinner from './Spinner';

const ArticlesCenter = (props) => {
    const context = useContext(articleContext)
    const {articles, getArticles, loading} = context

    useEffect(() => {       
        document.title = `Singh Sabha Canada | ${props.category}`;
        getArticles() 
        // eslint-disable-next-line
    }, []) 

    

    return (
        <>
    <div className={(localStorage.getItem('token'))?"":""}>
        {(localStorage.getItem('token'))?<AddArticle showAlert={props.showAlert}/>:<Slider />}
        {loading && <Spinner />}
        <div className="row" style={{margin:"1vw"}}>
            <div className="container text-center"> 
                {articles.length===0 && 'No articles to display'}
            </div>
            {articles.map((article, index)=>{
                index++
                return <Article showAlert={props.showAlert} index={index} key={article._id} article={article}/>               
            }).reverse()}           
        </div>
        </div>
        </> 
    )
}

export default ArticlesCenter
