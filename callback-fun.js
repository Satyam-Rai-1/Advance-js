// In js we can assign a function to a variable ,Also as a method.
// Arrow Function
// Callback Function

const myName = () =>{
    return("Satyam")
}



const perOne = (name,text) =>{
    console.log(`Say hi ${name()} ${text} `)

}
perOne(myName,"thanq")


// myName function is pass as argument when callin the perOne Function 
