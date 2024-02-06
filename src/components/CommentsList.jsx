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

  useEffect(() => {
    fetchCommentsByArticleId(selectedArticle.article_id)
    .then((apiResponse) => {
      setComments(apiResponse)
      setIsLoading(false)
    })
  },[article_id])

  function handleAddComment() {
    setNewComment(true)
  }
  // Going to add Comments for dependent on state so the form (separate component) appears on the same page.
  // Have to sort login so only logged in users can vote.
  return (
    <>
  {isLoading ? <p>Comments loading</p> : 
  <section className="comments-list">
  <h2>Comments</h2>
    {userLogin.length ? <> 
    {newComment ? <AddComment setNewComment={setNewComment} selectedArticle={selectedArticle} setComments={setComments}/> : <button onClick={handleAddComment}>Add Comment</button> } </>: null }
    {comments.map((comment) => (
      <CommentsItem key={comment.comment_id} comment={comment}/>
    ))}
  </section>

  }
  </>
  )
}