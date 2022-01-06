import React,{useContext,useEffect} from "react";
import articleContext from "../context/articles/articleContext"
import SliderItem from "./SliderItem"

const SliderByEnglish = (props) => {
    const context = useContext(articleContext)
    const {searchArticles, articlesByLanguage, loading} = context
    useEffect(() => {
        articlesByLanguage(props.category)
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">                
                        {searchArticles.map((searchArticle,index)=>{
                        index++
                        return <SliderItem newHeight="true" key={searchArticle._id} index={index} article={searchArticle}/>               
                        })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SliderByEnglish
