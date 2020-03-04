const numbers = [3, 4, 5, 7, 8, 9];

const output = [];
for (let i = 0; i < numbers.length; i++) {
    output.push(numbers[i] * numbers[i]);
}

const result = numbers.map((element) => {
    return element * element;
});
console.log(result);

const result = numbers.filter(element => element > 5);
console.log(result);

const result = numbers.filter((element) => {
    return element % 2 === 0;
});
console.log(result);

const result = numbers.filter(element => element === 5);
console.log(result);

const result = numbers.filter(element => element % 2 === 0);
console.log(result);