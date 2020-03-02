// Program to reverse the array.

var arr1 = [10, 20, 30, 20, 85, 15, 40, 50, 60];

// console.log(arr1.reverse());
//---------------------------------------------------------------------------------------------------

// Program to reverse array without using inbuilt function.

// for( var i = 0, j = arr1.length-1; i < j; i++, j--)
// {
//     var temp = arr1[i];
//     arr1[i] = arr1[j];
//     arr1[j] = temp;
// }
// console.log(arr1);
//---------------------------------------------------------------------------------------------------

// Program to find out maximum element.

// logic 1 :-
// arr1.sort( function (a, b)
//             {
//                 return b - a;      // same logic to find out minimum number from array only change a - b.
//             });
// console.log(arr1[0]);
//--------------------------------------------------

//logic 2 :- 

// var max = 0;
// arr1.forEach( function (num)
//                 {
//                     if( num > max)    // same logic to find out min number from array only use < oprator.
//                         max = num;
//                 });
// console.log(max);
//--------------------------------------------------------

// logic 3 :-
// var maxx = arr1.reduce( function(max, num)
//                             {
//                                 if( num > max ) // same logic to find out minimum number from array only use < oprator.
//                                     return num;
//                                 else
//                                     return max;
//                             }, 0);
// console.log(maxx);
//----------------------------------------------------------------------------------------------------

// 