const express = require('express');
const fs = require('fs');

const database = process.argv[2];
const app = express();
const port = 1245;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(database)
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.send(`This is the list of our students\n${result}`);
    })
    .catch(() => {
      res.status(500).send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port);

module.exports = app;
