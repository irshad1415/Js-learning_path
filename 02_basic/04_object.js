const advUser = new Object;  // Creates a new object using the Object constructor.

// const advuser = {};  // Alternative syntax for creating an empty object.

advUser.id = "0-101-1";  // Adds a property 'id' with value "0-101-1" to advUser.
advUser.name = "blade";  // Adds a property 'name' with value "blade" to advUser.
advUser.email = "blade@nomad.com";  // Adds a property 'email' with value "blade@nomad.com" to advUser.

console.log(advUser);  // Outputs the entire advUser object.

const govUser = {  // Creates a new object called govUser using object literal syntax.
    email: "husk@gov.com",  // Adds a property 'email' with value "husk@gov.com" to govUser.
    fullname: {  // Adds a nested object 'fullname' to govUser.
        privatename: {  // Adds a nested object 'privatename' to 'fullname'.
            firstname: "belmount",  // Adds a property 'firstname' with value "belmount" to 'privatename'.
            lastname: "nolan"  // Adds a property 'lastname' with value "nolan" to 'privatename'.
        }
    }
}

console.log(govUser.fullname.privatename.firstname);  // Outputs the value of 'firstname' property: "belmount".

const obj1 = {1: "a" , 2: "b"};  // Creates an object obj1 with numeric keys.
const obj2 = {3: "c" , 4: "d"};  // Creates an object obj2 with numeric keys.
const obj4 = {5: "e" , 6: "f"};  // Creates an object obj4 with numeric keys.

let obj3 = {...obj1, ...obj2, ...obj4};  // Merges obj1, obj2, and obj4 into obj3.
 obj3 = Object.assign({}, obj1, obj2, obj4);  // Alternative method using Object.assign()

console.log(obj3);  // Outputs the merged object obj3.

const user = [  // Creates an array called user containing multiple objects.
    { id:1, email: "key@khot.com" },
    { id:1, email: "key@khot.com" },
    { id:1, email: "key@khot.com" },
    { id:1, email: "key@khot.com" }
]

console.log(user[1].email);  // Outputs the email of the second object in the user array.

console.log(advUser);  // Outputs the entire advUser object again.

console.log(Object.keys(advUser));  // Outputs an array containing the keys of advUser.
console.log(Object.values(advUser));  // Outputs an array containing the values of advUser.
console.log(Object.entries(advUser));  // Outputs an array containing arrays of key-value pairs of advUser.

console.log(advUser.hasOwnProperty("email"));  // Checks if advUser has a property named "email" and outputs true or false accordingly.


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const mission = {
    missionName: "falling star",
    target: "starbeem",
    hitPoint: "blade"
};

console.log(mission.hitPoint); // Expected result: "blade"

// Destructuring assignment: Extracting the 'hitPoint' property from 'mission' object
const { hitPoint: redpoint } = mission;
// Explanation: The curly braces {} indicate object destructuring syntax. 
// The property 'hitPoint' from 'mission' object is extracted and assigned to a variable named 'redpoint'.
// 'redpoint' now holds the value of 'mission.hitPoint'.

console.log(mission.hitPoint); // Expected result: "blade"
console.log(redpoint); // Expected result: "blade"

/*
    {
        "name":"blade",
        "target": "startbeem",
        "hitPoint": "star"
    }
*/ 

// or

/*
    [
    {},
    {},
    {}
]

*/
//Explanation: JSON (JavaScript Object Notation) is a lightweight data-interchange format. 
// It represents data as key/value pairs, similar to JavaScript objects. 
// JSON is commonly used for exchanging data between a server and a web application.