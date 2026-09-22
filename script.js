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
}

// for in loop is used to iterate over the properties and keys of an object.
let student = {
    name: "Kishor",
    age: 25,
    grade: "A"
}; 
for (let key in student) {
    console.log(key, ":", student[key]);
}

// funtion is a block of code that can be called and executed when needed.
function greet(name) {
    console.log("Hello " + name);
}
greet("Kissu"); 

// function with parameters
function greer(name) {
    console.log("hii ciet " + name);
}
greer("kishor"); 

// function with return value
function greet(a,b) {
    return a + b 

}
let a = add(10, 20);
console.log(a);  

// arrow function is a shorter syntax for writing functions in JavaScript. it provides modern function
function add(a, b) {
    return a + b;
}
// arrow function
const add = (a, b) => {
    return a + b;
};
const add = (a, b) => a + b;  


// a college student want to caluclate grade based on marks . write a function that makes as input and returns  a= 90+ b = 75+ c = 60+ and fail =  below 60 and return thr function
function calculateGrade(marks) {
    if (marks >= 90) {
        console.log ("A+");
    } else if (marks >= 75) {
        console.log("B+");
    } else if (marks >= 60) {
        console.log("C+");
    } else {
        console.log("Fail");
    }
} 

// An ATM should allow withdraw only if the balance is sufficient create  an function that checks whether the withdraw is possible.
function isWithdrawPossible(balance, amount) {
    return balance >= amount;
}
if (isWithdrawPossible(1000, 500)) {
    console.log("Withdraw successful");
} else {
    console.log("Insufficient balance");
} 

// employee receives 10 percent bonous on their salary write a function to calculate the bonous amount.
function calculateBonus(salary) {
    return salary * 0.1;
}
console.log("Bonus amount: " + calculateBonus(50000));

// scope : it derermines whether a variable is accessible global scope and local scope and block scope
let company = "ABC Corporation"; 
function employeeDetails() {
    let employeeName = "Kishor"; 
    console.log("Employee Name: " + employeeName);
    console.log("Company: " + company); 

    if (true) {
        let salary = 50000;
        const department = "IT";
        console.log("Salary: " + salary);
        console.log("Department: " + department);
    }

    
}

employeeDetails();
console.log("Company: " + company); 

// Array it stores multiple values in a single variable. syntax: let arrayName = [value1, value2, value3, ...];


let a = [10, 20, 30, 40, 50];
console.log(a);
console.log(a[0]);

// array methods list out the methods in array:
console.log(a.length);
console.log(a.push(60));
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.shift());
console.log(a);
console.log(a.unshift(5));
console.log(a); 

let numbers = [10, 20, 30,];
numbers.push(30);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(10);
console.log(numbers);
let numbers1 = [10, 20, 30, 40];
console.log(numbers1);
console.log(numbers1.includes(30));
console.log(numbers1.indexOf(30)); 


let fruits = ["apple", "banana", "orange"];
console.log(fruits);
let result = fruits.join(", ");
console.log(result);
let number1 = [10, 20];
let number2 = [30, 40];
let result2 = number1.concat(number2);
console.log(result2);

// array [10,20,30,40] first we have to reverse the array and then sort it .
let numbers = [10, 20, 30, 40];
let reversedNumbers = numbers.reverse();
console.log("Reversed Array: " + reversedNumbers);
let sortedNumbers = reversedNumbers.sort((a, b) => a - b);
console.log("Sorted Array: " + sortedNumbers);

// advance array methods math methods create a new array populated with rhe result of calling up provided function on every element in the calling array.
const numbers = [1,2,3,4,5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);
console.log(numbers);

// filter method creates a new array with all elements that pass the condition .example:
let numbers1 = [1,2,3,4,5];
let result = numbers.filter(function(num) {
    return num > 20;

});
console.log(result);*/

// reduce method used to reduce the all array values into a single value . example:
let numbers = [10,20,30,40,];
let sum = numbers.reduce(function(total, num) {
    return total + num;

}, 0);
console.log("Sum: " + sum);
