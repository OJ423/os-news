import { Link } from 'react-router-dom'


export default function ArticleListItem({article}) {


  return( 
    <section className="article-list-item">
      <Link to={`/articles/${article.article_id}`}>
      <img src={article.article_img_url} alt={`${article.title} cover image`} />
      </Link>
      <div>
      <Link to={`/articles/${article.article_id}`} ><h2>{article.title}</h2></Link>
        <Link to={`/${article.topic}/articles`}><div className="meta">{article.topic}</div></Link>
        <div className="meta">{article.comment_count} comments</div>
        <div className="meta">{article.votes} votes</div>
        <p className="date">{article.created_at.slice(0,10)}</p>
      </div>
    </section>
  )
}