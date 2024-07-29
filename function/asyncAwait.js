async function bhatt(){
    let DelhiWhether = new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve("34");
        }, 2000);
    })

    let PanipatWhether = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("43");
        }, 1000);   
    })


let DelhiW = await DelhiWhether
let PaniW = await PanipatWhether

return [DelhiW,PaniW]

}

let a = bhatt()
console.log(a)