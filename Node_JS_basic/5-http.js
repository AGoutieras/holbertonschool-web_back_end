const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter((line) => line).slice(1);
        let result = `Number of students: ${students.length}\n`;

        const fields = {};
        students.forEach((line) => {
          const field = line.split(',')[3];
          const student = line.split(',')[0];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student);
        });
        Object.keys(fields).forEach((key) => {
          result += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
        });
        resolve(result.trimEnd());
      }
    });
  });
}

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
        res.end('This is the list of our students\nCannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
