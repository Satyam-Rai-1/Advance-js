console.log("I am a " + job);     /* Undefined */ 
var job = 'Web-Developer';
console.log("I am a " + job);



role();

function role()
{
    console.log("I am a " + job);    /*Undefined because here var declier like that (var job;) it inislized after ptint var so thats why   */ 
    var job = 'Python Developer'
    console.log("I am a " + job);    /* python developer   */ 
}

// role()