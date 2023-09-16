// eg 1 - In object
const obj1 = {
    fname : "satyam",
    lname : "rai",
    course : "MCA",

}

const obj2 = obj1;

console.log(obj1.course);

obj2.fname = "Aman"; /* pass value by refrence  */

console.log(obj2.fname);



// eg 2 -In Array

const array1 = [1,2,3,4]


// const array2 = array1 
const array2 = [].concat(array1)  /* if u want to change only 2nd arry data*/

console.log(array1)
console.log(array2)

array2.push(5)  
console.log(array1)
console.log(array2)

// if u want to change only 2nd arry data

