import ArticleListItem from "./ArticleListItem";
import SortList from "./SortList";
import SortSection from "./SortSection";

export default function ArticlesList({articlesList, isLoading, err, setSearchParams, sortByQuery}) {
  return (<>
  {isLoading ? 
    <p>Articles loading</p> :
    err ? <p className="error-message">err</p> : 
    <>
    <SortSection setSearchParams={setSearchParams} sortByQuery={sortByQuery} />
    {articlesList.map((article)=> (
      <ArticleListItem key={article.article_id} article={article}/>
    ))}
    </>
 }
  </>)
}