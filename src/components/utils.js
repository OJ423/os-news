import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://news-service-api.onrender.com/api/'
});

// Articles

export function fetchArticles() {
  return instance
  .get('articles')
  .then((response) => {
    return response.data.articles
  })
  .catch((err) => {
    console.log(err)
    return err
  })
}

export function fetchArticleById(id) {
  return instance
  .get(`articles/${id}`)
  .then((response) => {
    return response.data.article
  })
  .catch((err) => {
    console.log(err)
    return err
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
  .catch((err) => {
    console.log(err)
    return err
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