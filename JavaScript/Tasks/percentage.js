var percent = 73;

if( percent > 100 || percent < 0)
{
    console.log(" Invalid percentage ");
}
else if( percent >= 80)
{
    console.log(" Distinction ");
}
else if( percent >= 60 )
{
    console.log(" First class ");
}
else if( percent >= 50 )
{
    console.log(" Second class ");
}
else if( percent >= 40 )
{
    console.log(" Pass ");
}
else
{
    console.log(" Fail");
}