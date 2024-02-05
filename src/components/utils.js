import axios from 'axios'

export function fetchArticles() {
  return axios
  .get('https://news-service-api.onrender.com/api/articles')
  .then((response) => {
    return response.data.articles
  })
  .catch((err) => {
    console.log(err)
    return err
  })
}

export function fetchArticleById(id) {
  return axios
  .get(`https://news-service-api.onrender.com/api/articles/${id}`)
  .then((response) => {
    return response.data.article
  })
  .catch((err) => {
    console.log(err)
    return err
  })
}