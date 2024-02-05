export default function ArticleDetail({selectedArticle}) {
  return (
    <section className='read-article'>
    <h1>{selectedArticle.title}</h1>
    <div>
    <div className='meta'>{selectedArticle.created_at.slice(0,10)}</div>
    <div className='meta'>{selectedArticle.comment_count} comments</div>
    <div className='meta'>{selectedArticle.votes} votes</div>
    <img src={selectedArticle.article_img_url} alt={selectedArticle.title} />
    <p>{selectedArticle.body}</p>
    </div>
    </section>)
}