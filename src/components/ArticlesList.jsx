import ArticleListItem from "./ArticleListItem";
import SortList from "./SortList";
import SortSection from "./SortSection";

export default function ArticlesList({articlesList, isLoading, err}) {
  return (<>
  {isLoading ? 
    <p>Articles loading</p> :
    err ? <p className="error-message">err</p> : 
    <>
    <SortSection />
    {articlesList.map((article)=> (
      <ArticleListItem key={article.article_id} article={article}/>
    ))}
    </>
 }
  </>)
}