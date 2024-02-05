import { Link } from "react-router-dom"

export default function Home() {
  return<>
    <h1>OS News</h1>
    <p>News when you need it</p>
    <button><Link to="/articles">View Articles</Link></button>
    </>
}