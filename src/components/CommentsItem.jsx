import {useContext, useState} from 'react'
import LoginContext from './context/LoginContext'
import {deleteComment} from './utils'

export default function CommentsItem({comment, selectedArticle}) {
  const {userLogin} = useContext(LoginContext)
  const [isDeleted, setIsDeleted] = useState(null)
  const [err, setErr] = useState(null)

  function handleDeleteComment() {
    deleteComment(comment.comment_id)
    .then((response) => {
      setIsDeleted("Comment deleted")
    })
    .catch((err) => {
      setErr("Something went wrong. Please try again.")
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
          <figure className="meta">{comment.votes} votes</figure>
          <time className="meta">{comment.created_at.slice(0,10)}</time>
        </div>
        {userLogin.length > 0 ? 
          userLogin[0].username === comment.author ? 
          <button className='delete-button' onClick={handleDeleteComment}>Delete Comment</button> 
          : null
          : null }
      </> 
      } 
      </>
    </section>
  )
}