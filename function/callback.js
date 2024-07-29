function lw(a,b){
    console.log(a+b);
}

function lww(a,b,callback_lw)
{
    callback_lw(a,b);
}
lww(1,2,lw);


