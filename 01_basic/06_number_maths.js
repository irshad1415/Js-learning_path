// Initializing a constant variable 'score' with the value 100
const score = 100;
// Logging the value of 'score' to the console
console.log(score); // Output: 100

// Initializing a constant variable 'balance' as a new Number object with the value 100
const balance = new Number(100);
// Logging the value of 'balance' to the console
console.log(balance); // Output: [Number: 100]

// Logging the length of the string representation of 'balance'
console.log(balance.toString().length); // Output: 3

// Logging 'balance' with one decimal place
console.log(balance.toFixed(1)); // Output: 100.0

// Initializing a variable 'otherNumber' with the value 123.8963
const otherNumber = 123.8963;
// Logging 'otherNumber' with precision 4
console.log(otherNumber.toPrecision(4)); // Output: 123.9

// Initializing a constant variable 'hundreds' with the value 10000000
const hundreds = 10000000;
// Logging 'hundreds' with Indian English locale formatting
console.log(hundreds.toLocaleString('en-IN')); // Output: 1,00,00,000

//********************maths******************* */

// Logging the Math object
console.log(Math); // Output: [object Math]

// Calculating the absolute value of -4
console.log(Math.abs(-4)); // Output: 4

// Rounding 4.6 to the nearest integer
console.log(Math.round(4.6)); // Output: 5

// Ceil of 4.2 (rounding up)
console.log(Math.ceil(4.2)); // Output: 5

// Floor of 4.9 (rounding down)
console.log(Math.floor(4.9)); // Output: 4

// Finding the maximum value among the provided numbers
console.log(Math.max(4, 59, 16, 61, 31)); // Output: 61

// Finding the minimum value among the provided numbers
console.log(Math.min(45, 6464, 64, 64, 94, 964)); // Output: 45

// Generating a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: Random floating-point number

// Generating a random floating-point number between 1 and 10 (inclusive)
console.log((Math.random() * 10) + 1); // Output: Random floating-point number between 1 and 10

// Generating a random integer between 10 and 20 (inclusive)
console.log(Math.floor(Math.random() * 10) + 10); // Output: Random integer between 10 and 20

// Generating a random integer between 'min' and 'max' (inclusive)
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between 10 and 20
