// Scope ?
// - a level of accessibility / availability is called a scope.

// // global scope
// var b = 20;

// function f1()
// {
//     // function scope
//     var a = 10;
// }
//------------------------------------------------------------------------------------------------------
// Q. When does a scope gets created ?
//-----------------------------------------------------------------------------------------------------

// scope chaining

// var a = 10;

// function f1(b)
// {
//     // a, b
//     function f2(c)
//     {
//         // a, b, c
//         function f3(d)
//         {
//             // a, b, c, d
//             function f4(e)
//             {
//                 // a, b, c, d, e
//             }
//         }
//     }
// }
//-----------------------------------------------------------------------------------------------------

// function f1(a)
// {
//     return function (b)
//     {
//         console.log(a + b);
//     }
// }
// var f2 = f1(10);
// f2(20);     // 30 
// f2(30);     // 40

// var f3 = f1(20);
// f3(40);     // 60
// f3(50);     // 70
//----------------------------------------------------------------------------------------------------

// closure counter program

// function getCounter()
// {
//     var counter = 0;

//     return function()
//     {
//         counter++;
//         return counter;
//     }
// }

// var totalCars = getCounter();

// console.log(totalCars());
// console.log(totalCars());
// console.log(totalCars());
// console.log(totalCars());

// var totalBikes = getCounter();

// console.log(totalBikes());
// console.log(totalBikes());

//----------------------------------------------------------------------------------------------------

// context

// function f1()
// {
//     console.log(this);
// }
// f1();

//------------------------------------------------

function printProfile(a, b)
{
    console.log(a, b);
    console.log('Name: ' + this.name + ", Mobile: " + this.mobile);
}

var per1 = {
    name: "abc",
    mobile: "11111"
}
var per2 = {
    name: "xyz",
    mobile: "22222"
}

var arr = [10, 20];

// printProfile.call(per1);
// printProfile.call(per2);

// printProfile.call(per1, arr[0],arr[1]);
// printProfile.call(per1,arr);
// printProfile.call(per1,arr);
// printProfile.call(per1, 100, 200);
// printProfile.apply(per2, [100,200]);
//----------------------------------------------------
// bind()

// var newFun = printProfile.bind(per1);
var newFun2 = printProfile.bind(per2);
// newFun(10, 20);
// newFun(100, 200);

newFun2(20,30);