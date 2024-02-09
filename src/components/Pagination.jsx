import { useEffect } from "react";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";


export default function Pagination({setSearchParams, pagMax, setPagMax, pQuery, searchParams, articlesList}) {
  useEffect(() => {
    if(articlesList.length) {
      setPagMax(Math.ceil((+articlesList[0].total_count / 9)))
    }  
  }, [])
 
  const handleNextArticle = () => {
    if(!pQuery) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('p', "2")
      setSearchParams(newParams)
    }
    if(pQuery < pagMax && pQuery >= 1) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('p', +pQuery + 1)
      setSearchParams(newParams)
    }
  } 

  const handlePreviousArticle = () => {
    if(pQuery > 1) {
      const newParams = new URLSearchParams(searchParams)
      newParams.set('p', +pQuery - 1)
      setSearchParams(newParams)
    }
  }

  return (<>
    <section className="pagination-container">
      <div className="previous-article">
        {+pagMax === 1 ? null : +pQuery === 1 ? null :
          <IoArrowBackOutline aria-label="Navigate to previous page of articles" onClick={handlePreviousArticle} />
        }
      </div>
      <div className="pagination-info">
        <p>Page {pQuery ? pQuery : 1 } of {pagMax}</p>
      </div>
      <div className="next-article">
        {+pagMax === 1 ? null : +pagMax === +pQuery ? null :
          <IoArrowForward aria-label="Navigate to next page of articles" onClick={handleNextArticle}/>
        }
      </div>

    </section>
  </>)
}