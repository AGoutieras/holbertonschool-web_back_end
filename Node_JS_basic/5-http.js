const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((result) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245, 'localhost');

module.exports = app;
