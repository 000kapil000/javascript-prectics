
let arrLinear = [1,10,22,1,22,23,43,2,3,4]

function sorted(a,b){
    return a-b;
}
arrLinear.sort(sorted)
console.log(arrLinear);



let arr = [
    { count: 1 },
    { count: 2 },
    { count: 22 },
    { count: 42 },
    { count: 32 },
    { count: 31 },
    { count: 39 },
    { count: 3 },
    { count: 7 },
    { count: 3 },
]
// const total=arr.reduce((acc,cuu)=>{
// const tot=arr+cuu
// return tot
// 0})
// console.log(total);
let sum=0;
for(const item of arr){
    sum+=item.count
}
console.log(sum);


console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(NaN));
const a={}
console.log(typeof(a));


function bubbleSortAscending(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they're in the wrong order
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  const arrayToSort = [3, 1, 7, 2, 5];
  console.log("Ascending Order:", bubbleSortAscending(arrayToSort));
  
