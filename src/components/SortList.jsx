export default function({sortItem, setSearchParams, searchParams}) {

  const setSortBy = (sort) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('sort_by', sort)
    setSearchParams(newParams)
  }
  return <button onClick={() => setSortBy(sortItem)}>{sortItem}</button>

}