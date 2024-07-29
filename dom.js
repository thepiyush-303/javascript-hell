let heading = document.createElement("button");
heading.innerText="cllick me";
heading.style.color="black";
heading.style.backgroundColor="red";
let hey =document.querySelector("div");
hey.append(heading);

let ty =document.querySelector(".class1")
heading.onclick = () =>{
    ty.style.backgroundColor='red';
}


let newheading=document.createElement("h1");
newheading.innerHTML="<i>this is the new haeading!!~~</i>";
document.querySelector("body").prepend(newheading);
//also you can use~~ node.append ,node.before , node.after, node.prepend