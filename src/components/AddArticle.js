import React, {useContext, useState} from 'react'
import articleContext from "../context/articles/articleContext"

const AddArticle = (props) => {
    const context = useContext(articleContext);
    const {addArticle} = context;

    const [title, setTitle] = useState("")
    const [articleImg, setArticleImg] = useState("")
    const [articleUrl, setArticleUrl] = useState("")
    const [language, setLanguage] = useState("")

    const handleClick = (e) =>{
        e.preventDefault()
        addArticle(title, articleUrl, articleImg, language)
        setTitle("")
        setArticleImg("")
        setArticleUrl("")
        setLanguage("")
        props.showAlert("Article has been added","success")
    }
   
    const onChange = (e) =>{
        setTitle(e.target.value)
    }
    const onChange1 = (e) =>{
        setLanguage(e.target.value)
    }
    const onChange2 = (e) =>{
        setArticleUrl(e.target.value)
    }
    const onChange3 = (e) =>{
        setArticleImg(e.target.files[0])
    }
    
    return (
        <div>
                <form className="row mx-2">
                <div className="col-2">
                    <input type="text" className="form-control" id="title" value={title} name="title" aria-describedby="emailHelp" placeholder="Title" onChange={onChange} minLength={3} required/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" id="language" name="language" value={language} aria-describedby="emailHelp" placeholder="Language" onChange={onChange1} minLength={3} required/>
                </div>
                <div className="col-3">
                    <input type="text" className="form-control" id="articleUrl" name="articleUrl" value={articleUrl} aria-describedby="emailHelp" placeholder="Article Url" onChange={onChange2} minLength={3} required/>
                </div>
                <div className="col-3">
                    <input type="file" className="form-control" id="articleImg" name="articleImg" defaultValue={articleImg} aria-describedby="emailHelp" onChange={onChange3} minLength={3} required/>
                </div>
                <div className="col-2">
                    <button disabled={language.length<3 || title.length<3 || articleImg.length<3} type="submit" className="btn btn-primary form-control" onClick={handleClick}>Add Article</button>
                </div>
                </form>        
        </div>
    )
}

export default AddArticle