import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import articleContext from "../context/articles/articleContext"

const FilteredArticlesItem = (props) => {
    const context = useContext(articleContext)
    const { searchArticle, index } = props
    console.log(searchArticle);
    const date = new Date(searchArticle.date).toGMTString()

    return (
        <div className="col-md-3 my-3">
            <div className="card">
            <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}> 
                {index>(searchArticle.length-10)?<span className="badge rounded-pill bg-warning">{searchArticle.language}</span>:""}
            </div>
            <img src={process.env.PUBLIC_URL + `articles/${searchArticle.articleImg}`} className="card-img-top" style={{"width": "100%", "height":"18vh","objectFit": "cover"}} alt="..." />            
                <div className="card-body">
                    <h5 className="card-title overflow-hidden"><Link id="article-title" target="_blank" to={`//${searchArticle.articleUrl}`}>{searchArticle.title}</Link></h5>
                    <p className="card-title" id="date">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default FilteredArticlesItem