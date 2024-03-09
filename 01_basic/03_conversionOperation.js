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

// *********************** Operations ***********************


let value = 3;
let negValue = -(value);
console.log(negValue);// herre value becames negative and displayed


// basic Arithmetic Operations
/*
    2+2 
    2-2
    2*2
    2**3 > to the power of given value
    2/2
    2%3 > reminder
*/


// adding to strings
let wordOne = "hello";
let wordTwo = " World";
let wholeWord = wordOne+wordTwo;
console.log(wholeWord); // here 2 string will be added to form hello world as result


/*
    tricky Operations
    ("1"+2) == 12
    (1+"2") == 12
    ("1"+2+2) == 122
    (1+2+"2") == 32 // here first two number will be treated as number and result will coverted into string will be added to last string

    (3+4 * 5 % 3 ) make it had for readablity use Parenthese to make more pratical and readble

    (+true) = 1 
    (+"") = 0

    let num1, num2, num3;
    num1 = num2 = num3 = 2+2  >> it is Executable not permissable to use due to lack of readablity and causes Confusion


*/

let gameCounter = 100;
++gameCounter; // here it better use postfix that prefix (gameCounter++)
console.log(gameCounter);