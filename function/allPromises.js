const f1promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("I am coming");
    } else {
      reject("I am sick");
    }
  }, 2000);
});

const f2promise = new Promise((resolve, reject)=> {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("I am coming");
    } else {
      reject("I am out of station");
    }
  }, 2000);
});

const f3promise = new Promise((resolve, reject)=> {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("I am coming");
    } else {
      reject("I am not coming");
    }
  }, 2000);
});

// Promise.all([f1promise, f2promise, f3promise])
//   .then((msg)=> {
//     console.log(msg);
//     console.log("alll three are going");
//   })
//   .catch((msg) => {
//     console.log(msg);
//     console.log("yaar rhne dete ha");
//   });



//also you can use promise that if any one is ready for goa then we are going to goa. for this we use .any function

//koi ek bhi agar ready hogya aane ko to chalo.
Promise.any([f1promise, f2promise, f3promise]).then((msg)=>{
    console.log(msg);
    console.log("I am booking tickets");
})
.catch((msg)=>{
    console.log(msg);
    console.log("none of them is going");
});