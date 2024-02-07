import { useContext, useEffect, useState } from "react"
import LoginContext from "./context/LoginContext"
import { postNewComment } from "./utils"

export default function AddComment({setNewComment, setComments, selectedArticle}) {
  const {userLogin} = useContext(LoginContext)
  const [newCommentBody, setNewCommentBody] = useState("")
  const [err, setErr] = useState(null)
  
  const handleCommentBody = (event) => setNewCommentBody(event.target.value)
  
  function handleAddNewComment(event) {
    event.preventDefault()
    postNewComment(selectedArticle.article_id, {"username":userLogin[0].username, "body": newCommentBody})
    .then(() => {
      const date = new Date()
      const commentWithDate = {"author":userLogin[0].username, "body": newCommentBody}
      commentWithDate.created_at = (date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()).toString()
      setComments((currentComments) => [commentWithDate, ...currentComments])
      setNewComment(false)
    })
    .catch((err) => {
      setErr("Sorry something seems to have gone wrong. Try refreshing the page to see if you were successful.")
    }) 
  } 

  useEffect(() => {
  },[userLogin])

  return (
    <section className="add-comment-container">
      {err ? <p className="error-message">{err}</p> :
        <>
        <h3>Add your comment below...</h3>
        <form className="add-comment-form" onSubmit={handleAddNewComment}>
          <label htmlFor="comment-body"></label>
          <textarea id="comment-body" rows={"10"} columns={"12"} required value={newCommentBody} onChange={handleCommentBody} ></textarea>
          <button>Submit</button>
        </form>
        </>
      }
    </section>
  )
}