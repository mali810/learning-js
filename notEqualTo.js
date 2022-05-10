function testStrictNotEqual(val)
{
    if( val !== 17){
        return " Not Equal";
    }
    return "Eequal";
}
let myval = testStrictNotEqual(10);
console.log(myval);
//testStrict(10);//