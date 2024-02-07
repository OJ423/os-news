import SortList from "./SortList";

export default function SortSection({topic}) {
  let sortCriteria = ["title", "author", "topic", "created_at"]
  if(topic !== undefined) sortCriteria.splice(-2, 1)
  return (
    <>
      <article className="sort-container">
        <h3>Sort Articles: </h3>
        {sortCriteria.map((sortItem) => (
          <SortList key={sortItem} sortItem={sortItem} topic={topic}/>
        ))}
      </article>
    </>
  );
}
