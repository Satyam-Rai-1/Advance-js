// Hoisting Two Type functin and var.


// Function Hoisting work onliy when function keyword is used
sum(5,15);  /*call*/

function sum(a,b)   /* function dicleration */
{
    Add  =a+b;
    console.log(Add);  /* 20 */
}


// var Hoisting
// Hosting Not work on let and const

var c = 10;
console.log(c)  /*10*/

console.log(b) /*undefined*/
var b = 10;

// above code explain like that
var a ;
console.log(a)  /*undefined*/
a = 10;  




