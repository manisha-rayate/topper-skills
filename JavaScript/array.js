var cities = [ "Pune", "Mumbai", "Delhi", "Nagpur", "Nashik"];

// cities[10] = "Nashik"; // add element at particular index position.

// cities[cities.length] = "Nashik"; // add elemnt at last index
// cities[cities.length] = "Nashik";
// cities[cities.length] = "Nashik";
// cities[cities.length] = "Nashik";
// cities[cities.length] = "Nashik";
// cities[cities.length] = "Nashik";
// cities[cities.length] = "Nashik";

// delete cities[1]; // delete element at particular index position. 
// for( var ele of cities)
// {
//     console.log(ele);
// }
// console.log(cities);
//---------------------------------------------------------------------------------------------------------

// add element to an array

// console.log(cities.push("Nashik"));
// console.log(cities.unshift("Nagpur"));

// console.log(cities);
//--------------------------------------------------------------------------------------------------------------

//remove element from array

// console.log(cities.pop());
// console.log(cities.shift());

// console.log(cities);
//----------------------------------------------------------------------------------------------------------------

// splice(index, NumberOfElementsToDelete, Values to insert);

// add
// cities.splice(1, 0, "Satara","Sangli", "Nagpur");

// // replace
// cities.splice(1, 1, "Satara");

// // delete
// cities.splice(1,2);

// console.log(cities);
//----------------------------------------------------------------------------------------------------------

// iterate array elements

// console.log("----------------- for ---------------------");
// for( var i = 0; i < cities.length; i++)
// {
//     console.log(cities[i]);
// }

// console.log("------------------ for in ------------------------");
// for( var i in cities)
// {
//     console.log(cities[i]);
// }

// console.log("------------------- for of -------------------------");
// for( var city of cities)
// {
//     console.log(city);
// }
//-------------------------------------------------------------------------------------------------------------

// inside map or forEach: 
// function( element, index, arrayname) {}; It is user defined function.
// cities.forEach( function (element, index, cities)
//                 {
//                     // console.log(element);
//                     cities[index] = element.toUpperCase(); // convert existing array to uppercase.
//                 }                
//                 );
// console.log(cities);
//----------------------------------------------------------------------------------------------------------

// inbuilt map() method
// map() :-  map() method is used to create new array. cann't change existing array.  
// var uarr = cities.map(function ( element, index, cities)
//                         {
//                             return element.toUpperCase();
//                         }
//                         );
// console.log(cities);
// console.log(uarr);
// console.log(uarr.join(" ")); // convert array into string, elements are separated by space.
//--------------------------------------------------------------------------------------------------

// internal working of map() method - user defined myMap() method

function myMap(fun)
{
    var arr = [];
    for( var i = 0; i < cities.length; i++ )
    {
        var val = fun( cities[i], i, cities );
        arr.push(val);
    }
    return arr
}
var newarr = myMap( function ( element, index, cities )
                                {
                                    return element.toUpperCase();
                                }
                            );
console.log(newarr);