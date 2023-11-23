// que:  write a function to search target in nums, if tyarget exists , then return it's index 
// otherwise return -1 you must write and algorithem with 0(n) runtime complexity

// imput nums= [4,5,6,7,0,1,2]  , target =0 output: 4
// imput nums= [4,5,6,7,0,1,2]  , target =3 output: -1

function linearSearch(arr,target){
  for(let i=0 ; i< arr.length ; i++){
    if (target===arr[i]) {
        return i;
    }
  }
return -1
}

const arr= [4,5,6,7,0,1,2];
const target = 2

console.log(linearSearch(arr,target));

// global linear search
// in this program if element present in array multipal time then stre in array 

function globalinearSearch(arr,target){
    const result=[]
    for(let i=0 ; i< arr.length ; i++){
      if (target===arr[i]) {
          result.push(i);
      }
    }
  if(result.length===0)return -1
  return result
  }
  
  const checkArray= [4,5,6,7,0,1,2,4];
  const pin = 1
  
  console.log(globalinearSearch(checkArray,pin));