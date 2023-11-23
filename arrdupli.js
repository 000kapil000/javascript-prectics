
var containDuplicate=function(num){
    // const map=new Map()
    // for (const n of num){
    //     if (map.has(n)) return true
    //     map.set(n,true)
    // }

    const set=new Set(num)
    return set
    // return set.size!==num.length
}

let num=[1,2,3,4,1]
console.log(containDuplicate(num));