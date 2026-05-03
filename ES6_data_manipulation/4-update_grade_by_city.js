export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(student => student.location === city)
  return filteredStudents.map(student => {
    const foundGrade = newGrades.find(grade => grade.studentId === student.id)
    if (foundGrade) { 
      return { ...student, grade: foundGrade.grade }
    }
    else {
      return { ...student, grade: 'N/A'}
    }
  })
}
