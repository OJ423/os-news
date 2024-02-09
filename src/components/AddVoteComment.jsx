import { useContext, useEffect, useState } from "react"
import { patchCommentVote } from "./utils"
import RenderToggleContext from "./context/RenderToggleContext"

export default function AddVote({comment, setVoteCount}) {
  const {render, setRender} = useContext(RenderToggleContext)
  const [hasVoted, setHasVoted] = useState(false)
  const [err, setErr] = useState(null)
  let voteArr = []

  function increaseVotes() {
    setVoteCount((currentVoteCount) => currentVoteCount + 1)
    voteArr.push(comment.comment_id)
    voteArr.includes(comment.comment_id) ? setHasVoted(true) : setHasVoted(false)
    setErr(null)
    setRender(!render)
    patchCommentVote(comment.comment_id, 1).then((response) => {
    })
    .catch((err) => {
      setVoteCount((currentVoteCount) => currentVoteCount -1)
      setErr('Something went wrong, please refresh the page & try again')
    })
  }

  function removeVote() {
    setVoteCount((currentVoteCount) => currentVoteCount - 1)
    voteArr = voteArr.filter((comment) => comment !== comment.comment_id)
    voteArr.includes(comment.comment_id) ? setHasVoted(true) : setHasVoted(false)
    setErr(null)
    patchCommentVote(comment.comment_id, -1).then((response) => {
    })
    .catch((err) => {
      setVoteCount((currentVoteCount) => currentVoteCount +1)
      setErr('Something went wrong, please refresh the page & try again')
    })
  }

  useEffect(() => {
    setHasVoted(false)
  }, [comment])


  return (
    <>
    {err ? <p className="error-message">{err}</p> : 
    hasVoted ? <button className="vote-button" onClick={removeVote}>Remove Vote</button> :
    <button className="vote-button" onClick={increaseVotes}>Add Vote</button>
    }
  </>
  )
}