// boolean: in boolean there is no need to check conditon

// var isActive = false;
// if(isActive)
//     console.log(" Active ");
// else
//     console.log(" Not active ");

//------------------------------------------------------------------------------------------------------------

// number :- represents any number.
// typeof operator:- to check type of any variable.

// var num1 = 100;
// var num2 = 100.20;
// var num3 = -100.20;
// var num4 = 12e34;
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof num4);
//-----------------------------------------------------------------------------------------------------------

var a = 10;
var b = "20";
// var b = "20a"; 

console.log(typeof a);
console.log(typeof b);

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a / b );
//-----------------------------------------------------------------------------------------------------------

// NaN :- Not a Number
// - It is a value of type number.
// console.log(typeof NaN);           // O/p:- number
// console.log(100 *NaN);

// * NaN represents an invalid / illegal number.
// * If an expression contains NaN / undefined / invalid number then the result of expression becomes 
// NaN.
//------------------------------------------------------------------------------------------------------------

// Infinity :- 
// It a value of type number
// It represents a number which is out of range of capacity of javascript engine.

// console.log(typeof Infinity);
// var num = 1000000;
// while(num != Infinity)
// {
//     num = num * 100000000;
//     console.log(num); 
// }

//---------------------------------------------------------------------------------------------------------------

// String to number conversion
// 1. Number()
// 2. parseFloat()
// 3. parseInt()

// var num = "123.456";
// var num = "123.456abc";
// var num = "12 3.456";
// var num = " 123.456";
// var num = "";

// console.log(Number(num));
// console.log(parseFloat(num));
// console.log(parseInt(num));
//----------------------------------------------------------------------------------------------------------

// var num = 123.456;
// console.log(num.toFixed(6));   // returns a number with fixed number of floating point digits.

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// console.log(Math.floor(Math.random() * 10 ));
//-----------------------------------------------------------------------------------------------------------------

// String : String is a sequence of characters.
// internally string is strored like a character array.
// string is immutable means a string object cannot be modified after initialization

// String constant pool :- It is a memory space inside the HEAP memory which does not allow storing
// duplicate values, If a new object is being created for a value which is already exist in the string
// constant pool then instead of creating new object it returns the memory adddress of existing object.

// Q. Why string is immutable ?
// Ans. In string constant pool multiple references ( variables ) refers to the same object, if one of
// the references changes the object then the change will reflected for all the remaining references
// this may created unexpected output. to avoid this inconsistancy in the program string objects are
// made immutable.

// Note :- For every change to the string object a new object gets created.

// Example :- 
//String Concatenation:-

// var city = "Pune";
// city = city + "India";
// console.log(city);


// var name = "Topper Skills";

// returns number of characters in a string.
// console.log(name.length);   

// return an index of sub string
// console.log(name.indexOf("Skills"));
// console.log(name.indexOf("s"));

// returns index of first occurance of "p".
// console.log(name.indexOf("p"));

// returns index of first occurance of "p" starting from index 3.
// console.log(name.indexOf("p",3));

// returns index of last occurance of "p".
// console.log(name.lastIndexOf("p"));

// console.log(name.search("S"));
//--------------------------------------------------------------------------------------------------------

// charAt(index) :- returns a character on provided index.
// charCodeAt(index) :- returns a character set value of he character present on the provided index.

// character set :- 

// A = 65  B = 66  C = 67

// a = 97  b = 98  c = 99

// 0 = 48  1 = 49

// 9 = 57,  space = 32,     & = 38, * = 42

// var str = "*HelloWorld";
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));