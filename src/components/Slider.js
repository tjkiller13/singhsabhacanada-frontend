import React, {useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import articleContext from "../context/articles/articleContext"
import SliderItem from "./SliderItem"

const Slider = () => {
    const context = useContext(articleContext)
    const {articles, getArticles} = context
    useEffect(() => {
        getArticles() 
        // eslint-disable-next-line
    }, []) 
    return (
        <>
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <picture>
                            <source media="(max-width: 1000px)" srcset={process.env.PUBLIC_URL + `logophones.jpg`}/>
                            <source media="(min-width: 1001px)" srcset={process.env.PUBLIC_URL + `newlogo.jpg`}/>
                            <img src={process.env.PUBLIC_URL + `newlogo.jpg`} className="d-block w-100" alt="..." style={{"height":"70vh"}}/>
                        </picture>
                    </div>
                    {articles.map((article)=>{
                        return <SliderItem key={article._id} article={article}/>               
                        }).reverse()} 
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default Slider
