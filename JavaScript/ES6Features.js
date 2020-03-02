// let,const

// hoisting :- 

// scope :- global, function, block

// var :- variable decaration using 'var' is hoisted.
// 		- It is not block scoped, either function or global scope.

// let :- variable decaration using 'let' is not hoisted.
// 		- It is block scoped.

// const :- variable decaration using 'const' is not hoisted.
// 		- It is block scoped.
// 		- const creates read only variable, we cannot change the vaue once initiated.

// e.g. 1:- var demo

// name = "Topper Skills";

// console.log(name);

// var name;   // variable declaration

//---------------------------------------------------------------------

// E.g. :- let demo

// function f1()
// {
//     var a = 10;
//     var b = 20;

//     if(true)
//     {
//         var a = 100;
//         // var b = 200;
//         let b = 200; 

//         console.log(a); // 100
//         console.log(b); // 200
//     }
//     console.log(a);        // 100
//     console.log(b);         // 20
// }
// f1();
//-------------------------------------------------------------------

// E.g. :- const demo

// const num = 10;
// num = 100;          // Error :- assignment to constant variable.
// console.log(num);

//---------------------------------------------------------------------------------------------------

// String template :- 

// string literals :- 
// "    "
// '    '   
// `    `  -  ES6

// E.g.

// let name = "ABC", city = "Pune", salary = 100;

// // My name is 'ABC'.
// // My city is "Pune".
// // My salary is 100.

// let str = "My name is "
//     + name + "\n My city is "
//     + city + "\n My salary is " +salary;

// let str2 = ` 
//     My name is ${name}
//     My city is ${city}
//     My salary is ${salary}`;

// console.log(str);
// console.log(str2);

//----------------------------------------------------------------------------------------------------

// default function parameter :- 
// - assigning a value to function parameters is called default function parameters.
// - the default parameter value will be used only if there is no matching argument provided while calling the 
// function.
// - We can use left hand side parameter value as default value to right hand side parameter.
// - We can use external variable value as default value .
// - We can use a function return value as default value to parameters.     

// function f1(a, b, c)
// {
//     console.log(a, b, c);
// }
// f1(10);             // 10 undefined undefined
// f1(10, 20);          // 10 20 undefined
// f1(10, 20, 30);     // 10 20 30
//------------------------------------------------

// function f1(a, b, c)
// {
//     console.log(a + b + c);
// }
// f1(10);             // NaN
// f1(10, 20);          // NaN
// f1(10, 20, 30);     // 60
//-------------------------------------------------

// function f1(a, b = 0, c = 0)
// {
//     console.log(a + b + c);
// }
// f1(10);             // 10
// f1(10, 20);          // 30
// f1(10, 20, 30);     // 60
//-----------------------------------------------------

// function f1(a, b = a, c = a * .5)            // c = half of 'a' value i.e 5 
// {
//     console.log(a + b + c);
// }
// f1(10);         // 25
// f1(10,20);      // 35
// f1(10, 20 ,30);         //60
//--------------------------------------------------------

// let x = 20;

// function getVal()
// {
//     return 30;
// }
// function f1 (a, b = getVal(), c = getVal() * .5)
// {
//     console.log(a + b + c);
// }
// f1(10);         // 55 
// f1(10,20);      // 45
// f1(10, 20 ,30);     // 60
//---------------------------------------------------------------------------------------------------

// array destructuring :- 
// - declaring and initializing  one or more variables using array elements is called array destructrig.
// - syntax :-
// let [ list of variables ] = arrayname;
// Example :- 

// const arr = [10, 20, 30, 40];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// let [a, b, c, d] = arr;
// console.log( a, b, c, d);        // 10 20 30 40

// let [a, , b] = arr;
// console.log(a,b);               // 10 30

// let [a, , , b] = arr;
// console.log(a, b);              // 10 40
//---------------------------------------------------------------------------------------------------

// Object destructuring :- 
// - declaring and initializing variables by using object properties is called object destructuring.
// - variable name must be same as object property name.  
// - syntax :-
// let { list of variables } = objectname.
// Example :-

// const person = {
//     firstName : "abc",
//     mobile : "111111",
//     city : "Pune",
//     age : 10
// }

// regular way
// let name = person.firstName;
// let phone = person.mobile;
// let age = person.age;

