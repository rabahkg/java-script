// arrow function is a syntax for writing function in jawa script . introduced in es6(ecma script 6)
// -----function decleration------
// function add(a,b{
// })

// console.log(add(2,4));

// using arrow function
const add = (a,b) => a + b;
console.log(add(2,2));


// ------single parameter (no paranthese needed)------
const square = (x) => x * x;
console.log("square of 4: ",square (4));

// ------no parameters(empty parentheses)
const greet = () => console.log("hlo...");
greet();

// ----multi-line function ------
const divide = (a,b) => {
const result =a / b;
return result;
}

console.log("division of 10,2 is:",divide(10,2));

