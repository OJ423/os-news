import { useContext, useEffect, useState } from "react"
import { fetchCommentsByArticleId } from "./utils"
import CommentsItem from "./CommentsItem"
import LoginContext from "./context/LoginContext"
import AddComment from "./AddComment"

export default function CommentsList({selectedArticle}) {
  const article_id = selectedArticle.article_id
  const [comments, setComments] = useState()
  const {userLogin} = useContext(LoginContext)
  const [isLoading, setIsLoading] = useState(true)
  const [newComment, setNewComment] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchCommentsByArticleId(selectedArticle.article_id)
    .then((apiResponse) => {
      setComments(apiResponse)
      setIsLoading(false)
    })
    .catch((err) => {
      setErr(err.response.data.msg)
      setIsLoading(false)
    })
  },[article_id] )

  function handleAddComment() {
    setNewComment(true)
  }

  return (
    <>
    {isLoading ? <p>Comments loading</p> : 
    err ? <p className="error-message">{err}</p> :
    <section key="comments-list" className="comments-list">
    <h2>Comments</h2>
      {userLogin.length ? <> 
      {newComment 
        ? <AddComment setNewComment={setNewComment} selectedArticle={selectedArticle} setComments={setComments}/> 
        : <button onClick={handleAddComment}>Add Comment</button> } </>: <p>Login if you'd like to leave a comment</p> }
      {comments.map((comment) => (
        <CommentsItem key={comment.comment_id} comment={comment} selectedArticle={selectedArticle}/>
      ))}
    </section>
    }
  </>
  )
}