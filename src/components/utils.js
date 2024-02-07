import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://news-service-api.onrender.com/api/'
});

// Articles

export function fetchArticles(sort = null) {
  let Query = null
  if (sort.sort_by !== null ) {
    Query = `?${Object.keys(sort)}=${Object.values(sort)}`
  }

   return instance
  .get(`articles${Query ? Query : "" }`)
  .then((response) => {
    if(response.status === 400) return 400
    return response.data.articles
  })
}

export function fetchFilteredArticles(topic = null, sort = null) {
  let Query = null
  if (topic.topic !== undefined && sort.sort_by !== null ) {
    Query = `?${Object.keys(topic)}=${Object.values(topic)}&${Object.keys(sort)}=${Object.values(sort)}`
  }
  else if(sort.sort_by !== null && topic.topic === undefined) {
    Query = `?${Object.keys(sort)}=${Object.values(sort)}`
  }
  else if (sort.sort_by === null && topic.topic !== undefined) {
    Query = `?${Object.keys(topic)}=${Object.values(topic)}`
  }

  return instance
  .get(`articles${Query ? Query : "" }`)
  .then((response) => {
    return response.data.articles
  })
}

export function fetchArticleById(id) {
  return instance
  .get(`articles/${id}`)
  .then((response) => {
    return response.data.article
  })
}

export function patchArticleVote(article_id, vote) {
  return instance
  .patch(`articles/${article_id}`,
  {"inc_votes": vote})
  .then((response) => {
    return response.data.article
  })
}

// Users

export function fetchUsers() {
  return instance
  .get('users')
  .then((response) => {
    return response.data.users
  })
}

// Comments

export function fetchCommentsByArticleId(article_id) {
  return instance
  .get(`articles/${article_id}/comments`)
  .then((response) => {
    return response.data.comments
  })
}

export function postNewComment(article_id, body) {
  return instance
  .post(`articles/${article_id}/comments`, body)
  .then((response) => {
    return response.data.comments
  })
}

export function deleteComment(comment_id) {
  return instance
  .delete(`comments/${comment_id}`)
  .then((response) => {
    return "Comment deleted"
  })
}
// Topics

export function fetchTopics() {
  return instance
  .get('topics')
  .then((response) => {
    return response.data.topics
  })
}