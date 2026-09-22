/*let name = "Kishor";
console.log("Hello " + name);



let a = 10;
let b = 3;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);   
console.log(a ** b);

// comparison operator
console.log(10!=="10");

let a = 10;
let b = 20;
/// equal value
console.log("10 == '10' :", a == "10");
// equal value and type
console.log("10 === '10' : ", a === "10");
// not equal
console.log("10 != 20 :", a != b);
// not equal or type
console.log("10 !== '10' :", a !== b);

console.log("20 > 10 :", a > b);

console.log("10 < 20 :", a < b);

console.log("10 >= 20: ", a >= b);

console.log("10 <= 20 : ", a <= b);

let age = 25;
let hasLicense = true;
console.log(age >= 18 && hasLicense); 
let age1 = 16;
let hasPermission = false;
console.log(age1 >= 18 && hasPermission); 
let isLoggedIn = true;
console.log(isLoggedIn);


// conditional statements:

let marks = 75;
if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// ternary operator it is the short of if else statement
// syntax condition ? expression1 : expression2;
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// loop is used to excute a block of code as long as a specified condition is staisfied.
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}
let i = 1;
while (i <= 5) {
    console.log("Iteration " + i);
    i++;
}
do {
    console.log("Iteration " + i);
    i++;
}while (i <= 5);

// for of loop is used to iterate over the elements of an iterable object such as an array or a string.
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}*/

// for in loop is used to iterate over the properties and keys of an object.
let student = {
    name: "Kishor",
    age: 25,
    grade: "A"
}; 
for (let key in student) {
    console.log(key, ":", student[key]);
}