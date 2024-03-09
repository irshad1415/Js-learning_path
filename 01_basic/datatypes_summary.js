// Definition of Primitive Data Type:

// Primitive data types are simple, immutable values that do not have methods or properties.
// They are stored directly in memory, and when you manipulate them, you work directly with their values.

// Number: Represents numeric values, including integers and floating-point numbers.
const score = 100;

// Boolean: Represents a logical value of true or false.
const isLoggedIn = false;

// Null: Represents the intentional absence of any object value.
const outsideTemp = null;

// Undefined: Represents a variable that has been declared but not assigned a value.
let userEmail;

// Symbol: Represents a unique identifier. Symbols are often used for creating private object properties.
const id = Symbol('123');

// BigInt: Represents integers with arbitrary precision. Requires the `n` suffix.
// const bigNumber = 3456543576654356754n;

// Definition of Reference (Non-Primitive) Data Type:

// Reference (non-primitive) data types are more complex and mutable. They are stored as references in memory,
// and when you manipulate them, you work with references to the actual values.

// Object: Represents a collection of key-value pairs, where values can be of any data type, including other objects.
const person = {
    name: "John",
    age: 30
};

// Array: Represents an ordered list of values, accessed by index.
const numbers = [1, 2, 3, 4, 5];

// Function: Represents a reusable block of code that can be invoked with arguments.
const greet = function(name) {
    console.log("Hello, " + name + "!");
};

// typeof operator to check the type of id
console.log(typeof id);   // "symbol"

// Create a console.table for better visualization
console.table({
    'Primitive Data Types': {
        'Number': score,
        'Boolean': isLoggedIn,
        'Null': outsideTemp,
        'Undefined': userEmail,
        'Symbol': id,
        // 'BigInt': bigNumber // commented out as it's not used
    },
    'Reference Data Types': {
        'Object': person,
        'Array': numbers,
        'Function': greet
    }
});
