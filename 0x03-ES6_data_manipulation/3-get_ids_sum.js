export default function getStudentIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
