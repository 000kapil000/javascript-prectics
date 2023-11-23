let latters=["a","b","c"]

latters.splice(0,1,"x","y");

console.log(latters);  

var arr={0:'a',1:'b',2:'c',length:3 }

var arr1=Array.from(arr)
console.log(arr1);

// var arr2=[...arr];
// console.log(arr2);

let num =[1,2,4,5,6,7,3,7,8]

for(let i=0 ; i<=num.length;i++){
    if (num[i]==7) {
        continue
    }
    console.log(num[i]);
}


let filterdarr= num.filter((numr)=>{
    return numr!==7
})
console.log(filterdarr);

function countOccurrences(arr) {
    const countObj = {};
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (countObj[num]) {
        // If the number is already in the count object, increment the count
        countObj[num] += 1;
      } else {
        // If the number is not in the count object, initialize the count to 1
        countObj[num] = 1;
      }
    }
  
    return countObj;
  }
  
  const numbers = [1, 2, 3, 2, 1, 4, 5, 3, 2];
  const countResult = countOccurrences(numbers);
  
  console.log(countResult);
  