export default function CommentsItem({comment}) {
  return (
    <section className="comment-card">
      <p>{comment.body}</p>
      <div>
        <figure className="meta">{comment.author}</figure>
        <figure className="meta">{comment.votes} votes</figure>
        <time className="meta">{comment.created_at.slice(0,10)}</time>
      </div>
    </section>
  )
}