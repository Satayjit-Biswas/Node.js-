let a = 10;
let b = 20;

// setTimeout(() => {
//     b = 30;
// }, 2000);

const over = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
}).then((data) => {
    b = data;
    console.log(a + b);
});

console.log(a + b);
