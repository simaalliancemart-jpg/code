//function using javascript

function arrayreader(){
    const dataFive=["hello",10,"sima","5","siyam",["shirin","nasrin","shabnam"]]
    const lastindex=dataFive.length
    const lastindexvalue=dataFive[lastindex-1]
    const lastin=lastindexvalue.length
    console.log(lastindexvalue[lastin-1])
}
arrayreader()