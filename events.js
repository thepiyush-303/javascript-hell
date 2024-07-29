let butn =document.createElement("button");
butn.innerText="click me";
let hey=document.querySelector("div");
hey.append(butn);
// butn.onclick=()=>{
//     console.log("button was clicked");
// };



let hey2=document.querySelector(".class1");
// hey2.onmouseover=()=>{
//  console.log("mousehovered");
//  hey2.setAttribute("class","class2");
// };
// // hey2.style.backgroundColor="purple";


//NODE EVENT
// hey2.onmouseover = (evt) =>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.toElement);
//     console.log(evt.clientX);
//     console.log(evt.type);
// }

//EVENT LISTNER
butn.addEventListener("click" , ()=>{
    console.log("button was clicked");
})


//if we want to remove the event listner then we need the exact same callback function.