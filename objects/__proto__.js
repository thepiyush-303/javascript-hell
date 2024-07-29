// const employee = {
//     calcTax(){
//         console.log("tax rate is 4%")
//     }
// };

// const piyush = {
//     salary:3000,
// }

// // piyush ko agar employee ke function ko use krna ho to '__proto__' ka use kro;
// ab agar tune same func "piyush" obj ma bhi bna dea to jo ke "employee" ma mojud ha to "piyush wala func he use hoga"
// piyush.__proto__ = employee



class namaskar {
    constructor(brand){
        console.log("constructor is called")
        this.brandName = brand
    }
    dandvat(){
        console.log("namaskaram")
    }

    vinte(){
        console.log("namaskaram2")
    }

    // set(brand){
    //     this.brandName = brand;
    // }   
    // ye kaam constructor he krdega jaise he koi obj pass hoga tb

}

let obj1 = new namaskar();
obj1.set("jaiho");
console.log(obj1)
console.log(obj1.brandName)
obj1.vinte()
//hence now you can use all property of "namaskar" in "obj1" 