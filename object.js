const students = [
    { id: 21, name: 'Shuvo' },
    { id: 33, name: 'Joy' },
    { id: 8, name: 'Akash' },
    { id: 99, name: 'Manna' },
    { id: 26, name: 'Dipjol' },
];

const names = [];

students.map((element) => {
    names.push(element.name);
});
console.log(names);

for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
}
console.log(names);

const names = students.map(student => student.name);
console.log(names);

const names = students.map((element) => {
    return element.name;
});
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.find(s => s.id < 40);
console.log(bigger);