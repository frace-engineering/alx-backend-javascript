export default function getListStudentIds(getListStudents, city) {
  if (Array.isArray(getListStudents)) {
    const cityLower = city.toLowerCase();
    return getListStudents.filter((student) => student.location.toLowerCase() === cityLower);
  }
  return [];
}
