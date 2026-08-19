// 0 1 1 2 3 5 8 13 21 34 55 89
// for 1 , 1 is n so (n-1)+(n-2)= 1+0=1
// notun data index 2 te push hobe
function fibonacci_array(len){
    let fibbo_array=[0,1]
    let current_data;

    for(let i=2;i<len;i++){
        current_data=fibbo_array[i-1]+fibbo_array[i-2]
        fibbo_array.push(current_data)
        console.log(fibbo_array)

    }
       
        
}
fibonacci_array(7)