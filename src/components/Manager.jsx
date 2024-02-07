import {Routes, Route, useSearchParams, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArticlesList from './ArticlesList'
import Home from './Home'
import Navigation from './Navigation'
import Login from './Login'
import TopicsList from './TopicsList'
import ErrorPage from './ErrorPage'
import { ReadArticle } from './ReadArticle'
import { fetchArticles, fetchTopics } from './utils'
import LoginContext from './context/LoginContext'
import TopicLanding from './TopicLanding'

export default function Manager() {
  //User Login Context State
  const [userLogin, setUserLogin] = useState([]);
  //API Request States
  const [articlesList, setArticlesList] = useState([])
  const [topics, setTopics] = useState([])
  //Errors and Message States
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)
  //Sort & Order
  const [searchParams, setSearchParams] = useSearchParams("")
  const sortByQuery = searchParams.get("sort_by")


  useEffect(() => {
    fetchArticles({"sort_by": sortByQuery})
    .then((responseArticles) => {
      if(responseArticles === 400) setErr("Please search something better")
      setArticlesList(responseArticles)
      setIsLoading(false)
    })
    .catch((err) => {
      setErr(err.response.data.msg)
    })

    fetchTopics()
    .then((responseTopics) => {
      setTopics(responseTopics)
    })
    .catch((err) => {
      setErr("Something went wrong fetching the data. Please refresh and try again.")
    })
  },[sortByQuery])

  return (<>
  <>
  <LoginContext.Provider value={{ userLogin, setUserLogin }}>
  <Navigation />
  {err ? <p>{err}</p> :
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/articles' element={<ArticlesList articlesList={articlesList} isLoading={isLoading} />} />
    <Route path='/articles/:article_id' element={<ReadArticle />}/>
    <Route path='/login' element={<Login />}  />
    <Route path='/topics' element={<TopicsList topics={topics} />} />
    <Route path='/:topic/articles' element={<TopicLanding sortByQuery={sortByQuery} err={err}/>} />      console.log(responseArticles)
    <Route path='*' element={<ErrorPage/>} />
  </Routes>
}
  </LoginContext.Provider>
  </>
  </>)
}