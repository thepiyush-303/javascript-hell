let butn= document.createElement("button");
butn.innerText="Dark Mode"; 
let hey=document.querySelector("div");
let body=document.querySelector("body");
hey.append(butn);
let currmode='light';
if(currmode = "light"){
butn.onclick = () =>{
    body.setAttribute("class","class2");
    console.log("You are in Dark Mode");
    currmode="dark"
};
}
else if(currmode = "dark")
{
    butn.addEventListener("click",()=>{
    body.setAttribute("class","class1");
    console.log("You are in ligth Mode");
    currmode="light";
    })
}
