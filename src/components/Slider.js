import React, {useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import articleContext from "../context/articles/articleContext"
import SliderItem from "./SliderItem"
import $ from "jquery"

const Slider = () => {
    const context = useContext(articleContext)
    const {articles, getArticles} = context
    // $("#carouselExampleIndicators").carousel({ wrap: true });
    useEffect(() => {
        getArticles() 
        // eslint-disable-next-line
    }, []) 
    return (
        <>
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    {articles.map((article,index)=>{
                        index++
                        return <SliderItem key={article._id} index={index} article={article}/>               
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
