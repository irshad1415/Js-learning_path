// Singleton
Object.create;
/**
 Object Singleton:
An object singleton ensures that only one instance of an object exists throughout the application. It typically involves creating 
a mechanism to control and limit the instantiation of the object to a single occurrence.

Object.create Method:
Object.create is a method in JavaScript used for creating a new object with a specified prototype. It allows the creation 
of objects that inherit properties from another object, serving as an alternative to constructor functions for object creation 
and inheritance.
 */
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// Object literals
/*
Object literals are a concise way to create objects in JavaScript. They consist of key-value pairs enclosed in curly braces {}. 
Keys can be strings or symbols, and values can be any valid JavaScript expression. Object literals are commonly used for 
organizing and structuring data with properties and methods.
*/
const mySym = Symbol("key1");  // Creates a unique Symbol with the description "key1".

const Jsuser = {
    name: "blade",
    "full name": "blade ameno",
    [mySym]: "myKey1",
    age: 18,
    location: "fogcity",
    email: "blade@nomad.com",
    isOnline: false,
    lasOnline: ["saturday", "tuesday"]
}

console.log(Jsuser.email);  // Outputs the value of the 'email' property: "blade@nomad.com".
console.log(Jsuser["full name"]);  // Outputs the value of the 'full name' property: "blade ameno".
console.log(Jsuser["email"]);  // Outputs the value of the 'email' property: "blade@nomad.com".
console.log(Jsuser[mySym]);  // Outputs the value of the Symbol property: "myKey1".

Jsuser.email = "balde@rouge.com";  // Changes the value of the 'email' property to "balde@rouge.com".
Object.freeze(Jsuser);  // Freezes the Jsuser object, making it immutable.

Jsuser.email = "blade@hinged.com";  // Attempting to change the 'email' property, but it will have no effect due to the object being frozen.

// The following lines attempt to add new properties and methods to JsUser, but there's a typo in the variable name (JsUser vs Jsuser).
// Also, the functions are not correctly defined as methods on the object.

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());  // Outputs "Hello JS user" and logs 'undefined' because the function doesn't return a value.
console.log(JsUser.greetingTwo());  // Outputs "Hello JS user, undefined" and logs 'undefined' due to the same reason.
