import React, {useContext,useEffect} from 'react'
import { Link } from "react-router-dom";
import articleContext from "../context/articles/articleContext"
import Spinner from './Spinner';

const Gallery = (props) => {
    const context = useContext(articleContext)
    const {articles, getArticles, loading} = context
    useEffect(() => {
        document.title = `Singh Sabha Canada | ${props.category}`;
        getArticles() 
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <div className="row my-4" style={{margin:"1vw"}}>
            {loading && <Spinner />}
                {articles.map((article)=>{
                    return <div class="item col-md-4 my-3">
                    <Link className="fancybox" data-fancybox="gallery" target="_blank" to={process.env.PUBLIC_URL + `articles/${article.articleImg}`}>
                        <img src={process.env.PUBLIC_URL + `articles/${article.articleImg}`} alt="" width="100%" height="100%"/>
                    </Link>
                </div>               
                })}
                
            </div>
            
        </div>
    )
}

export default Gallery
