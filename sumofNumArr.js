const sumOfArr=function(num,target){
    // for(let i=0;i<=num.length;i++){
    //     for(let j=0;j<=num.length;j++){
    //         if(num[i]+num[j]==target){
    //             return [i,j]
    //         }
    //     }
    // }
    const map=new Map()
for(const index in num){
    const pairtarget=target-num[index]
    if(map.has(pairtarget)) return [index,map.get(pairtarget)]
    map.set(num[index],index)
}
}

const num=[2,7,11,15]
const target=9
console.log(sumOfArr(num,target));