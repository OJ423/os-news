import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchArticleById } from './utils'
import ArticleDetail from './ArticleDetail'
import CommentsList from './CommentsList'

export function ReadArticle() {
  const {article_id} = useParams()
  const [selectedArticle, setSelectedArticle] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    fetchArticleById(article_id)
    .then((apiResponse) => {
      setSelectedArticle(apiResponse)
      setIsLoading(false)
    })
  },[article_id])

  return (<>
  {isLoading ? <p>Loading article.</p> :
  <>
  <ArticleDetail selectedArticle={selectedArticle} />
  <CommentsList selectedArticle={selectedArticle}/>
  </>
  }
  </>
)
}