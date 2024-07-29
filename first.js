let arr=[1,2,3,4,5];
// arr.forEach((val) => {console.log(val);});

const use_of_map = arr.map((val) => {return val;});
console.log(use_of_map);
//returns the array.

const use_of_filter =arr.filter((val) =>{return val % 2 === 0;});
console.log(use_of_filter);
//returns the filtered elements