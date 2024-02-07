import { Link } from "react-router-dom"

export default function({sortItem, topic}) {
  return <>
  {topic !== undefined ? <Link to={`/${topic}/articles?sort_by=${sortItem}`}><button>{sortItem}</button></Link> :
  <Link to={`/articles?sort_by=${sortItem}`}><button>{sortItem}</button></Link>
  }
  </>
}