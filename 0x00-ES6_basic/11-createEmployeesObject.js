export default function createEmployeesObject(department, employees) {
  const object = {
    [department]: employees,
  };
  return object;
}
