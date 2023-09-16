// eg. of Returning function => A function can return another function .


const interviewQuestion = (name) =>
{
    if(name === "subham")
    {
        return function (topic)  /* Anonymous fumction */
        {
            console.log(`hii ${name}. What is ${topic}? . plz explain us. `)
        }
    }
    if(name === "aman")
    {
        return function (topic)  /* Anonymous fumction */
        {
            console.log(`hii ${name}. What is ${topic}? . plz explain us. `)
        }
    }
    if(name === "anil")
    {
        return function (topic)  /* Anonymous fumction */
        {
            console.log(`hii ${name}. What is ${topic}? . plz explain us. `)
        }
    }
    else
    {
        return function()
        {
            console.log("welcome to interview   ")
        }
    }
}

// way 1 . we can call a function using two peranthasis
interviewQuestion("subham")("FrontEnd Development")
interviewQuestion("aman")("UI")
interviewQuestion("anil")("UX")

// way 2. 

const cand1 = interviewQuestion("subham")
cand1("UI")
cand1("UX")
cand1("Data Science")


const cand2 = interviewQuestion("aman")
cand1("React")
cand1("Nodejs")
cand1("Mongo Db")
