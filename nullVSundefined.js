let number;
console.log(number);

function add(numberOne, numberTwo) {
    const result = numberOne + numberTwo;
    return;
}

function add(numberOne, numberTwo) {
    const result = numberOne + numberTwo;
}

function add(numberOne, numberTwo) {
    const result = numberOne + numberTwo;
    return numberTwo;
}
console.log(add(3));

function add(numberOne = undefined) {
    return numberOne;
}
console.log(add());

let number = undefined;
console.log( number );

let numbers = [1, 2, 3, 5, 5];
console.log(numbers[10]);

let students = { id: 1, name: "shuvo", age: 22 };
console.log(students["color"]);

let numbers = [1, 2, 3, 4, 5];
numbers = [];
console.log(numbers[10]);

let numbers = [1, 2, 3, 4, 5];
numbers = null;
console.log(numbers);