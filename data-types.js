// Number,string,boolean,undefined,null,symbol  = primitive
// objects - object,function,array              = Non primitive , Refrence DT -> EveryThing treat as an object


// Primitive DT
let a = 10 ;
console.log(typeof(a))
let b = "hello" ;
console.log(typeof(b))
let c = false ;
console.log(typeof(c))
let d;
console.log(typeof(d))
let e = "" ;
console.log(typeof(e))

// Non-primitive DT -> all treated as object

console.log(typeof({})) /*object */
console.log(typeof([])) /*Array */
console.log(typeof( function(){})) /*Function */


const array = [ 1,2,3];
console.log(array)
console.log(array[1])

const obj = { 
     0:1,
     1:1, 
     a:3 
    };
console.log(obj)
console.log(obj.a)
console.log(obj[1])