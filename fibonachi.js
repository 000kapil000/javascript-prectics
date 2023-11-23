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



// function recur(n,series=[0,1]){
//     if (n<=2) {
//         return series
//     }
//     const next = series[series.length-1]+ series[series.length-2]
//     return recur(n-1[...series,next])
// }

