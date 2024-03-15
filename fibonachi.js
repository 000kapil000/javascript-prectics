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



function recur(n,series=[0,1]){
    if (n<=2) {
        return series
    }
    const next = series[series.length-1]+ series[series.length-2]
    return recur(n-1,[...series,next])
}


console.log(recur(10));
// function recur(n, series = [0, 1]) {
//     if (n <= 2) {
//       return series;
//     }
  
//     const nextTerm = series[series.length - 1] + series[series.length - 2];
//     return recur(n - 1, [...series, nextTerm]);
//   }
  
//   // Example usage
//   const fibonacciSequence = recur(10);
//   console.log(fibonacciSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  





function fibonachi(num){
    const arr=[1,2]

    for(let i =2; i<num; i++){
        const next=arr[i-1]+arr[i-2]
        arr.push(next)
 
    }
    return arr
}
let nums=10
console.log(fibonachi(num));


let obj = {
    nam: "John Doe", // Provide a default value for `nam`
    city: "Indore",
    get() { // Use an arrow function to access `nam` correctly
      console.log(this.nam); // Access `nam` property directly
    }
  };
  
  obj.get(); // Output: "John Doe" (assuming `nam` has the value "John Doe")
  