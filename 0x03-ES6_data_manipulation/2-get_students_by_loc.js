export default function getListStudentIds(getListStudents, city) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.filter((student) => student.location.toLowerCase() === city.toLowerCase());
  }
  return [];
}
