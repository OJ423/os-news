import { useEffect, useState } from "react"
import { fetchCommentsByArticleId } from "./utils"
import CommentsItem from "./CommentsItem"

export default function CommentsList({selectedArticle}) {
  const article_id = selectedArticle.article_id
  const [comments, setComments] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchCommentsByArticleId(selectedArticle.article_id)
    .then((apiResponse) => {
      setComments(apiResponse)
      setIsLoading(false)
    })
  },[article_id])
  return (
    <>
  {isLoading ? <p>Comments loading</p> : 
  <section className="comments-list">
  <h2>Comments</h2>
  {comments.map((comment) => (
    <CommentsItem key={comment.comment_id} comment={comment}/>
  )
  )}
  </section>

  }
  </>
  )
}