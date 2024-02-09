import { useContext, useState } from "react"
import LoginContext from "./context/LoginContext"
import { postNewArticle } from "./utils"
import RenderToggleContext from "./context/RenderToggleContext"

export default function({topics}) {
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const {render, setRender} = useContext(RenderToggleContext)
  const [err, setErr] = useState(null)
  const [newTitle, setNewTitle] = useState("")
  const [newTopic, setNewTopic] = useState("")
  const [newImg, setImg] = useState("")
  const [newBody, setBody] = useState("")
  const [newArticle, setNewArticle] = useState([])

  const handleTitle = (event) => { setNewTitle(event.target.value)}
  const handleTopic = (event) => { setNewTopic(event.target.value)}
  const handleImg = (event) => { setImg(event.target.value)}
  const handleBody = (event) => { setBody(event.target.value)}
  const handleNewArticleSubmission = (event) => {
    event.preventDefault()
    if(newTopic === "Please Choose") setErr("Please choose a topic")
    else {
      const body = {"title": newTitle, "topic": newTopic, "article_img_url": newImg, "body": newBody, "author": userLogin[0].username }
      postNewArticle(body)
      .then((responseArticle) => {
        setNewArticle([responseArticle])
        setRender(!render)
      })
      setNewTitle("")
      setNewTopic("Please Choose")
      setBody("")
      setImg("")
    }
  }
  return (<>
  {userLogin.length
    ?
    newArticle.length 
    ? 
    <section className="new-article-container">
      <p>Here's your new article</p>
      <h3>{newArticle[0].title}</h3>
      <img src={newArticle[0].article_img_url} alt={newArticle[0].title} />
      <p>{newArticle[0].body}</p> 
    </section>
    :
    <section className="new-article-container">
      <h1>Publish a New Article</h1>
      <p>Fill in the form below to publish your latest article.</p>
      <form onSubmit={handleNewArticleSubmission}>
        <label htmlFor="title">Article Title:</label>
        <input type="text" required id="title" value={newTitle} onChange={handleTitle} />
        <label htmlFor="topic">Select Your Topic:</label>
        <select required id="topic" value={newTopic} onChange={handleTopic}>
            <option value="Please Choose">Please choose</option>
          {topics.map((topic) => (
            <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
          ))}
        </select>
        <label htmlFor="image_url">Paste Your Image URL:</label>
        <input type="text" required id="image_url" value={newImg} onChange={handleImg} />
        <label htmlFor="article-body">Add Your Article Here:</label>
        <textarea id="article-body" rows={"20"} columns={"12"} required value={newBody} onChange={handleBody} ></textarea>
        {err ? <p className="error-message">{err}</p> : null }
        <button>Submit</button>
      </form>
    </section>
    :
    <>
    <h1>Hmmm, what are you doing here?</h1>
    <p>This is for logged in users only.</p>
    </>
    }
  </>)
}