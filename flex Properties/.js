function Book(title,author,read,pages){
    this.title=title;
    this.author=author;
    this.read=read;
    this.pages=pages;
    this.info=function()
    {
        console.log(this.title);
    };
}