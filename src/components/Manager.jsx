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
import Footer from './Footer'
import ArticlesNew from './ArticlesNew'
import RenderToggleContext from './context/RenderToggleContext'

export default function Manager() {
  //User Login Context State
  const [userLogin, setUserLogin] = useState([]);
  const [render, setRender] = useState(false)
  //API Request States
  const [articlesList, setArticlesList] = useState([])
  const [topics, setTopics] = useState([])
  const [newTopic, setNewTopic] = useState(null)
  //Errors and Message States
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)
  //Sort & Order
  const [searchParams, setSearchParams] = useSearchParams("")
  const [pagMax, setPagMax] = useState(null)
  const sortByQuery = searchParams.get("sort_by")
  const orderQuery = searchParams.get("order")
  const pQuery = searchParams.get("p")

  useEffect(() => {
    fetchArticles(sortByQuery, orderQuery, null, 9, pQuery)
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
  },[sortByQuery, orderQuery, newTopic, pQuery, render])

  return (<>
  <>
  <RenderToggleContext.Provider value={{render, setRender}}>
  <LoginContext.Provider value={{ userLogin, setUserLogin }}>
  <Navigation />
  {err ? <p>{err}</p> :
    <>
    <Routes>
      <Route path='*' element={<ErrorPage/>} />
      <Route path='/' element={<Home topics={topics} />}/>
      <Route path='/articles' element={<ArticlesList articlesList={articlesList} sortByQuery={sortByQuery} isLoading={isLoading} searchParams={searchParams} setSearchParams={setSearchParams} setPagMax={setPagMax} pagMax={pagMax} pQuery={pQuery} />} />
      <Route path='/articles/:article_id' element={<ReadArticle />}/>
      <Route path='/articles/new' element={ <ArticlesNew topics={topics} /> } />
      <Route path='/topics' element={<TopicsList topics={topics} setNewTopic={setNewTopic} />} />
      <Route path='/:topic/articles' element={<TopicLanding sortByQuery={sortByQuery} orderQuery={orderQuery} setSearchParams={setSearchParams} searchParams={searchParams} />} />
      <Route path='/login' element={<Login />}  />
      <Route path='/profile' element={<Profile articlesList={articlesList} />}  />
    </Routes>
    <Footer/>
    </>
  }
  </LoginContext.Provider>
  </RenderToggleContext.Provider>
  </>
  </>)
}