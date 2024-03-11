// Creating an array with numeric elements
const myArr = [0, 1, 2, 3, 4, 5];

// Creating an array with a mix of data types
const myHeros = ["ironman", "yes", 0, true];

// Creating an array using the Array constructor
const myArrTwo = new Array(1, 2, 3, 4, 5);

// Accessing and logging the value at index 1 of 'myArr'
console.log(myArr[1]);

// Array methods

// Adding elements to the end of the array
myArr.push(6);
myArr.push(7);

// Removing the last element from the array
myArr.pop();

// Adding elements to the beginning of the array
myArr.unshift(9);

// Removing the first element from the array
myArr.shift();

// Checking if the array includes a specific value
console.log(myArr.includes(5));

// Finding the index of a specific value in the array
console.log(myArr.indexOf(2));

// Creating a string by joining array elements
const newArr = myArr.join();

// Logging the modified array and the joined string
console.log(myArr);
console.log(newArr);

/*****************slice and splice***************/

// Logging the original array
console.log("a", myArr);

// Creating a new array by extracting elements from index 1 to 3 (excluding 3)
const myn1 = myArr.slice(1, 3);
console.log(myn1);

// Logging the original array after using 'slice'
console.log("B", myArr);

// Removing elements from index 1 to 3 and logging the removed elements
const myn2 = myArr.splice(1, 3);
console.log("c", myArr);
console.log(myn2);
/*
    slice Method:

Purpose: Extracts a portion of an array to create a new array.
Original Array: Unchanged; slice does not modify it.
splice Method:

Purpose: Modifies an array by removing, replacing, or adding elements.
Original Array: Altered; splice modifies it.
Summary:

slice is non-destructive, creating a new array.
splice is destructive, modifying the original array.
*/