import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArticlesList from './ArticlesList'
import Home from './Home'
import Navigation from './Navigation'
import { fetchArticles, fetchUsers } from './utils'
import { ReadArticle } from './ReadArticle'
import LoginContext from './context/LoginContext'
import Login from './Login'

export default function Manager() {
  const [articlesList, setArticlesList] = useState([])
  const [users, setUsers] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchArticles()
    .then((responseArticles) => {
      setArticlesList(responseArticles)
      setIsLoading(false)
    })
    fetchUsers()
    .then((responseUsers) => {
      setUsers(responseUsers)
    })
    .catch((err) => {
      setErr("Something went wrong fetching the data. Please refresh and try again.")
    })
  },[])
  return (<>
  {err ? <p>{err}</p> :
  <>
  <LoginContext.Provider value={{ userLogin, setUserLogin }}>
  <Navigation />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/articles' element={<ArticlesList articlesList={articlesList} isLoading={isLoading}/>} />
    <Route path='/articles/:article_id' element={<ReadArticle />}/>
    <Route path='/login' element={<Login users={users} />}  />
  </Routes>
  </LoginContext.Provider>
  </>
  }
  </>)
}