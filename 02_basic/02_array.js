// Define arrays for Marvel and DC heroes
const marvel_heros = ["ironman", "hulk", "thor"];
const dc_heros = ["batman", "flash", "superman"];

// Push the entire DC heroes array into the Marvel heroes array
// Note: push() returns the new length of the array
console.log(marvel_heros.push(dc_heros));

// Try to access the first element of the array at index 3 (which is the DC heroes array)
console.log(marvel_heros[3][0]); // This will result in 'undefined'

// Concatenate arrays using concat() method
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// Concatenate arrays using the spread operator
const all_herosOne = [...marvel_heros, ...dc_heros];
console.log(all_herosOne);

// Nested array with flat() method to flatten it to a single-level array
const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realArray = array.flat(Infinity);
console.log(realArray);

// Check if a string is an array
console.log(Array.isArray("blade")); // Output: false

// Convert a string to an array of its characters
console.log(Array.from("blade")); // Output: ['b', 'l', 'a', 'd', 'e']

// Attempt to create an array from an object (treated as iterable)
console.log(Array.from({ name: "blade" })); // // intrsesting

// Define scores
let score1 = 100;
let score2 = 200;
let score3 = 300;

// Create an array with Array.of from the tuple of scores
console.log(Array.of(score1, score2, score3));
