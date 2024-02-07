import ArticleListItem from "./ArticleListItem";
import SortList from "./SortList";
import SortSection from "./SortSection";

export default function ArticlesList({articlesList, isLoading}) {
  return (<>
  {isLoading ? 
    <p>Articles loading</p> :
    <>
    <SortSection />
    {articlesList.map((article)=> (
      <ArticleListItem key={article.article_id} article={article}/>
    ))}
  </>
 }
  </>)
}