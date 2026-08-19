function evenodd(num){
    if(num%2==0){
        console.log(`${num} is a even number`);
    }
    else if(num%2==1){
        console.log(`${num} is a odd number`);
    }
    else{
        console.log('please enter valid data')
    }
}
evenodd(11)
evenodd(12)
evenodd('helloworld')