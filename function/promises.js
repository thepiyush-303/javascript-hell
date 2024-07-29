//This is how we execute promises
// let promis= new Promise((resolve,reject) =>
// {
//     console.log("ksadkh");  // hmm yha kuch print nhi krte hmm iske bahar .then ka use krte ha
//     resolve("success");
// })
//the promise object returns two properties 'state'-fullfilled or not , 'result' 


//jb promise ke andr wala kaam complete hoga tabhi resolve ya reject ka msg print krana ha


// function getdata(datavalue,datanumber)
// {
//      return new Promise((resolve,reject)=>{
//         reject(new Error ("an error occured"));
//     setTimeout(()=>{
//         console.log("hello",datanumber);
//         console.log(`hello everyone ${datavalue}`);
//         resolve("success");
//     },2000);
// });
// }

// getdata(23,44);


//HOW TO USE PROMISES.

// const getpromise =  ()=>
// {
//     return new Promise((resolve,reject)=>
//     {
//     console.log("great success"); 
//     resolve("hellojaa");
//     })
// }
// let promise = getpromise();
// promise.then(()=>
// {
//     console.log("promised achieved");
// });


let promiss = new Promise((resolve,reject) =>
{
    resolve("happily done")
})
// promiss.then((value)=>
// {
//   console.log(value);  
// })

promiss.then(alert); // gives alert of happily done.


promiss.catch((error)=>
{
    console.log("404 an error occured")
})







// ye callbacks se better iseliye ha kyuke inme ek ek callbacks ka wait nhi krna pdta aap 50 promise ko call kr skte ha or sb sath ma call honge.

