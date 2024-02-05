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