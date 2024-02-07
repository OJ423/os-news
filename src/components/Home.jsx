import { Link } from "react-router-dom"
import TopicsList from "./TopicsList"

export default function Home({topics}) {
  return<section className="home">
    <h1>OS News</h1>
    <p>News when you need it</p>
    <TopicsList topics={topics} />
    <button><Link to="/articles">View Articles</Link></button>
    </section>
}