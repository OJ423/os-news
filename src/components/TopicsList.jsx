import { Link } from "react-router-dom"

export default function TopicsList({topics}) {
  function handleRedirect(topic) {
    <Link to={`/articles/${topic}`}>Hello</Link>
  }
  return (
    <>
    <section className="topics-container">
      <h2>Article Topics</h2>
      <p>Choose a topic of interest to read related articles.</p>
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
    
    </>)
}