import { useEffect, useState } from "react";
import SortList from "./SortList";

export default function SortSection({topic, setSearchParams, searchParams, sortByQuery}) {
  let sortCriteria = ["title", "author", "topic", "created_at", "votes", "comment_count"]
  let orderArr = ["DESC", "ASC"]
  if(topic !== undefined) sortCriteria.splice(-4, 1)

  const setOrderQuery = (direction) => {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('order', direction)
      setSearchParams(newParams)
  }

  return (
    <>
      <article className="sort-container">
        <h3>Sort Articles: </h3>
        {sortCriteria.map((sortItem) => (
          <SortList key={sortItem} sortItem={sortItem} sortByQuery={sortByQuery} setSearchParams={setSearchParams} searchParams={searchParams} />
        ))}
        <h3>Order</h3>
        {orderArr.map((order) => (
          <button key={order} value={order} onClick={() => setOrderQuery(order)}>{order}</button>
        ))}
      </article>
    </>
  );
}
