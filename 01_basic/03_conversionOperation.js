let score = "bowled";

console.log(typeof score); // typeof is used to check the data type of given variable
console.log(typeof(score));

// datatype conversion

let scoreInNumber = Number(score)  // here Number object that turn given value into number
console.log(typeof scoreInNumber);
console.log(scoreInNumber);// output gonna be Nan(not a number) score has be turned into number datatype but cannot be displayed as number

/*
    after conversion
    "33"= 33
    "33abc" = NaN
    true = 1 : false = 0
*/


let isLoggedIn = "yes"

let booleanIsLoggedIn = Boolean(isLoggedIn) // here Boolean obejct turn given value into true/false
console.log(booleanIsLoggedIn)

/*
    after conversion
    1 = true : 0 = false
    "" = flase // empty string is flase
    "yes" = true
*/;

let number = 55;
let stringNumber = String(number); // here String object turn given value into string
console.log(stringNumber);
console.log(typeof stringNumber);