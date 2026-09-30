//Example 1//
console.log("This is my first program")
console.log("Hello John your monthly salary is 50000")

//Example 2//
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log("The Sum of " + num1 + " and " + num2 + " is equals to " + sum);


//Example 3//
const prompt = require('prompt-sync')();
console.log("Starting")
const name = prompt('Enter your name: ');
console.log("Hello," + name);

const number = parseInt(prompt("Enter a number: "));

if (number > 0)
{
    console.log("The number is positive");
}

else if (number == 0)
{
    console.log("The number is Zero");
}

else
{
    console.log("The number is Negative");
}