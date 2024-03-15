function fact(n){
if (n==0) {
    return 1
}else {
    return n* fact(n-1)
}

}
console.log(fact(5));

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;   // or   result = result*i;
    }
    return result;
  }
  
  const result = factorial(5); // Calculate the factorial of 5
  console.log(result); // Output: 120
  

const arr=[8,4,5,6,7,5,4,3,3,3]

let newar=arr.splice(1,4) 
console.log(newar);
console.log(arr);