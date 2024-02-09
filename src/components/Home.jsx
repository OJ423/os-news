import { useEffect, useState } from "react"
import { fetchArticles } from "./utils"
import ArticleListItem from './ArticleListItem'
import { useNavigate, Link } from "react-router-dom"
import TopicsList from "./TopicsList"




export default function Home({topics}) {
  const [homeArticles, setHomeArticles] = useState([])
  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchArticles("created_at", "DESC", null, 4, null)
    .then((responseArticles) => {
      setHomeArticles(responseArticles)
    })
    .catch((err) => {
      setErr("Something went wrong fetching the articles, please refresh the page to try again.")
    })
  }, [])

  return(
    <>
      <section className="home">
        <article>
          <div className="hero-title">
            <h1>OS News</h1>
            <p>News when you need it</p>
          </div>
        </article>
        <h2>Latest Articles</h2>
          <div className="articles-two-grid">
          {homeArticles.map((article) => (
            <ArticleListItem key={article.article_id} article={article} />
          ))}
          </div>
      </section>
      <section className="home-topics-container">
        <h2>Browse Articles by Topic</h2>
          <p>Choose a topic of interest.</p>
          <div className="topics-grid">
            {topics.map((topic) => (
              <Link key={topic.slug} to={`/${topic.slug}/articles`}>
              <article className="topic-card">
                <h3>{topic.slug}</h3>
                <p>{topic.description}</p>
              </article>
            </Link>
            ))}
          </div>
      </section>
    </>
    )
}