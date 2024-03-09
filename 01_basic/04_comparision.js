// Comparisons with numbers
console.log(2 > 1);     // true
console.log(2 >= 1);    // true
console.log(2 < 1);     // false
console.log(2 == 1);    // false
console.log(2 != 1);    // true

// Comparisons with strings and numbers
console.log("2" > 1);   // true (string "2" is converted to a number for comparison)
console.log("02" > 1);  // true (string "02" is converted to a number for comparison)

// Comparisons with null
console.log(null > 0);   // false (null is treated as 0 in numeric comparisons)
console.log(null == 0);  // false (null is equal to undefined but not to 0)
console.log(null >= 0);  // true (null is treated as 0 in numeric comparisons)

// Comparisons with undefined
console.log(undefined == 0);  // false (undefined is not equal to anything except null)
console.log(undefined > 0);   // false (undefined is treated as NaN in numeric comparisons)
console.log(undefined < 0);   // false (undefined is treated as NaN in numeric comparisons)

// Strict equality (no type conversion)
console.log("2" === 2);  // false (strict equality checks both value and type)
