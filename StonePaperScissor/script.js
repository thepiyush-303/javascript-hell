let userscore=0;
let compscore=0;
// let x;
// let y;
const choices=document.querySelectorAll(".choice");
const playgame=(getid)=>
{
return getid;
}
const getcompchoice=()=>
{
    const option=["Scissor","Rock","Paper"];
    const randomchoice=Math.floor(Math.random()*3);
    return option[randomchoice];
}
choices.forEach((choice)=>{
choice.addEventListener("click", ()=>
{
const getid=choice.getAttribute("id");
// console.log("you selected",getid);
const y=playgame(getid);
console.log("You Selected ",y)
const x=getcompchoice();    
console.log("comp Selected "+x);
const z=playinggame(x,y);
console.log(z);
});
});
const playinggame=(x,y)=>
{
if(y === x)
{
    return "draw";
}
if(y =="Scissor" && x =="Rock")
{
    return "comp wins";
}
else if(y=="Paper" && x=="Scissor")
{
    return "comp wins";
}
else if(y=="Rock" && x=="Paper")
{
    return "comp wins";
}
else 
{
    return "You Wins";
}

};

