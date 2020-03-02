// function addEventListner(event,cb)
// {
//     if(buttonclicked)
//     {
//         cb();
//     }
// }

// btn.addEventListner('click', handleClick);
// function handleClick()
// {
//     console.log("Button clicked...");

// }
// btn.addEventListner('click', handleClick);
//-------------------------------------------------------------------------------------------

// setTimeout() :-
// function f1()
// {
//     console.log("finished...");
// }
// setTimeout(f1, 1000);
//----------------another way to use setTimeout() function by using arrow function-------------
// setTimeout(() =>
// {
//     console.log("finished...");
// },1000);
//--------------------------------------------------------------------------------------------

// setInterval() :-

// var counter = 0;
// setInterval(() =>       // arrow function
// {
//     counter++;
//     console.log(counter);
// }, 1000);
//-------------------------------------------------------------------------------------------

// var data;

// function getServerData(printD)
// {
//     // Fetching data from server
//     setTimeout(() => {
//         data = 100;
//         printD();
//     }, 1000);
// }

// function printData()
// {
//     console.log("Data: " + data);
// }

// getServerData(printData);
//-------------------------------------------------------------------------------------------

// Promise :- It is used to execute a task asynchronously.
// promise introduced in ES6.

// const p = new Promise((resolve, reject) =>{
//     // fetching the data from server

//     let data = 100;
//     //let data = undefined;

//     if(data)
//     {
//         resolve(data);
//     }
//     else
//     {
//         reject("Could not fetch the data from server");
//     }
// })

// // chaining thens :-
// // then returns a promise.
// // returns value of first then is passed to second then.
// // chaining the then is useful when multiple operations have to be performed on promise.
// // then separates the operations that makes code more readable.
// // We can use multiple then statements but catch statement use only once.

// .then(d => {
//     console.log(d);
//     return d + 10;
// })

// .then(d => {
//     console.log(d);
//     return d * d;
// })
// .then(d => {
//     console.log(d);
// })

// .catch((err) =>{
//     console.log(err);
// });
//--------------------------------------------------------------------------------------------

// async await :-
// - await pauses tthe execution of a async function until the promise gets settled.
// - await can only be used in async function.

// async function getServerData()
// {
//     const p = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promiseeee...");
//         }, 2000);
//     })

//     console.log("Promise settled...");
//     return p;

// }

// getServerData()
//     .then(data => {
//         console.log(data);
//     })

//-------------------------------------------------------------------------------------------
