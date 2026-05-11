const http = require('http')
const fs = require('fs')
const database = process.argv[2]

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'))
      } else {
        const students = data.split('\n').filter(line => line).slice(1)
        let result = `Number of students: ${students.length}\n`

        const fields = {}
        students.forEach(line => {
          const field = line.split(',')[3]
          const student = line.split(',')[0]
          if (!fields[field]) {
            fields[field] = []
          }
          fields[field].push(student)
        })
        for (const key in fields) {
          result += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`
        }
        resolve(result)
      }
    })
  })
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type' : 'text/plain'})
  
  if (req.url === '/') {
    res.end('Hello Holberton School!')
  } else if (req.url === '/students') {
    countStudents(database)
    .then((result) => {
      res.end(`This is the list of our students\n${result}`)
    })
  }
})



app.listen(1245, 'localhost')

module.exports = app
