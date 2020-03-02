// sub string :- 

// substring( startIndex ) :- returns a substring starting from startIndex to the end of string.
// substring( startIndex, endIndex ) :- returns a substring  starting from startIndex to the 1 less 
// than endIndex( endIndex is excluded).

var name = "Topper Skills";
// console.log( name.substring(7));
// console.log( name.substring(2,8));
// console.log( name.substring(8,2));
//-------------------------------------------------------------------------------------------------------

// slice( startIndex ) :- returns a substring starting from start Index to the end of string.

// slice( startIndex, endIndex ) :- returns a substring  starting from startIndex to the  index 1 less
// than endIndex.

// slice() :- can accept nagative indexes.
// If starting index is greater than ending index then it returns empty string and does not swap the
// indexes. 

// console.log(name.slice(2));
// console.log( name.slice(2,8));
// console.log(name.slice(8,2));
// console.log(name.slice(-8,-2));
// -----------------------------------------------------------------------------------------------------

// substr(startIndex) :- returns a substring starting from start index to the end of string.
// substr(startIndex, totalChars) :- returns a sub string of totalChars starting from start index. 
// totalChars means number of chracters. 

// console.log(name.substr(8));
// console.log(name.substr(4,3));
// ------------------------------------------------------------------------------------------------------

// program to calculate occurance of substing "abc".

// var name1 = "abc Toabcppabcerabc Skillsabc";
// var sub = "abc";
// var counter = 0;
// for( var i = 0; i <= name1.length - sub.length; i++)
// {
//     var ch = name1.substr(i, sub.length)
//     if( ch == sub)
//     {
//         counter++;
//     }
// }
// console.log("Total : " + counter);
//----------------------------------------------------------------------------------------------------------

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
console.log(name.toLocalLowerCase());
console.log(name.toLocalUpperCase());

//  var name2 = "     Topper Skills    ";

// trim() :- remove the blank spaces from starting and ending of string.

// console.log(name2 + "AB" );
// console.log(name2.trim() + "AB" );
//----------------------------------------------------------------------------------------------------------------

// covert String to array.

// split(delimeter) :- returns an array of sub strings.

// var subname = "Toepper Skeilels, Peune";
// console.log(subname.split(" "));
// console.log(subname.split(","));
// console.log(subname.split(""));
// console.log(subname.split("e"));