// Concatenation and String Interpolation:
// Demonstrates concatenation using the + operator and string interpolation using template literals.
const name = "blade";
const count = 58;
console.log(name + count + "value");
console.log(`Hello my name is ${name} and my count is ${count}`);

// String Object:
// Creates a string object using the String constructor (new String).
// This is uncommon in everyday JavaScript and is typically not needed.
const newName = new String("blade-run-com");
console.log(newName[0]);
console.log(newName.__proto__);

// String Methods:
// Utilizes various string methods such as length, toUpperCase, charAt, indexOf, substring, and slice.
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf("a"));

// Trimming Whitespace:
// Uses the trim method to remove leading and trailing whitespaces from a string.
const formString = "    blade   ";
console.log(formString);
console.log(formString.trim());

// String Manipulation:
// Shows how to replace a substring in a URL and check if a string includes a specific substring.
const url = "https://google.com/home%15subhome";
console.log(url.replace('%15', "/"));
console.log(url.includes("bing"));

// String Splitting:
// Uses the split method to split the newName string into an array based on the delimiter "-".
console.log(newName.split("-"));
