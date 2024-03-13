interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jude",
  lastName: "Agbo",
  age: 30,
  location: "Abakaliki",
}

const student2: Student = {
  firstName: "Jery",
  lastName: "Ekpo",
  age: 31,
  location: "Abakaliki",
}

const studentsList = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(function(student) {
  let tr = table.insertRow();

  Object.keys(student).forEach(function(key) {
    let td = tr.insertCell();
    td.innerText = student[key].toString();
  });
});

console.log(table);
