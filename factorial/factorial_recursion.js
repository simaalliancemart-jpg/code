function fact_recursion(n){
    if(n===1){
        return 1
    }
    return n*fact_recursion(n-1)
}
console.log("factorial of 4 is:", fact_recursion(4))