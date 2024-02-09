import {useContext, useState} from 'react'
import LoginContext from './context/LoginContext'
import {deleteComment} from './utils'
import AddVoteComment from './AddVoteComment'
import RenderToggleContext from './context/RenderToggleContext'

export default function CommentsItem({comment, selectedArticle}) {
  const {userLogin} = useContext(LoginContext)
  const {render, setRender} = useContext(RenderToggleContext)
  const [isDeleted, setIsDeleted] = useState(null)
  const [voteCount, setVoteCount] = useState(comment.votes)
  const [err, setErr] = useState(null)

  function handleDeleteComment() {
    deleteComment(comment.comment_id)
    .then((response) => {
      setIsDeleted("Comment deleted")
      setRender(!render)
    })
    .catch((err) => {
      setErr("Something went wrong. Please refresh the page and try again.")
      setIsDeleted(null)
    })
  }
  
  return (
  
    <section className="comment-card">
      <>
      {isDeleted ? <p>{isDeleted}</p> :  
        <>
        {err ? <p className="error-message">{err}</p> : null}
        <p>{comment.body}</p>
        <div>
          <figure className="meta">{comment.author}</figure>
          <figure className="meta">{voteCount} votes</figure>
          <time className="meta">{comment.created_at.slice(0,10)}</time>
        </div>
        {userLogin.length > 0 ? 
          userLogin[0].username === comment.author ? 
          <button className='delete-button' onClick={handleDeleteComment}>Delete Comment</button> 
          : null
          : null }
        <AddVoteComment comment={comment} setVoteCount={setVoteCount}/>
      </> 
      } 
      </>
    </section>
  )
}