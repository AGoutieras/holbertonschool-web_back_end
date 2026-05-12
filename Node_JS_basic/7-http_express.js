const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(database)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    });
});

app.listen(port, 'localhost');

module.exports = app;
