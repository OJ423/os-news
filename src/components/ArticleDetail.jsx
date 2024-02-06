import { useState } from "react"
import AddVote from "./AddVote"

export default function ArticleDetail({selectedArticle, setSelectedArticle}) {
  const [voteCount, setVoteCount] = useState(selectedArticle.votes)
  return (
    <article className='read-article'>
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
    </article>)
}