// Dates

// Creating a new Date object representing the current date and time
let myDate = new Date();

// Uncomment the following lines to see various date representations
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());

// Logging the data type of the variable 'myDate'
 console.log(typeof myDate);

// Creating a new Date object for a specific date (January 14, 2023)
 let myCreatedDate = new Date(2023, 0, 23);

// Creating a new Date object for a specific date and time (January 23, 2023, 5:03 AM)
 let myCreatedDateOne = new Date(2023, 0, 23, 5, 3);

// Creating a new Date object from a string representation (January 14, 2023)
 let myCreatedDateTwo = new Date("2023-01-14");

// Creating a new Date object from a different string representation (January 14, 2023)
let myCreatedDateThree = new Date("01-14-2023");

// Uncomment the following line to see the formatted date string
// console.log(myCreatedDate.toLocaleString());

// Getting the current timestamp in milliseconds
let myTimeStamp = Date.now();

// Uncomment the following lines to see various timestamp-related outputs
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now() / 1000));

// Creating a new Date object representing the current date and time
let newDate = new Date();

// Logging the current date and time
console.log(newDate);

// Logging the current month (January is 0, so we add 1 to get the correct month)
console.log(newDate.getMonth() + 1);

// Logging the current day of the week (Sunday is 0, Monday is 1, and so on)
console.log(newDate.getDay());

// Getting the localized name of the current day of the week
console.log(newDate.toLocaleString('default', { weekday: "long" }));
