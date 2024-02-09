import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { fetchArticleById } from './utils'
import ArticleDetail from './ArticleDetail'
import CommentsList from './CommentsList'

export function ReadArticle() {
  const {article_id} = useParams()
  const [selectedArticle, setSelectedArticle] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchArticleById(article_id)
    .then((apiResponse) => {
      setSelectedArticle(apiResponse)
      setIsLoading(false)
    })
    .catch((err) => {
      setErr(err.response.data.msg)
      setIsLoading(false)

    })
  },[article_id])

  return (<>
  {isLoading ? <p>Loading article.</p> :
  err ? <p className='error-message'>{err}</p> :
  <>
  <ArticleDetail selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} />
  <CommentsList selectedArticle={selectedArticle}/>
  </>
  }
  </>
)
}