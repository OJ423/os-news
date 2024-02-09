import { useContext, useState } from "react"
import AddVote from "./AddVote"
import LoginContext from "./context/LoginContext"
import { deleteArticle } from "./utils"
import RenderToggleContext from "./context/RenderToggleContext"
import { useNavigate } from "react-router-dom"

export default function ArticleDetail({selectedArticle, setArticleDeleted}) {
  const {userLogin, setUserLogin} = useContext(LoginContext)
  const {render, setRender} = useContext(RenderToggleContext)
  const [err, setErr] = useState(null)
  const [voteCount, setVoteCount] = useState(selectedArticle.votes)
  const navigate = useNavigate()

  function handleDeleteArticle() {
    deleteArticle(selectedArticle.article_id)
    .then((response) => {
      setRender(!render)
      navigate('/articles')
    })
    .catch((err) => {
      setErr("Something went wrong. Please refresh the page and try again.")
      setArticleDeleted(null)

    })
  }

  return (
    <article className='read-article'>
      {err ? <p className="error-message">{err}</p> : null}
      <h1>{selectedArticle.title}</h1>
      <div>
        <figure className='meta'>{selectedArticle.created_at.slice(0,10)}</figure>
        <figure className='meta'>{selectedArticle.comment_count} comments</figure>
        <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
        <p>{selectedArticle.body}</p>
      <div>
      <figure className='meta'>{voteCount} votes</figure>

      <AddVote selectedArticle={selectedArticle} setVoteCount={setVoteCount}/>
      </div>
      </div>
      {userLogin.length > 0 ? 
          userLogin[0].username === selectedArticle.author ? 
          <button className='delete-button' onClick={handleDeleteArticle}>Delete Article</button> 
          : null
          : null }
    </article>)
}