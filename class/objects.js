const student={
    name:"piyuhs",
    age:18,
    printname: function(){
        console.log(this.name);
    },
}
const letss={
    status:"single",
}
//now letss.printname() >> piyuhs
//to make prototype
letss.__proto__=student;