import ArticleContext from "./articleContext";
import { useState } from "react";

const ArticleState = (props) => {
  const host = "https://singhsabhacanada.herokuapp.com"
  const articlesInitial = []
  const searchArticlesInitial = []
  const [articles, setArticles] = useState(articlesInitial)   
  const [searchArticles, setSearchArticles] = useState(searchArticlesInitial)   
  const [loading, setLoading] = useState(true)

  // Get all Articles
  const getArticles = async () => {
    // API Call 
    setLoading(true)
    const response = await fetch(`${host}/api/articles/fetchallarticles`, {
      method: 'GET',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = await response.json() 
    setArticles(json)
    setLoading(false)
  }

  // Add a Article
  const addArticle = async (title, articleUrl, articleImg, language) => {
    setLoading(true)
    const formData = new FormData()
    formData.append("title", title)
    formData.append("articleUrl", articleUrl)
    formData.append("articleImg", articleImg)
    formData.append("language", language)
    // API Call 
    const response = await fetch(`${host}/api/articles/addarticle`, {
      method: 'POST',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      },
      body: formData
    });

    const article = await response.json();
    setArticles(articles.concat(article))    
    setLoading(false)
  }

  // Delete a Article
  const deleteArticle = async (id) => {
    // API Call
    setLoading(true)
    const response = await fetch(`${host}/api/articles/deletearticle/${id}`, {
      method: 'DELETE',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOTllMGFmZGM5MGZlM2I3NGQyY2NlIn0sImlhdCI6MTYzOTYxNDM5MX0.aPxc283DFLTolTvDrDb--vKd13dPCl0U1oDWaIqiRJk"
      }
    });
    const json = response.json(); 
    console.log(json)
    const newArticles = articles.filter((article) => { return article._id !== id })
    setArticles(newArticles)
    setLoading(false)
  }

  const articlesByLanguage = async (language) => {
    
    // Search by Author
    setLoading(true)
    const response = await fetch(`${host}/api/articles/articlesByLanguage/${language}`, {
      method: 'POST'
    });
    const json = await response.json() 
    setSearchArticles(json)
    setLoading(false)
  }


  return (
    <ArticleContext.Provider value={{ articles, addArticle, deleteArticle, getArticles, articlesByLanguage , searchArticles, setSearchArticles, loading, setLoading}}>
      {props.children}
    </ArticleContext.Provider>
  )

}
export default ArticleState;