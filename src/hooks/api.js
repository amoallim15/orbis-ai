import request from "request"

const api_key = "wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu"
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api_key}`

export const loadMore = (keyword, page, callback) => {
  const query = url + `&q=${keyword}&page=${page}`
  request(
    {
      url: query,
      json: true,
    },
    (err, res, body) => {
      const articles = body.response.docs
      callback(articles)
    }
  )
}
