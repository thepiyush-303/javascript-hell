class parent{
    
    helllo()
    {
        console.log("hello");
    }
}
class child extends parent{  //here child ne parent ke property ko inherit kr liya
constructor()
{
    super();  //to access parent constructor
}
letss()
{
    super.hello();
    console.log("constructor called");
}
}

let obj=new child();


//agar child or parent ma same function ha to priority child wale ko dene ha