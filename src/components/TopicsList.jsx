import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import LoginContext from "./context/LoginContext"
import TopicsNew from "./TopicsNew"

export default function TopicsList({topics, setNewTopic}) {
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const [selectNewTopic, setSelectNewTopic] = useState(false) 

  function handleNewTopic(){setSelectNewTopic(true)}

  return (
    <section className="topics-container">
      <h1>Article Topics</h1>
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
      <section className="new-topic-container">
      {userLogin.length ?
      selectNewTopic ? <TopicsNew setNewTopic={setNewTopic} topics={topics} setSelectNewTopic={setSelectNewTopic} /> : 
      <button onClick={handleNewTopic}>Add a new topic</button> : null
      }
      </section>
    </section>  )
}