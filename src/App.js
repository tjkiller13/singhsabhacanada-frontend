import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar';
import GurmatCenters from './components/GurmatCenters';
import Alert from './components/Alert';
import CenterState from './context/centers/CenterState';
import FeedbackState from './context/feedbacks/feedbackState';
import ArticleState from './context/articles/articleState';
import BookState from './context/books/bookState';
import Login from './components/Login';
import FilteredArticles from './components/FilteredArticles';
import FilteredArticlesPunjabi from './components/FilteredArticlesPunjabi';
import {useState} from 'react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Books from './components/Books';
import FeedbackCenter from './components/FeedbackCenter';
import ArticlesCenter from './components/ArticlesCenter';
import Gallery from './components/Gallery';
import Videos from './components/Videos';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
    <CenterState>
      <FeedbackState>
        <BookState>
        <ArticleState>
      <Router>
      <Navbar />
      <Alert alert={alert}/>
        <Switch>
          <Route exact path="/gurmatcenters"><GurmatCenters category="Gurmat Centers" showAlert={showAlert}/></Route>
          <Route exact path="/"><ArticlesCenter category="Articles" showAlert={showAlert}/></Route>
          <Route exact path="/login"><Login showAlert={showAlert} category="Login"/></Route>
          <Route exact path="/contact"><Contact category="Contact" showAlert={showAlert}/></Route>
          <Route exact path="/books"><Books showAlert={showAlert} category="Books"/></Route>
          <Route exact path="/feedbackCenter"><FeedbackCenter category="Feedback Center"/></Route>
          <Route exact path="/english"><FilteredArticles category="English"/></Route>
          <Route exact path="/punjabi"><FilteredArticlesPunjabi category="Punjabi"/></Route>
          <Route exact path="/gallery"><Gallery category="Gallery" /></Route>
          <Route exact path="/videos"><Videos category="Videos" /></Route>
        </Switch>
        <Footer />
      </Router>
        </ArticleState>
        </BookState>
        </FeedbackState>
      </CenterState>
    </>
  );
}

export default App;
