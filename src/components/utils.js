import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://news-service-api.onrender.com/api/'
});

// Articles

export function fetchArticles(sort, order, topic, limit, p) {
   return instance
  .get(`articles`, {
    params: {
      "topic": topic,
      "sort_by": sort,
      "order": order,
      "limit": limit,
      "p": p
    }
  })
  .then((response) => {
    if(response.status === 400) return 400
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

export function postNewArticle(body) {
  return instance
  .post(`articles`, body)
  .then((response) => {
    return response.data.article
  })
}

export function deleteArticle(article_id) {
  return instance
  .delete(`articles/${article_id}`)
  .then((response) => {
    return "Comment deleted"
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

export function patchCommentVote(comment_id, vote) {
  return instance
  .patch(`comments/${comment_id}`,
  {"inc_votes": vote})
  .then((response) => {
    return response.data.article
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

export function postNewTopic(body) {
  return instance
  .post('topics', body)
  .then((response) => {
    return response.data.topics
  })
}