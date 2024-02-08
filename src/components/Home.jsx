import { useEffect, useState } from "react"
import { fetchArticles } from "./utils"
import ArticleListItem from './ArticleListItem'




export default function Home() {
  const [homeArticles, setHomeArticles] = useState([])
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchArticles("created_at", "DESC", null, 3, null)
    .then((responseArticles) => {
      setHomeArticles(responseArticles)
    })
    .catch((err) => {
      setErr("Something went wrong fetching the articles, please refresh the page to try again.")
    })
  }, [])

  return(
    <section className="home">
      <h1>OS News</h1>
      <p>News when you need it</p>
      <h2>Latest Articles</h2>
      {homeArticles.map((article) => (
        <ArticleListItem key={article.article_id} article={article} />
      ))}
      <button>View all</button>
    </section>)
}