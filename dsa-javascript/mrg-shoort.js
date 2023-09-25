// Que:- Impliment Merge short in js 
//  write a function to sort the given array in assending order
// input: num=[8,4,1,5,6,2,3,7] output: [1,2,3,4,5,6,7,8]

function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2);

    let left= mergeSort(arr.slice(0,mid))
    
    let right= mergeSort(arr.slice(mid))

    return merge(left,right)
}
function merge(left ,right){
    let sortedarrr=[]
    while (left.length&& right.length) {
        
        if (left[0]<right[0]) {
            sortedarrr.push(left.shift());
        }else{
            sortedarrr.push(right.shift());
        }
    }
        return [...sortedarrr,...left,...right]
}
arr=[8,4,1,5,6,2,3,7]
console.log(mergeSort(arr));