const numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
    console.log(number);
});


const students = [
    { id: 1, name: "shuvo", age: 29, color: "Black" },
    { id: 1, name: "shuvo", age: 29, color: "Black" },
    { id: 1, name: "shuvo", age: 29, color: "Black" },
    { id: 1, name: "shuvo", age: 29, color: "Black" },
    { id: 1, name: "shuvo", age: 29, color: "Black" },
];

students.forEach( ( element, index, array ) => {
    console.log(array);
});