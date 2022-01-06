import React,{useContext,useEffect} from "react";
import articleContext from "../context/articles/articleContext"
import FilteredArticlesItem from './FilteredArticlesItem';
import Spinner from './Spinner';

const FilteredArticles = (props) => {
    const context = useContext(articleContext)
    const {searchArticles, articlesByLanguage, loading} = context

    useEffect(() => {    
        document.title = `Singh Sabha Canada | ${props.category}`;
        articlesByLanguage(props.category)
        // eslint-disable-next-line
    }, [])

  return (
    <>
        <div className="mt-4">
                {loading && <Spinner />}
        <div className="row" style={{margin:"1vw"}}>
            <div className="container text-center"> 
                {searchArticles.length===0 && 'No articles to display'}
            </div>
            {searchArticles.map((searchArticle, index)=>{
                index++
                return <FilteredArticlesItem showAlert={props.showAlert} index={index} key={searchArticle._id} searchArticle={searchArticle}/>               
            }).reverse()}           
        </div>
        </div>
    </> 
  );
};

export default FilteredArticles;
