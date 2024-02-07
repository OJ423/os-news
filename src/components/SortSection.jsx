import { useEffect, useState } from "react";
import SortList from "./SortList";

export default function SortSection({topic, setSearchParams, searchParams}) {
  const [ordered, setOrdered] = useState(null)
  let sortCriteria = ["title", "author", "topic", "created_at", "votes"]
  let orderArr = ["DESC", "ASC"]
  if(topic !== undefined) sortCriteria.splice(-3, 1)

  const setOrderQuery = (direction) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('order', direction)
    setSearchParams(newParams)
  }
  // NEED TO LOOK AT APPENDING ORDER TO EXISTING PARAMS. Maybe look at doing it in the above function
  return (
    <>
      <article className="sort-container">
        <h3>Sort Articles: </h3>
        {sortCriteria.map((sortItem) => (
          <SortList key={sortItem} sortItem={sortItem} setSearchParams={setSearchParams} searchParams={searchParams} />
        ))}
        <h3>Order</h3>
        {orderArr.map((order) => (
          <button key={order} value={order} onClick={() => setOrderQuery(order)}>{order}</button>
        ))}
      </article>
    </>
  );
}
