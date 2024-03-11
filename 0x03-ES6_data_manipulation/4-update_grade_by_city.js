export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }
  const cityLower = city.toLowerCase();
  return getListStudents.filter((student) => student.location.toLowerCase() === cityLower)
    .map((student) => {
      const grades = newGrades.find((grade) => grade
        .studentId === student.id);

      return {
        ...student,
        grade: grades ? grades.grade : 'N/A',
      };
    });
}
