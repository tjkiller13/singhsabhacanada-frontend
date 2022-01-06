// rafce

import React,{useContext, useRef} from 'react'
import {
    Link, useLocation
  } from "react-router-dom"
import bookContext from "../context/books/bookContext"

import $ from "jquery"

  
  const Navbar = () => {

    let location = useLocation()

    const context = useContext(bookContext)
    const {setauthorState} = context
    const ref = useRef(null)
    $('.js-scroll-trigger').on("click",function(){
        ref.current.click()
      })


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
            <div className="container-fluid" id="navbar-div">
                <div className="p-0 m-0" id="navbar-logo">
                        <button className="navbar-toggler mx-2" ref={ref} id="navtoggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" id="navlogo" to="/"><img id="navimg" src={process.env.PUBLIC_URL + '/mainlogo.jpg'} alt="" height="65em" width="130em"/></Link>
                        
                                     
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link m-0 js-scroll-trigger ${location.pathname==="/"?"active":""}`} aria-current="page" to="/"><b>Home</b></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className={`nav-link dropdown-toggle`} to="/articles/english" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Articles
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item js-scroll-trigger" to="/punjabi">Punjabi</Link></li>
                            <li><Link className="dropdown-item js-scroll-trigger" to="/english">English</Link></li>
                            {/* <li><hr className="dropdown-divider"/></li> */}
                        </ul>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link js-scroll-trigger ${location.pathname==="/books"?"active":""}`} aria-current="page" to="/books">Books</Link>
                    </li>   
                    <li className="nav-item">
                    <Link className={`nav-link js-scroll-trigger ${location.pathname==="/gurmatcenters"?"active":""}`} aria-current="page" to="/gurmatcenters">Gurmat Centers</Link>
                    </li>   
                    <li className="nav-item">
                    <Link className={`nav-link js-scroll-trigger ${location.pathname==="/gallery"?"active":""}`} aria-current="page" to="/gallery">Gallery</Link>
                    </li>   
                    <li className="nav-item">
                    <Link className={`nav-link js-scroll-trigger ${location.pathname==="/videos"?"active":""}`} aria-current="page" to="/videos">Videos</Link>
                    </li>   
                    <li className="nav-item">
                    <Link className={`nav-link js-scroll-trigger ${location.pathname==="/contact"?"active":""}`} aria-current="page" to="/contact">Contact Us</Link>
                    </li>   
                </ul>
                <form className="d-flex">                   
                    {!localStorage.getItem('token')?<Link className="mx-2 my-2"  to="/login"><i className="fas fa-user icon" id="nav-icon"></i></Link>:"" }
                    {!localStorage.getItem('token')?<button type="button" id="donatenav" className="btn btn-sm btn-light" onClick={()=>{window.open("https://www.paypal.com/donate/?token=yrj4RmlVk0_DPzUrNdcfCNFok3AmNFsBoiqOae0M4EO1qoalVt9gmgSyr9V4Va0mb_NTcW9VKQIjVsRl&locale.x=CA", "_blank")}}>Donate Now!</button>:"" }
                    {localStorage.getItem('token')?<Link className="mx-2 my-2 js-scroll-trigger" id="feedbackicon"  to="/feedbackCenter"><i className="fas fa-comments icon"></i></Link>:"" }
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
