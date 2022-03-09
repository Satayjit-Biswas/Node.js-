// import x from './app'it's work javaScript but Node.js not allow export and import.
let app = require("./app");
var a, b, c;
a = 10;
b = 20;
c = 5;
// console.log(a + b + c);
// console.warn(app.x);

// array

const arr1 = [1, 4, 3, 66, 84];

arr1.map((item) => {
    console.log(item);
});
console.log("-----");

const arr2 = arr1.filter((item) => {
    return item % 2 == 1;
});
console.log(arr2);
// 45:09
