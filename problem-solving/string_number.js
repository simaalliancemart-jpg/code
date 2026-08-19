const arraydata=[20,"sima","hello",100,"shirin",'100']

for (let data of arraydata){
    if(typeof data=== "string"){
        console.log(`string data: ${data}`);
    }
    else if(typeof data==="number"){
        console.log(`number data: ${data}`);
        
    }
    else{
        console.log(`unable to unidentified data type of ${data}`)
    }
}