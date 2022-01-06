import React from 'react'
import SliderByEnglish from "./SliderByEnglish"
import SliderByPunjabi from "./SliderByPunjabi"

const SliderByLanguage = () => {
    return (
        <div className="row">
            <div className="col-md-6 p-0 m-0">
                <div className="text-center" style={{backgroundColor:"rgb(248 195 1)", color:"rgb(32 49 127)",fontWeight:"bold",fontFamily: "Bebas Neue"}}>Punjabi Articles</div>
                <SliderByPunjabi category="Punjabi" />
            </div>
            <div className="col-md-6 p-0 m-0">
                <div className="text-center" style={{backgroundColor:"rgb(248 195 1)", color:"rgb(32 49 127)",fontWeight:"bold",fontFamily: "Bebas Neue"}}>English Articles</div>
                <SliderByEnglish category="English" />
            </div>
        </div>
    )
}

export default SliderByLanguage
