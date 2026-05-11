const fs = require('fs')

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'))
      } else {
        const students = data.split('\n').filter(line => line).slice(1)
        console.log(`Number of students: ${students.length}`)

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
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`)
        }
        resolve()
      }
    })
  })
}

module.exports = countStudents
