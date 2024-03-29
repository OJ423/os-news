import { useContext, useEffect, useState } from "react"
import { patchArticleVote } from "./utils"
import RenderToggleContext from "./context/RenderToggleContext"

export default function AddVote({selectedArticle, setVoteCount}) {
  const {render, setRender} = useContext(RenderToggleContext)
  const [hasVoted, setHasVoted] = useState(false)
  const [err, setErr] = useState(null)
  let voteArr = []

  function increaseVotes() {
    setVoteCount((currentVoteCount) => currentVoteCount + 1)
    voteArr.push(selectedArticle.article_id)
    voteArr.includes(selectedArticle.article_id) ? setHasVoted(true) : setHasVoted(false)
    setErr(null)
    setRender(!render)
    patchArticleVote(selectedArticle.article_id, 1).then((response) => {
    })
    .catch((err) => {
      setVoteCount((currentVoteCount) => currentVoteCount -1)
      setErr('Something went wrong, please refresh the page & try again')
    })
  }

  function removeVote() {
    setVoteCount((currentVoteCount) => currentVoteCount - 1)
    voteArr = voteArr.filter((article) => article !== selectedArticle.article_id)
    voteArr.includes(selectedArticle.article_id) ? setHasVoted(true) : setHasVoted(false)
    setErr(null)
    patchArticleVote(selectedArticle.article_id, -1).then((response) => {
    })
    .catch((err) => {
      setVoteCount((currentVoteCount) => currentVoteCount +1)
      setErr('Something went wrong, please refresh the page & try again')
    })
  }

  useEffect(() => {
    setHasVoted(false)
  }, [selectedArticle])


  return (
    <>
    {err ? <p className="error-message">{err}</p> : 
    hasVoted ? <button className="vote-button" onClick={removeVote}>Remove Vote</button> :
    <button className="vote-button" onClick={increaseVotes}>Add Vote</button>
    }
  </>
  )
}