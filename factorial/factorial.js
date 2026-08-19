function factorial(n){
    let fact=1
    
    for(let i=2;i<=n;i++){
        fact=fact*i
        console.log(i)
    }
    console.log("factorial of",n,"is:",fact)
}

factorial(5)