function fibo(num){
    const arr=[1,2]

    for(let i=2; i<num;i++){
        const next=arr[i-1]+arr[i-2]
        arr.push(next)
    }
    return arr
}
const num=10;
console.log(fibo(num));