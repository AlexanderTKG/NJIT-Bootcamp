let empty = []; // An array with no elements
let numbers = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let various = [1.1, true, "a"]; // 3 elements of various types

let a = []; // Start with an empty array
a.push("zero"); // Add a value at the end.  a = ["zero"]
a.push("one", "two"); // Add two more values.  a = ["zero", "one", "two"]

Number("15"); // => 15
String(15); // => "15"
Boolean("true"); // => true

82 + ""; // Output: "82" (number 82 converts to string "82")
"15" + 2; // Output: "152" (string 2 converts to number "2")
"77" - "10"; // Output: 67 (both strings convert to numbers)
undefined + 6; // Output: NaN (undefined could not be converted to number)

//Issue #1
/*The code snippet above prints "928" (string type). What could be changed 
to make the sum variable print 100 (number type)?*/

let products = "92" + 8; // change the string "92" => 92 by removing the perentcec
console.log(products);

//Problem Solved
let product = 92 + 8;
console.log(product);

//Issue #2
/*The calculation for determining the totalBitSize is incorrect.
 The result needs to be the sum of millimeters and centimeters.
  How can this be resolved?*/
let millimeters = 5;
let centimeters = "10";
let totalBitSize = millimeters + centimeters; //By Using the Number() to convert the values
console.log(totalBitSize); // "510"

//Problem Solved
let millimeter = 5;
let centimeter = "10";
let totalBitSizes = Number(millimeter) + Number(centimeter);
console.log(totalBitSizes); // "15"

//Issue #3
/*The result for combining the partNumber and yearMade variables should be "152000"
 and not 2015. What's the fix?*/
let partNumber = "15";
let yearMade = "2000";
let idNumber = Number(partNumber) + Number(yearMade); //Change Number() => String()
console.log(idNumber); // "2015"

//Problem Solved
let partNumbers = "15";
let yearMades = "2000";
let idNumbers = String(partNumbers) + String(yearMades);
console.log(idNumbers); // "2015"

//Issue #4
/* What needs to be added on line 3 to obtain the number of elements in the drillBits array?*/
let count;
let drillBits = ["standard", "premium,", "select", "special"];
//They wanted to know how much items are in the array.

//Problem Solved
let counts;
let drillBit = ["standard", "premium,", "select", "special"];
counts = drillBit.length;
console.log(counts);

//Issue #5
/*What do we need to do to access the "yellow" value in the colorOptions array and assign
 it to the variable colorChoice? */
let colorOptions = ["blue", "yellow", "white", "green"];

//Problem Solved
let colorOption = ["blue", "yellow", "white", "green"];
let colorChoice = colorOption[1];
console.log(colorChoice);

//Bonus
let number = []; // numbers == []
number.push(1, 2); // numbers == [1,2];
number.pop(); // numbers == [1]; returns 2
console.log(number.length);

let alphabet = ["a", "b", "c"];
let numberz = [1, 2, 3];
let alphaNumerics = alphabet.concat(numberz);
console.log(alphaNumerics); //alphaNumerics = ['a', 'b', 'c', 1, 2, 3]

let language = "English";
let partNumberz = alphaNumerics.concat(language); //add element
console.log(partNumberz); //partNumber = ['a', 'b', 'c', 1, 2, 3, "English"]
