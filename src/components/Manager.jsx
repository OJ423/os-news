import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArticlesList from './ArticlesList'
import Home from './Home'
import Navigation from './Navigation'
import { fetchArticles } from './utils'
import { ReadArticle } from './ReadArticle'

export default function Manager() {
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetchArticles()
    .then((responseArticles) => {
      setArticlesList(responseArticles)
      setIsLoading(false)
    })
  },[])
  return <>
  <Navigation />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/articles' element={<ArticlesList articlesList={articlesList} isLoading={isLoading}/>} />
    <Route path='/articles/:article_id' element={<ReadArticle />}/>
  </Routes>
  </> 
}