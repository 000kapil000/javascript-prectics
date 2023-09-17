function duplicates(arr){
    const dupli=[];
    for(let i =0; i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if ( arr[i]===arr[j]&&!dupli.includes(arr[i])) {
                dupli.push(arr[i])
            }
        }
    }
    return dupli
}

function second(arr){
const newarr=[];
for(let i=0 ; i<arr.length; i++){
    if (!newarr.includes(arr[i])) {
        newarr.push(arr[i])
    }
}
return newarr
}


const arr=[1,2,3,4,5,6,7,5,4,3,2,5,6,7,8,76,6]
console.log(second(arr));
console.log(duplicates(arr));