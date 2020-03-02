var a = 10, b = 20;
var operation = "*";

switch(operation)

        {
            console.log(a + b);
            break;
        }
    case "-" : 
        {
            console.log( a - b);
            break;
        }
    case "*" :
        {
            console.log( a * b);
            break;
        }
    case "/" :
        {
            console.log( a / b);
            break;
        }
    default :{
        console.log(" Invalid operation");
    }
}