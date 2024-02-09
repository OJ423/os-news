import { useEffect, useState } from "react"
import { fetchArticles } from "./utils"
import ArticleListItem from "./ArticleListItem"
import SortSection from "./SortSection"
import { useParams } from "react-router-dom"

export default function TopicLanding({sortByQuery, searchParams, setSearchParams, orderQuery}) {
  const [filteredArticles, setFilteredArticles] = useState([])
  const {topic} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchArticles(sortByQuery, orderQuery, topic, null)
    .then((responseArticles) => {
      setFilteredArticles(responseArticles)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err.response.data.msg)
      setErr(err.response.data.msg)
      setIsLoading(false)
    })
  }, [sortByQuery, orderQuery, topic])

  return (<>
    <h1>Articles talking {topic}</h1>
    {isLoading ? <p>Data is loading</p> :
    err ? <p className="error-message">{err}</p> :
    <>
    <SortSection topic={topic} setSearchParams={setSearchParams} searchParams={searchParams} sortByQuery={sortByQuery} />
    <section className="articles-container">
    {filteredArticles.map((article) => (
      <ArticleListItem key={article.article_id} article={article}/>
    ))}
    </section>
    </>
  }
  </>)
}