var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenArr = [];

// for(var num of nums)
// {
//     if(num % 2 == 0)
//         evenArr.push(num);
// }
// console.log(evenArr);
//-----------------------------------------------------------------------------------------------------

// nums.forEach(function (num)
//             {
//                 if(num % 2 == 0)
//                     evenArr.push(num);
//             });
// console.log(evenArr);
//------------------------------------------------------------------------------------------------------

// filter :- returns the elements of an array that meets the condition specified in a callback function.

// var evenArr = nums.filter(function (num)
//         {
//             // if(num % 2 == 0)
//             //     return num;

//             return num % 2 == 0;
//         });
// console.log(evenArr);
//------------------------------------------------------------------------------------------------------

// Program to print all cities starting with "S" or "s".

var cities = ["Pune", "Solapur", "Mumbai", "delhi", "Nashik", "Satara", "sangli"];

// var scities = cities.filter(function (city)
//                             {
//                                 if(city.charAt(0) == "S" || city.charAt(0) == "s")
//                                     return city;
//                             });
// console.log(scities);
//------------------------------------------------------------------------------------------------------

// program to remove all the cities starting with "S" or "s".

// var scities = cities.filter(function (city)
//                             {
//                                 if(city.charAt(0) != "S" && city.charAt(0) != "s")
//                                     return city;
//                             });
// console.log(scities);
//------------------------------------------------------------------------------------------------------

// program to remove all the cities starting with "S" or "s".

// for( var i = 0; i < cities.length; i++)
// {
//     if(cities[i].charAt(0) == "S" || cities[i].charAt(0) == "s")
//     {
//         cities.splice(i,1);
//         i--;
//     }
// }
// console.log(cities);
//-----------------------------------------------------------------------------------------------------

// program to return character length of each array element. 

// var arr = cities.map(function (city)
//             {
//                 return city.length;

//             });
// console.log(arr);
//------------------------------------------------------------------------------------------------------

// program to return sum of all character length of each array element.

// var sum = 0;
// for( var city of cities)
// {
//     sum += city.length;
// }
// console.log(sum);
//------------------------------------------------------------------------------------------------------

// program to return sum of all character length of each array element using reduce() function.

// reduce() :- returns single element. reduce() is used when we process all array element and produce single element.

// var ss = cities.reduce(function (sum, city, index, arr)
//                         {
//                             return sum + city.length;
//                         }, 0);
// console.log(ss);
//------------------------------------------------------------------------------------------------------

// program to add all array element using reduce() function.

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var sum = nums.reduce(function (sum,num)
//                         {
//                             return sum + num; 
//                         }, 0);
// console.log(sum);
//------------------------------------------------------------------------------------------------------

// Program to check whether an element exists or not

// includes(element) :- returns true if element is available tn the array otherwise return false.

// console.log(cities.includes("Pune"));
// console.log(cities.includes("Jalgaon"));
//------------------------------------------------------------------------------------------------------

// reverse() :- reverse the elements of an array.

// cities.reverse();
// console.log(cities);
//------------------------------------------------------------------------------------------------------

// sort(array) :- sorts the array elements in ascending order based on character set value.

// cities.sort(); // by default ascending order.
// cities.sort().reverse();       // output in descending order.
// console.log(cities);

var nums = [1, 200, 30, 4, 55, 6, 7, 8, 9, 10];
// nums.sort();
// console.log(nums);
//------------------------------------------------------------------------------------------------------

// nums.sort( function( a, b)
//             {
//                 // return a - b;       // ascending order
//                 return b - a;       // descending order 
//             });
// console.log(nums);
// -----------------------------------------------------------------------------------------------------

//join() :- The join() method is used to convert an array elements into a string by managing the 
// separators.

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(arr);

// // array to string conversion
// console.log(arr.toString());
// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join(" ")); 
// console.log(arr.join("-"));
//----------------------------------------------------------------------------------------------------

// slice() :- The slice() method returns a section / part of an array.

// Note :- slice() in string returns a substring and slice() in array returns a section. 

// var subarr = arr.slice(3, 7);
// console.log(subarr);
//----------------------------------------------------------------------------------------------------

// Program to concat multiple array into single array. 

// concat() :- It is used to combine multiple array into one.

var arr1 = [100, 200, 300];
var arr2 = [1000, 2000, 3000];

var newarr = arr2.concat(arr1, arr);

console.log(newarr);