
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');
const views = path.join(__dirname, '../templates/views')
app.set('views', views)

const map = require('./tool/map')
app.get('/', (req, res) => {
    map((error, data) => {
        if (error) {
            return res.send({
                error: error
            })
        } else {
            res.render('index', {
               news: data
            })
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})