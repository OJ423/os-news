import ArticleListItem from "./ArticleListItem";
import SortSection from "./SortSection";

export default function ArticlesList({articlesList, isLoading, err, setSearchParams, searchParams, sortByQuery}) {
  return (<>
  {isLoading ? 
    <p>Articles loading</p> :
    err ? <p className="error-message">err</p> : 
    <>
    <SortSection setSearchParams={setSearchParams} sortByQuery={sortByQuery} searchParams={searchParams} />
    {articlesList.map((article)=> (
      <ArticleListItem key={article.article_id} article={article}/>
    ))}
    </>
 }
  </>)
}