// object destructuring
// let { firstName : name, mobile : phone, age } = person;

// console.log(firstName, mobile, age);
// console.log(name, phone, age);
//--------------------------------------------------------------------------------------------------

// Spread operator :-
// - The spread operator returns all the elements of an array.
// syntax :- ...arrayName

// const arr = [10, 20, 30, 40, 50, 60];

// let arr2 = [100, 200, arr[0], arr[1], arr[2], arr[3]];
// let arr2 = [100, 200, ...arr];
// console.log(arr2);

// function f1(a, b, c, d)
// {
//     console.log(arguments);
// }

// f1(arr[0], arr[1], arr[2]);
// f1(...arr);
//---------------------------------------------------------------------------------------------------

// Rest Operator :-
// - Rest operator is used to store rest of the arguments which does have matching parameters.
// - Rest operator is an array.  
// - Syntax :- ...anyName //any name we want

// function f1(a, b, c, d, ...rest)
// {
//     console.log(a, b, c, d);
//     console.log(arguments);
//     console.log(rest);
//     console.log("------------------------------------------------------------------")
// }

// f1(10);
// f1(10, 20);
// f1(10, 20, 30);
// f1(10, 20, 30, 40);
// f1(10, 20, 30, 40, 50, 60);
//--------------------------------------------------------------------------------------------------

// object cloning :-
// - creating a exact duplicate object from an existing object is called object cloning.
// - There are two types of object cloning

// 1. shallow cloning :-
// - In shalow cloning only direct object gets cloned but not the objects which are referred by the
// properties of direct object.

// 2. Deep cloning :-
// - In deep cloning all the objects ( direct object and the object referred by the properties of 
// direct object) get cloned.

// Example :-

// const person = {
//     name: "abc",
//     mobile: "11111111",
//     address: {
//         street: "Narhe",
//         city: "Pune"
//     }
// }

// shallow cloning :-

// let person2 = Object.assign({}, person);

// person.address.city = "Mumbai";

// console.log(person);
// console.log(person2);
//-------------------------------------------------------

// Deep Cloning :-

// const jsonObj = JSON.stringify(person);
// const person2 = JSON.parse(jsonObj);

// const person2 = JSON.parse(JSON.stringify(person));

// person.address.city = "Mumbai";

// console.log(person);
// console.log(person2);
// --------------------------------------------------------------------------------------------------

// Arrow function or Fat arrow function :-
// - Arrow function is introduced in ES6.
// - It is used to implement a function with very less code.
// Syntax :- 
//  (parameters) => {body}

// Normal function : 

// const sq = function(a)
//             {
//                 return a * a;
//             }
// console.log(sq(10));

// Arrow function :-

// const sq2 = (a) => {
//                         return a * a;
//                     }
// console.log(sq2(10));

// Rules :- 
// 1. If there is single parameter then paranthesis are optional.
        // const sq2 = a => {return a * a;}
        // console.log(sq2(10));

// 2. If there is single statement in the body then return statement and curly braces are optional.
    //    const sq2 = a => a * a;
    //    console.log(sq2(10));

//---------------------------------------------------------------------------------------------------

// function context :- 
// - context :- an object on which a function called.
// - by using 'this' keyword inside a function we can access the context.
// - 'this' does not refer to the current context in arrow function like it does in normal function.
// - In arrow function, 'this' refers to the parent context  where it is declared.
// - In arrow it is important where the function is defined and not where it ts called.
// Example :-

// name = "Manisha";

// const person = {
//     name: "abc",
//     age: 10,
//     profile: function(){
//         console.log("Profile.." + JSON.stringify(this));    //person

//         // using normal function
//         // return function(){
//         //     console.log("in.." + this);     // global
//         //     return "Name: " + this.name + ", Age: " + this.age;
//         // }

//         // using arrow function
//         return () => {
//             console.log("in.." + this);
//             return "Name: " + this.name + ", Age: " + this.age;
//         }
//     }
// };

// const getProfile = person.profile();

// console.log(getProfile());
//---------------------------------------------------------------------------------------------------

// Modules :-

// normal function :-
// const fun = function(){
//     console.log("Call me immediately...");
// }

// fun();

// Self Invoking Function Expression :-
// - It gets called immediately at the time to script loading.

(function(){
    console.log("Call me imeediately...");
})();
