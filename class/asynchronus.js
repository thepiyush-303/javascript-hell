function getData(dataId,getnextData)
{
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextData){        //checks if the getnextData exists or not
        getnextData();
        }
    },3000);
}
getData(1,()=>
{
    getData(2,()=>
    {
        getData(3, );
    });
});