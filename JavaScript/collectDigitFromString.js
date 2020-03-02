
// Collect digits from string and calculate sum of that digits.:- logic 1- mine
var counter = 0;
var str = "a1b2c3d5e678";
var sum = 0, digit = 0;
// for( var i = 0; i < str.length; i++ )
// {
//     var ch = str.charAt(i);
//     // if(ch == 'a')
//     // {
//     //     counter++;
//     // }
//     if( ch == '0' || ch == '1' || ch == '2' || ch == '3' || ch == '4' || ch == '5' || ch == '6' || ch == '7' || ch == '8' || ch == '9')
//     {
//         var digit = parseInt( ch );
//         //console.log(digit);
//         counter++;
//         // console.log(typeof digit);
//         sum = sum + digit;

//     }
// }
// console.log(" Total = " + counter);
// console.log(" sum = " + sum);


//----------------------------------------------------------------------------------------------------------
// Logic 2 :- sir

// for( var i = 0; i < str.length; i++ )
// {
//    
//     if( ch>= 48 && ch <= 57 )
//     {
//         counter++;
//         //sum = sum + ch - 48;
//         sum += ch - 48;
//         // sum = sum + ParseInt( str.charAt(i));
//     }
// }
// console.log("Total: " + counter);
// console.log("Sum: " + sum);

//------------------------------------------------------------------------------------------------------
// collect digits like a string. 
var num = "";
for( var i = 0; i < str.length; i++ )
{
    var ch = str.charCodeAt(i);
    if( ch >= 48 && ch <= 57 )
    {
        counter++;
        num += str.charAt(i);
    }
}
console.log(" Total: " + counter);
console.log(" Number : " + num);
//-----------------------------------------------------------------------------------------------------------------