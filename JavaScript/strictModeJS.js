// Javascript ignores some errors / problems in normal exceution.
// for e.g.
// name = "Topper Skills";
// console.log(name);

// If we execute javascript in strict mode execution then javascript does not ignores the errors.
// to enable strict mode execution add "use strict" at the top of script or function.

// "use strict"

// function abc()
// {
//     "use strict"
//     FormDatadfg
// }

// name = "Topper Skills";
// console.log(name);
//-------------------------------------------------
// In strict javaScript duplicate parameter name not allowed.  
// function f1(a, a)
// {
//     console.log(a + a);
// }
// f1(10,20);
//----------------------------------------------------------------------------------------------------

// Error Handling

// error an unexpected  condition / problems occured in the program.

// each created error is an object

// Error() :- it is a generic constructor, this can be used to create a common error.

// types of errors

// try{} :- It is used to write error prone code.

// catch(){} :- actual error handling happens here.
                // - without catch() error handling is not poosible.
                // - catch() is used to provide alternative solution to the errored statements and to
                //   display user friendly messages to user.
                // - catch() should be immediately after try{} block. 

// finally {} :- this will always gets executed despite error occured or not.
//             - It is used to release / close the resources like closing a database connection 
//                or file.

// throw :- It is used to create and throw errors.
//         - It is used to create user defined errors.
//          - the throw keyword is used to raise and pass an error to a caller function.
// var name = "abc";

// console.log("First Statement");

// try{
//     console.log(city);
//     console.log(name);
// }
// catch(e)
// {
//     console.log("My city is Pune");
//     console.log(e.message);
//     // console.log(e.fileName);
//     // console.log(e.lineNumber);
// }
// finally{
//     console.log("finally");
// }
// console.log("Last Statement");
//----------------------------------------------------------------------------------------------------
// Program to understand throw working

function validate(a, b)
{
    if(a == undefined)
    {
        throw new Error("a does not hava any value");
    }
}
validate();