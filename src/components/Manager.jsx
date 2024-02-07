import {Routes, Route, useSearchParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArticlesList from './ArticlesList'
import Home from './Home'
import Navigation from './Navigation'
import Login from './Login'
import TopicsList from './TopicsList'
import ErrorPage from './ErrorPage'
import Profile from './Profile'
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
  const orderQuery = searchParams.get("order")

  useEffect(() => {
    fetchArticles(sortByQuery, orderQuery)
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
  },[sortByQuery, orderQuery])

  return (<>
  <>
  <LoginContext.Provider value={{ userLogin, setUserLogin }}>
  <Navigation />
  {err ? <p>{err}</p> :
  <Routes>
    <Route path='*' element={<ErrorPage/>} />
    <Route path='/' element={<Home topics={topics} />}/>
    <Route path='/articles' element={<ArticlesList articlesList={articlesList} sortByQuery={sortByQuery} isLoading={isLoading} searchParams={searchParams} setSearchParams={setSearchParams}/>} />
    <Route path='/articles/:article_id' element={<ReadArticle />}/>
    <Route path='/topics' element={<TopicsList topics={topics} />} />
    <Route path='/:topic/articles' element={<TopicLanding sortByQuery={sortByQuery} orderQuery={orderQuery} setSearchParams={setSearchParams} searchParams={searchParams} />} />
    <Route path='/login' element={<Login />}  />
    <Route path='/profile' element={<Profile articlesList={articlesList} />}  />
  </Routes>
}
  </LoginContext.Provider>
  </>
  </>)
}