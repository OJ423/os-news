import ArticleListItem from "./ArticleListItem";

export default function ArticlesList({articlesList, isLoading}) {

  return (<>
  {isLoading ? <p>Articles loading</p> : 
  articlesList.map((article)=> (
    <ArticleListItem key={article.article_id} article={article}/>
  ))
 }
  </>)
}