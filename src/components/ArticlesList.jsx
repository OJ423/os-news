import ArticleListItem from "./ArticleListItem";

export default function ArticlesList({articlesList}) {

  return (<>
  {articlesList.map((article)=> (
    <ArticleListItem key={article.article_id} article={article}/>
  ))}
  </>)
}