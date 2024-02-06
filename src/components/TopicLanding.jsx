import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticles } from "./utils"
import ArticleListItem from "./ArticleListItem"

export default function TopicLanding() {
  const topic = useParams()
  const [filteredArticles, setFilteredArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchArticles(topic)
    .then((responseArticles) => {
      setFilteredArticles(responseArticles)
      setIsLoading(false)
    })
    .catch((err) => {
      setErr("Something went wrong. Please fresh to try again.")
    })
  }, [])

  return (<>
    <h1>Articles talking {topic.topic}</h1>
    {isLoading ? <p>Data is loading</p> :
    err ? <p className="error-message">{err}</p> :
    filteredArticles.map((article) => (
      <ArticleListItem key={article.article_id} article={article}/>
    ))
  }
  </>)
}