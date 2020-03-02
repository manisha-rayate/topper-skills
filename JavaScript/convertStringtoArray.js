//reverse string by using array

// var str = "abcd";

// // convert a string to an array
// var arr = str.split("");

// // reverse the array
// arr.reverse();

// console.log(arr);

// // convert array to string
// var rstr = arr.join("");

// console.log(rstr);
// //console.log(str.split("").reverse().join(""));

//-------------------------------------------------------------------------------------------------------

// reverse string without using array

var str = "abcd";
var rstr = "";

for( var i = str.length-1; i >= 0; i-- )
{
    rstr += str.charAt(i);
}
console.log(str);
console.log(rstr);