
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

let sum=0;
for(const item of arr){
    sum+=item.count
}
console.log(sum);


console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(NaN));