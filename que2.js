const a= 2;
const b=3;
console.log(a<b&&a===b);

const arrNum=[1,5,2,1,3,65,7,5,3]
const dupli=arrNum.reduce((acc,cuu)=>{
    if (!acc.includes(cuu)) {
        acc.push(cuu)
    }
    return acc
},[])
console.log("reducer filter",dupli);
// const num=[]
// const filnum=num.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log("filter  number",filnum);

// find min and max element in arr

const maxfun=(arr)=>{
    return arrNum.reduce(function(prev,curr){
        return prev>curr?prev:curr
    })
}
console.log(maxfun(arrNum));

const minfun=(arr)=>{
    return arrNum.reduce(function(prev,curr){
        return prev<curr?prev:curr
    })
}
console.log(minfun(arrNum));

function secondlrg(arr){
    frist=arr[0]
    sec=arr[0]
    for(let i=0; i<arr.length;i++){

        if (arr[i]>frist) {
            sec=frist
            frist=arr[i]
        }else if(arr[i]>sec){
            sec=arr[i]
        }
    }
    return sec
}

console.log("sec",secondlrg(arrNum));

const dlt=(arr)=>{
 const fristLrg=Math.max(...arr)
  index=arr.indexOf(fristLrg)
  arr.splice(index,1)
  const secLrg=Math.max(...arr)
 return secLrg
}

console.log(dlt(arrNum));

// fincd the missing value

const lineararr=[1,2,4,5,6,7,9,10]
const misarr=[]
function findarr(arr){
    const minvalue=Math.min(...arr)
    const maxvalue=Math.max(...arr)
   for( let i=minvalue;i<maxvalue;i++){
    if (arr.indexOf(i)<0) {
        misarr.push(i)
    }
   }
   return misarr

}

console.log(findarr(lineararr));

console.log([]==[]);