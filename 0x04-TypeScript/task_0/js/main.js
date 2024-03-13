var student1 = {
    firstName: "Jude",
    lastName: "Agbo",
    age: 30,
    location: "Abakaliki"
};
var student2 = {
    firstName: "Jery",
    lastName: "Ekpo",
    age: 31,
    location: "Abakaliki"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (student) {
    var tr = table.insertRow();
    Object.keys(student).forEach(function (key) {
        var td = tr.insertCell();
        td.innerText = student[key].toString();
    });
});
console.log(table);
