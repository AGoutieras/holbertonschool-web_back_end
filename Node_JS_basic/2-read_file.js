const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n').filter((line) => line).slice(1);
    console.log(`Number of students: ${students.length}`);

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
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
