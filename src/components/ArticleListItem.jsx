export default function ArticleListItem({article}) {
  return( 
    <section className="article-list-item">
      <img src={article.article_img_url} alt={`${article.title} cover image`} />
      <div>
        <h2>{article.title}</h2>
        <p className="meta">{article.topic}</p>
        <div className="meta">{article.comment_count} comments</div>
        <div className="meta">{article.votes} votes</div>
        <p className="date">{article.created_at.slice(0,10)}</p>
      </div>
    </section>
  )
}