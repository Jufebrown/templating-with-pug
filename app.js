`use strict`
const port = process.env.PORT || 3000

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set(`view engine`, `pug`)

app.locals.time = new Date()

app.get(`/`, (req, res, next) => {
  res.render(`index`, {page: 'Home'})
})

app.get(`/about`, (req, res, next) => {
  res.render(`about`, {page: 'About'})
})

app.get(`/inventory`, (req, res, next) => {
  res.render(`inventory`, {page: 'Inventory'})
})

app.use((req, res) => {
  res.render(`index`, {page: 'Home'})
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
