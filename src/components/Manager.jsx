import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArticlesList from './ArticlesList'
import Home from './Home'
import Navigation from './Navigation'
import { fetchArticles } from './utils'
import { ReadArticle } from './ReadArticle'

export default function Manager() {
  const [articlesList, setArticlesList] = useState([])


  useEffect(() => {
    fetchArticles()
    .then((responseArticles) => {
      setArticlesList(responseArticles)
    })
  },[])
  return <>
  <Navigation />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/articles' element={<ArticlesList articlesList={articlesList} />} />
    <Route path='/articles/:article_id' element={<ReadArticle />}/>
  </Routes>
  </> 
}