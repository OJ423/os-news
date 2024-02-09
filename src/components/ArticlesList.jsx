import ArticleListItem from "./ArticleListItem";
import Pagination from "./Pagination";
import SortSection from "./SortSection";

export default function ArticlesList({articlesList, isLoading, err, setSearchParams, searchParams, sortByQuery, pagMax, setPagMax, pQuery}) {  
  return (
  <>
  <h1>Articles</h1>
  {isLoading ? 
    <p>Articles loading</p> :
    err ? <p className="error-message">err</p> : 
    <>
    <SortSection setSearchParams={setSearchParams} sortByQuery={sortByQuery} searchParams={searchParams} />
    <section className="articles-container">
      {articlesList.map((article)=> (
        <ArticleListItem key={article.article_id} article={article}/>
        ))}
    </section>
    <Pagination articlesList={articlesList} setSearchParams={setSearchParams} searchParams={searchParams} pagMax={pagMax} setPagMax={setPagMax} pQuery={pQuery}/>
    </>
 }
  </>)
}