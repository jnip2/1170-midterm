const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/menu', (req, res) => {
    res.render('menu')
})

app.get('/about-us', (req, res) => {
    res.render('about-us')
})

app.get('/online-order', (req, res) => {
    res.render('online-order')
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})

app.use(express.static('public'))