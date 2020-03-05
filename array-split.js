const numbs = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = numbs.slice(2, 5);

const removed = numbs.splice(2, 5, "ami", "tumi", "shuvo");
// console.log(removed);
// console.log(numbs);

const join = removed.join();
const join2 = numbs.join();
console.log(join2);
