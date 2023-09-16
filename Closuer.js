const outerFun = (b) =>
{
    let a = 10 ;
    const innerFun = ()=>
    {
        let add = a+b;
        console.log(`Sum of Two Numbers : ${add}`)
    }
    innerFun()
}
outerFun(5)