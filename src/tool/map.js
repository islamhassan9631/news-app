
const request = require('request')

const map = (callback) => {
    const Url = "http://newsapi.org/v2/everything?q=apple&from=2022-02-12&to=2022-02-12&sortBy=popularity&apiKey=64afb08fac8f4977a2301a65a030d252"
    request({ url: Url,json: true},
     
     (error, response) => {
        if (error) {
            callback('unable to connect service', undefined)
        } else if (response.body.message) {
            callback(response.body.message)
        } else if (response.body.articles.length == 0) {
            callback('not found ', undefined)
        } else {
            callback(undefined, response.body.articles)
        }
    })
}

module.exports = map
