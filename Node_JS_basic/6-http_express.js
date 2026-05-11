const express = require('express')
const app = express()
const port = 1245

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.listen(1245, 'localhost')

module.exports = app
