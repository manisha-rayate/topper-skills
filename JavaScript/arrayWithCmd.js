var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var cmds = ["even", "sum"];

function even(arr)
{
    return arr.filter(function (ele)
                        {
                            return ele % 2 == 0;
                        });
}

function odd(arr)
{
    return arr.filter(function (ele)
                        {
                            return ele % 2 != 0;
                        });
}

function min(arr)
{
    return arr.sort(function (a, b)
                    {
                        return a - b;
                    })[0]
}

function max(arr)
{
    return arr.sort(function (a, b)
                    {
                        return b - a;
                    })[0]
}

function sum(arr)
{
    return arr.reduce( function (sum, ele)
                        {
                            return sum + ele;
                        }, 0);
}

// console.log(odd(arr));
// console.log(even(arr));
// console.log(min(arr));
// console.log(max(arr));
// console.log(sum(arr));

// var oo = odd(arr);
// var result = max(oo);

// console.log(result);

function opertion(arr, cmds)
{
    var result = null;
    for( var cmd of cmds)
    {
        switch(cmd)
        {
            case "even" :{
                            result = even(result == null ? arr : result);
                            break;
                        };
            case "odd" :{
                            result = odd(result == null ? arr : result);
                            break;
                        };
            case "min" :{
                            result = min(result == null ? arr : result);
                            break;
                        };
            case "max" :{
                            result = max(result == null ? arr : result);
                            break;
                        };
            case "sum" :{
                            result = sum(result == null ? arr : result);
                            break;
                        };
            default : {
                        console.log("Invalid operation");
                    }
        }
    }
    return result;
}
console.log(opertion(arr,cmds));
