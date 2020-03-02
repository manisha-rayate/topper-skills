// date and time

// Date() :- Date() is a constructor.
// Date(year, month, date , hour, minute, seconds, miliseconds)
// Date(miliseconds) :- time in miliseconds starts from 1 Jan 1970 00:00:00

// var d = new Date();         // returns current date and time instances

// console.log(d);     // gives time in UTC
// console.log(d.toLocaleTimeString());    // gives time according to local time zone 
//--------------------------------------------------------------------------------------------------

// var d2 = new Date(2018, 9, 15);
// var d2 = new Date(2020, 9, 15, 5, 45, 30, 25);   // called second construtor
// var d2 = new Date(2020);    // called third date constructor, 2020 take as miliseconds
// console.log(d2);
// console.log(d2.toLocaleString());
//--------------------------------------------------------------------------------------------------

// formatting date and time

// var d = new Date();

// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());


// d.setFullYear(2010);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(11);

// console.log(d.toLocaleString());

// var myDate = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
// console.log(myDate);
//-------------------------------------------------------------------------------------------------

// format date by using function

// function formatDate(d)
// {
//     return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
// }

// var d = new Date();
// console.log(formatDate(d));
//------------------------------------------------------------------------------------------------

// Program to print day of the week.

 var d = new Date();
 console.log(d.getDay());

// first way to print day
//  function formatDay(day)
//  {
//      var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//      return dayArr[day];
//  }
//----------------------------------------------------------

// Second way to print day
function formatDay(day)
{
    switch(day)
    {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}

d.setDate(15);      // returns the day of particular date.
console.log(formatDay(d.getDay()));
//---------------------------------------------------------------------------------------------------
