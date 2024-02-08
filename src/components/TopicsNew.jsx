import { useState } from "react";
import { postNewTopic } from "./utils";

export default function TopicsNew({setNewTopic, topics, setSelectNewTopic}) {
  const [newSlug, setNewSlug] = useState()
  const [newDescription, setNewDescription] = useState()
  const [inputError, setInputError] = useState(null)
  const topicsSlugArr = topics.map((topic) => {return topic.slug})

  const handleSlug = (event) => {
    if(/[^a-z]/g.test(event.target.value)) setInputError("Please only use lowercase letters and no spaces")
    if(!/[^a-z]/g.test(event.target.value)) setInputError(null)
    setNewSlug(event.target.value)
  }

  const handleDesc = (event) => {setNewDescription(event.target.value)}

  function handleAddTopic(event){
    event.preventDefault();
    const topicToPost = {"slug": newSlug, "description": newDescription}
    if(topicsSlugArr.includes(newSlug)) {
      setInputError("Topics slug already exists. Try a different one")
    }
    else {
      postNewTopic(topicToPost)
      setNewTopic(newSlug)
      setNewSlug("")
      setNewDescription("")
      setSelectNewTopic(false)
    }
  }

  console.log()
  return (
    <>
      <h2>Add a new topic</h2>
      <p>Got things on your mind that you want to write about? Create a topic for it.</p>
      <form onSubmit={handleAddTopic}>
        <label htmlFor="slug">Add the topic slug. Only lowercase letters.</label>
        <input type="text" required id="slug" value={newSlug} onChange={handleSlug} />
        <label htmlFor="desc">Please provide a description of the topic.</label>
        <input type="text" required id="desc" value={newDescription} onChange={handleDesc} />
        <button>Submit</button>
      </form>
      {inputError ? <p className="error-message">{inputError}</p> : null}
    </>)
}