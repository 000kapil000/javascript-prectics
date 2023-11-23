function sumof(n){
if(n<=0) return []
if(n==1) return [1]
if (n==2) return [1,2]  
const series=sumof(n-1);
series.push(series[n-2]+1)
return series
}

const n =20
console.log(sumof(n));


// output: obj={1:3, 
//              2:3,
//              3:3,
//              4:2,
//              5:2}

// const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3];

let arr=[1,7,8,9,3,4,8,12,3,4,5,1,2,3,4,5,1,2,3]
const obj = {};

for (const element of arr) {
  if (obj[element] === undefined) {
    obj[element] = 0;
  }

  obj[element]++;
}

console.log(obj);


// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if (arr[i].inludes(arr[j])) {
//             return arr[i]
//         }
//     }
// }

 function print_numbers(n){

     if(n == 0){
         return
        }
    print_numbers(n - 1)
    console.log(n)
}

print_numbers(20)
