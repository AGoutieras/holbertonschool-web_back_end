import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    res.status(200);
    readDatabase(process.argv[2])
      .then((fields) => {
        let result = 'This is the list of our students\n';
        Object.keys(fields).sort().forEach((key) => {
          result += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}\n`;
        });
        res.send(result);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    res.status(200);

    if (req.params.major !== 'CS' && req.params.major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((fields) => {
          res.send(`List: ${fields[req.params.major].join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    }
  }
}

export default StudentsController;
