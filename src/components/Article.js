import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import articleContext from "../context/articles/articleContext"

const Article = (props) => {
    const context = useContext(articleContext)
    const {deleteArticle, articles} = context
    const { article, index } = props

    return (
        <div className="col-md-3 mb-3">
            <div className="card">
            <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}> 
                {(localStorage.getItem('token')) && <i className="far fa-trash-alt mx-2" onClick={()=>{deleteArticle(article._id);props.showAlert("Article has been deleted","warning")}}></i>}
                {index>(articles.length-10)?<span className="badge bg-success"> Trending </span>:""}
            </div>
                <img src={process.env.PUBLIC_URL + `articles/${article.articleImg}`} className="card-img-top" style={{"width": "100%", "height":"18vh","objectFit": "cover"}} alt="..." />
            
                <div className="card-body">
                    <h5 className="card-title overflow-hidden"><Link id="article-title" target="_blank" to={`//${article.articleUrl}`}>{article.title}</Link></h5>                    
                </div>
                
            </div>
        </div>
    )
}

export default Article