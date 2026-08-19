function fibonacci(len){
    let first_num=0
    let second_num=1
    let current_num;
    console.log(first_num, second_num)

    for(let i =3;i<=len;i++){
        current_num=first_num+second_num
        console.log(current_num)
        first_num=second_num
        second_num=current_num
    }
}

fibonacci(5)