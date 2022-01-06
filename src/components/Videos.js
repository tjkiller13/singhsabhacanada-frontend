import React,{useState, useEffect} from 'react'

const Videos = (props) => {
    useEffect(() => {
      document.title = `Singh Sabha Canada | ${props.category}`;      
      // eslint-disable-next-line
    }, [])

    const newObj = [
        "https://www.youtube.com/embed/yaPUKWXv4Es",
        "https://www.youtube.com/embed/3WEqtKw4ZLo",
        "https://www.youtube.com/embed/_llCj1QYsEI",
        "https://www.youtube.com/embed/o2XOtHhgmA8",
        "https://www.youtube.com/embed/Yq1qqs62sBo",
        "https://www.youtube.com/embed/WdSeXgJRafo",
        "https://www.youtube.com/embed/iEKGYveO5K0",
        "https://www.youtube.com/embed/JvHMUNb9vi8",
        "https://www.youtube.com/embed/jRFHXzkSoHU",
        "https://www.youtube.com/embed/xZ8EMVSsD4A",
        "https://www.youtube.com/embed/oZ9fRqTOIb4",
        "https://www.youtube.com/embed/31PoMMUzpls",
        "https://www.youtube.com/embed/HukQ-LQYlmI",
        "https://www.youtube.com/embed/4kTC_bsbGvw",
        "https://www.youtube.com/embed/GnabEl8xpeU",
        "https://www.youtube.com/embed/t816LYbeqcs",
        "https://www.youtube.com/embed/X-xBRcxsQgs",
        "https://www.youtube.com/embed/kJdLxjMAv6U",
        "https://www.youtube.com/embed/wRNaRt-UDG0",
        "https://www.youtube.com/embed/ARgep06Fx0g",
        "https://www.youtube.com/embed/EMeZm54gQYw",
        "https://www.youtube.com/embed/pbLDcaQJNUQ",
        "https://www.youtube.com/embed/LMHIOi-GoP4",
        "https://www.youtube.com/embed/dmVjZaKsBsI",
        "https://www.youtube.com/embed/Z154FZB2oGs",
        "https://www.youtube.com/embed/jd1wtkUfGww",
        "https://www.youtube.com/embed/uINo3xO4_JA",
        "https://www.youtube.com/embed/efurwgnWHoI",
        "https://www.youtube.com/embed/LXtKq11pPpo",
        "https://www.youtube.com/embed/ZFRjQGz0ipY",
        "https://www.youtube.com/embed/4OU5Ul2cSIQ",
        "https://www.youtube.com/embed/aFHllpEkwsU",
        "https://www.youtube.com/embed/LoCSyE7qQnU",
        "https://www.youtube.com/embed/MgDYB2PhcaY",
        "https://www.youtube.com/embed/Q6TBmlg9iyE",
        "https://www.youtube.com/embed/mG-J-WmsQnI",
        "https://www.youtube.com/embed/jqVDpusRpxY",
        "https://www.youtube.com/embed/LDJV7I-vZoU",
        "https://www.youtube.com/embed/a1fXLNTqRb0",
        "https://www.youtube.com/embed/Om9nA37X6ko",
        "https://www.youtube.com/embed/wn6fWkiDRnA",
        "https://www.youtube.com/embed/wMrEOBPerhY",
        "https://www.youtube.com/embed/HMrkTcMhLlo",
        "https://www.youtube.com/embed/7hgOoNlYbZc",
        "https://www.youtube.com/embed/WOII2y-7MpE",
        "https://www.youtube.com/embed/p4OIzsDZu4I",
        "https://www.youtube.com/embed/30E0g2QOTXs",
        "https://www.youtube.com/embed/YN27NcuwGF0",
        "https://www.youtube.com/embed/elejAb39fEA"
    ]

    return (
        
        <div className="row mt-5" style={{margin:"1vw"}}>
            {newObj.map((link, i) => {
                i++
                return <div className="col-md-4 mb-2">
                    <iframe width="100%" height="365" src={link} key={i} frameBorder="0" allowFullScreen></iframe>
                </div>
            })}            
        </div>
    )
}

export default Videos
