function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
const result = add(2, 3, 6, 7, 9, 9, 9, 9, 9, 9);
console.log(result);