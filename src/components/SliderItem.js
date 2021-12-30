import React, {useContext} from 'react'

const SliderItem = (props) => {
    const { article } = props
    return (
        <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + `articles/${article.articleImg}`} className="d-block w-100" alt="..."  style={{"height":"70vh"}}/>
            <div className="carousel-caption" id="crouselcaption"style={{
                    display: 'flex',
                    position: 'absolute',
                    top:'10vh',
                    floatLeft:'10vw'
                }}>
                <h1 id="slideritem">{article.title}</h1>
            </div>
        </div>
    )
}

export default SliderItem
