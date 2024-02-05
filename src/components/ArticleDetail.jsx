export default function ArticleDetail({selectedArticle}) {
  return (
    <article className='read-article'>
    <h1>{selectedArticle.title}</h1>
    <div>
    <figure className='meta'>{selectedArticle.created_at.slice(0,10)}</figure>
    <figure className='meta'>{selectedArticle.comment_count} comments</figure>
    <figure className='meta'>{selectedArticle.votes} votes</figure>
    <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
    <p>{selectedArticle.body}</p>
    </div>
    </article>)
}